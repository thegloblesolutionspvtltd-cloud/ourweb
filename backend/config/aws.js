const dotenv = require('dotenv');
dotenv.config();

/**
 * Enterprise AWS Secure Authentication Module
 * Supports:
 * 1. Environment Credentials (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
 * 2. IAM Role / Instance Profile Authentication (Zero-key IAM EC2/ECS security)
 * 3. S3 Bucket Security & Server-Side KMS Encryption
 */

const awsConfig = {
  region: process.env.AWS_REGION || 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || null,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || null,
  sessionToken: process.env.AWS_SESSION_TOKEN || null,
  s3Bucket: process.env.AWS_S3_BUCKET_NAME || 'apex-software-secure-vault',
  kmsKeyId: process.env.AWS_KMS_KEY_ID || null, // KMS Key for server-side encryption
};

/**
 * Validate AWS Credential Configuration securely
 */
function validateAWSConfig() {
  const hasEnvKeys = !!(awsConfig.accessKeyId && awsConfig.secretAccessKey);
  const isIAMRoleConfigured = process.env.AWS_EXECUTION_ENV || process.env.AWS_CONTAINER_CREDENTIALS_RELATIVE_URI;

  return {
    status: hasEnvKeys || isIAMRoleConfigured ? 'SECURE_CONFIGURED' : 'DEV_MODE_MOCKED',
    authType: hasEnvKeys ? 'IAM_USER_ENV_KEYS' : isIAMRoleConfigured ? 'IAM_ROLE_INSTANCE_PROFILE' : 'SIMULATED_LOCAL',
    region: awsConfig.region,
    bucket: awsConfig.s3Bucket,
    serverSideEncryption: awsConfig.kmsKeyId ? 'AWS_KMS' : 'AES256',
    isAccessKeyMasked: awsConfig.accessKeyId ? `${awsConfig.accessKeyId.slice(0, 4)}...****` : 'NONE'
  };
}

/**
 * Helper to generate secure S3 storage object parameters with Server-Side Encryption
 */
function getSecureS3UploadParams(filename, mimeType, fileBuffer) {
  const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
  const secureKey = `uploads/${Date.now()}_${Math.random().toString(36).substring(2, 9)}_${sanitizedFilename}`;

  return {
    Bucket: awsConfig.s3Bucket,
    Key: secureKey,
    Body: fileBuffer,
    ContentType: mimeType,
    ServerSideEncryption: awsConfig.kmsKeyId ? 'aws:kms' : 'AES256',
    ...(awsConfig.kmsKeyId && { SSEKMSKeyId: awsConfig.kmsKeyId }),
    ACL: 'private' // Enforce private access, no public read
  };
}

module.exports = {
  awsConfig,
  validateAWSConfig,
  getSecureS3UploadParams
};
