import { fetchAll, create, deleteJob } from "../controllers/jobController";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
import { Elysia, t } from "elysia";

export default (app: Elysia) =>
  app
    .get("/all-jobs", fetchAll)
    .delete("/delete-job/:id", deleteJob)
    .post("/create-job", create, {
      body: t.Object({
        company: t.String({ minLength: 1 }),
        position: t.String({ minLength: 1 }),
        jobStatus: t.String({ enum: Object.values(JOB_STATUS) }),
        jobType: t.String({ enum: Object.values(JOB_TYPE) }),
        jobLocation: t.String(),
        jobLink: t.String(),
      }),
    });
