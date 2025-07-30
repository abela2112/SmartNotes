import admin from "firebase-admin";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();





const serviceAccount = JSON.parse(
  fs.readFileSync(process.env.FIREBASE_PRIVATE_KEY_PATH, "utf-8")
);

 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export default admin; 
