import dotenv from 'dotenv';

dotenv.config();

const { NODE_ENV } = process.env;
export const nodeEnv = NODE_ENV || 'development';

const isProduction = NODE_ENV === 'production';

const firebaseApiKey = isProduction
  ? process.env.PROD_FB_API_KEY
  : process.env.DEV_FB_API_KEY;

const firebaseAuthDomain = isProduction
  ? process.env.PROD_FB_AUTH_DOMAIN
  : process.env.DEV_FB_AUTH_DOMAIN;

const firebaseDatabaseURL = isProduction
  ? process.env.PROD_FB_DATABASE_URL
  : process.env.DEV_FB_DATABASE_URL;

const firebaseProjectId = isProduction
  ? process.env.PROD_FB_PROJECT_ID
  : process.env.DEV_FB_PROJECT_ID;

const firebaseStorageBucket = isProduction
  ? process.env.PROD_FB_STORAGE_BUCKET
  : process.env.DEV_FB_STORAGE_BUCKET;

const firebaseMessagingSenderId = isProduction
  ? process.env.PROD_FB_MESSAGING_SENDER_ID
  : process.env.DEV_FB_MESSAGING_SENDER_ID;

export const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  databaseURL: firebaseDatabaseURL,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
};
