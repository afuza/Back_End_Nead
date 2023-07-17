import AtuhData from '../models/AuthModels.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAuth = async (req, res) => {
    try {
        const authData = await AtuhData.find();
        res.status(200).json(authData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AtuhData.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid Credentials'
            });
        }
        const usernameid = user.id;
        const name = user.username;

        const accessToken = jwt.sign({
            usernameid,
            name,
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: 60000,
        });
        const refreshToken = jwt.sign({
            usernameid,
            name,
        }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "7d",
        });

        await AtuhData.updateOne({ _id: user._id }, { refreshToken: refreshToken });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await AtuhData.findOne({ username });
        if (user) {
            return res.status(400).json({
                message: 'username already exists'
            });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new AtuhData({
            username,
            password: hashedPassword,
        });
        await newUser.save();
        res.json({ message: 'User Created' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    try {
        if (!refreshToken) return res.status(204).json({ message: 'You are not logged in' });
        const username = await AtuhData.findOne({ refreshToken: refreshToken });
        if (!username) return res.status(204).json({ message: 'You are not logged in' });
        const usernameid = username._id;
        await AtuhData.updateOne({ _id: usernameid }, { refreshToken: null });
        res.clearCookie("refreshToken");

        return res.status(200).json({ message: 'Logout Success' });
    } catch (error) {
        res.status(500).json({ message: "Erorr" });
    }
};

export const refresh_Token = async (req, res,) => {
    const refreshToken = req.cookies.refreshToken;
    try {
        if (!refreshToken) return res.sendStatus(401);

        const username = await AtuhData.findOne({
            refreshToken: refreshToken,
        });

        if (!username) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const usernameId = username.id;
            const user = username.username;
            const accessToken = jwt.sign(
                {
                    usernameId,
                    user,
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: 60000,
                }
            );
            res.json({ accessToken });
        }
        );
    } catch (error) {
        res.status(500).json({ message: "Erorr" });
    }
};