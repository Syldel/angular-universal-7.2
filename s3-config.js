var config = {};

config.fileExtensions = [
    'js',
    'css',
    'woff2',
    'woff',
    'svg',
    'ttf',
    'woff',
    'eot',
    'ico'
];

config.s3Options = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION || 'eu-west-3', // "eu-west-3" is UE (Paris)
    signatureVersion: 'v4'
};
config.localDir = './dist/browser';
config.s3Bucket = process.env.AWS_S3_BUCKET;
config.subDir = process.env.NODE_ENV || 'development';

module.exports = config;