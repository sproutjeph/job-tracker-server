import { Elysia, t } from "elysia";
import { fetchAll, create } from "../controllers/jobController";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

export default (app: Elysia) =>
  app.get("/all-jobs", fetchAll).post("/create-job", create, {
    body: t.Object({
      company: t.String({ minLength: 1 }),
      position: t.String({ minLength: 1 }),
      jobStatus: t.String({ enum: Object.values(JOB_STATUS) }),
      jobType: t.String({ enum: Object.values(JOB_TYPE) }),
      jobLocation: t.String(),
      jobLink: t.String(),
    }),
  });
