const { S3Client, PutObjectCommand, DeleteObjectCommand, HeadObjectCommand, } = require("@aws-sdk/client-s3");

const profileCredentials = {
    endpoint: 'https://s3.nl-ams.scw.cloud',
    region: 'nl-ams',
    version: 'latest',
    s3ForcePathStyle: true,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
};


const s3Client = new S3Client(profileCredentials);

const uploadFile = async (file, folder) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${folder}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: 'public-read',
        };
        const command = new PutObjectCommand(params);
        const data = await s3Client.send(command);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const deleteFile = async (filekey) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: filekey,
        };
        const command = new DeleteObjectCommand(params);
        const data = await s3Client.send(command);
        return data;
    } catch (error) {
        console.log(error);
    }
}

const readFile = async (filekey) => {
    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: filekey,
        };
        const command = new HeadObjectCommand(params);
        const data = await s3Client.send(command);
        return data;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { uploadFile, deleteFile, readFile };