import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config();
const SECRET = process.env.JWT_TOKEN;
export const generateToken = (payload, expiresIn = "1h") => {
  return jwt.sign(payload, SECRET, { expiresIn });
};
