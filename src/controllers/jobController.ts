import { Context } from "elysia";
import { createJob, getAllJobs } from "../services/Jobservices";
import { IJob } from "../models/JobModel";

export const jobs = async () => {
  const jobs = await getAllJobs();

  return {
    jobs,
    message: "success",
  };
};

export const create = async (context: Context) => {
  const body = context.body as IJob;
  const data = await createJob(body);

  return {
    data,
    message: "Job created",
  };
};
