import AWS from 'aws-sdk';

// Set up S3
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
});

export const uploadDocument = async (content: string, filename: string) => {
  const params = {
    Bucket: 'bucket-name',
    Key: filename,
    Body: content,
    ContentType: 'text/plain',
  };

  try {
    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully. ${data.Location}`);
  } catch (err) {
    console.error(`Error uploading file: ${err}`);
  }
};
