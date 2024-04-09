import { NotFoundError } from "elysia";
import JobModel from "../models/JobModel";

/**
 * Fetches all users from the database.
 *
 * @returns {Promise<JobModel[]>} A promise that resolves to an array of Jobs objects.
 */
export function getAllJobs(): Promise<(typeof JobModel)[]> {
  return JobModel.find();
}
