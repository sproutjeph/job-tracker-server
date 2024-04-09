import { Elysia } from "elysia";
import { connectDb } from "./DB/connectDB";
import jobRouter from "./routes/jobRouter";
import securityPlugin from "./plugins/security";

export const app = new Elysia();

async function startServer() {
  await connectDb();
  app
    .use(securityPlugin)
    .get("/", () => "Hello Elysia")
    .use(jobRouter)
    .listen(8000);

  console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  );
}

startServer();
