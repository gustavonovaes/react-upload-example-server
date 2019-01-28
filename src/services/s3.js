const aws = require('aws-sdk')

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  params: {
    Bucket: process.env.AWS_S3_BUCKET_NAME
  }
})

module.exports = s3
