import mongoose from "mongoose";

const path = "./utils/mockData.json";
const file = Bun.file(path);

import Job from "./src/models/JobModel";
import User from "./src/models/UserModel.js";

try {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const user = await User.create({
    name: "Don",
    email: "donjeph@gmail.com",
    password: "onmyway222",
    lastName: "Jeph",
    location: "San Francisco",
    role: "admin",
  });

  const fileExists = await file.exists();
  if (!fileExists) {
    console.log("File does not exist");
    process.exit(1);
  }
  const jsonJobs = await file.json();
  const jobs = jsonJobs.map((job: any) => {
    return { ...job, createdBy: user?._id };
  });
  await Job.deleteMany({ createdBy: user?._id });
  await Job.create(jobs);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
