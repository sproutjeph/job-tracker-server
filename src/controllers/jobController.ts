import { getAllJobs } from "../services/getAllJobsService";

export const jobs = async () => {
  const jobs = await getAllJobs();

  return {
    jobs,
    message: "All jobs retrieved successfully",
  };
};
