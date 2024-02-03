import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import cors from "cors"; // Importa CORS
import accountRouter from "./routes/account.js";
import authRouter from "./routes/auth.js";
import authSessionRouter from "./routes/auth_session.js";
import authTokenRouter from "./routes/auth_token.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const expressApp = express();

// Usa CORS
expressApp.use(cors());

expressApp.use(cookieParser());
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use("/account", accountRouter);
expressApp.use("/auth", authRouter);
expressApp.use("/auth-token", authTokenRouter);
expressApp.use("/auth-session", authSessionRouter);

expressApp.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
