import SuccessResponse from "../domain/types/generics/SuccessResponse";
import {
  createJob,
  findByIdAndDelete,
  getAllJobs,
} from "../services/Jobservices";
import JobModel, { IJob } from "../models/JobModel";
import { Context, NotFoundError } from "elysia";

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

export async function deleteJob(context: Context) {
  const { id } = context.params;
  return await findByIdAndDelete(id);
}
