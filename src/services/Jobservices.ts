import { NotFoundError } from "elysia";
import JobModel, { IJob } from "../models/JobModel";
import ConflictError from "../domain/exceptions/ConflictError";
import MongoServerError from "../domain/exceptions/MongoServerError";

/**
 * Fetches all users from the database.
 *
 * @returns {Promise<JobModel[]>} A promise that resolves to an array of Jobs objects.
 */
export function getAllJobs(): Promise<(typeof JobModel)[]> {
  return JobModel.find();
}

/**
 * Creates a new job.
 *
 * @param payload - The job data to be created.
 * @returns {Promise<JobModel>} A promise that resolves to the created job.
 * @throws {ConflictError} If a job with the same data already exists.
 * @throws {Error} If an error occurs while creating the user.
 */

export async function createJob(payload: IJob) {
  try {
    const jobExists = await JobModel.findOne({
      company: payload.company,
      position: payload.position,
    });

    if (jobExists) {
      throw new ConflictError("Job already exists");
    }

    return await JobModel.create(payload);
  } catch (e) {
    const error = e as MongoServerError;

    if (error.name === "MongoServerError" && error.code === 11000) {
      throw new ConflictError("User exists.");
    }

    throw error;
  }
}

export async function getJobById(id: string) {
  const job = await JobModel.findById(id);
  if (!job) {
    throw new NotFoundError("Job not found");
  }
  return job;
}

export async function findByIdAndDelete(id: string) {
  const job = await JobModel.findByIdAndDelete(id);
  if (!job) {
    throw new NotFoundError("Job not found");
  }
  return { job, message: "Job deleted" };
}
