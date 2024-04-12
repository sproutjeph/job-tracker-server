import { Context } from "elysia";
import { createJob, getAllJobs } from "../services/Jobservices";
import { IJob } from "../models/JobModel";
import SuccessResponse from "../domain/types/generics/SuccessResponse";

export const fetchAll = async () => {
  const jobs = await getAllJobs();

  return {
    jobs,
    message: "success",
  };
};

export const create = async (
  context: Context
): Promise<SuccessResponse<IJob>> => {
  const body = context.body as IJob;
  const data = await createJob(body);

  return {
    data,
    message: "Job created",
  };
};
