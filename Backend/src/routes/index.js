import express from "express";
import registerRoute from "./registerRoute.js";

const router = express.Router();
router.use(registerRoute);

export default router; 