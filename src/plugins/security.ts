import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

export default (app: Elysia) =>
  app.use(
    cors({
      origin: ["http://localhost:3000", "https://exam-gpt.vercel.app"],
      credentials: true,
    })
  );
