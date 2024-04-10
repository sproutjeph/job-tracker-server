import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
import mongoose from "mongoose";

export interface IJob extends mongoose.Document {
  company: string;
  position: string;
  jobStatus: string;
  jobType: string;
  jobLocation?: string;
  createdAt?: Date;
  jobLink?: string;
  createdBy: mongoose.Types.ObjectId;
}

const JobSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    jobLink: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

JobSchema.index({ company: 1, position: 1 }, { unique: true });

export default mongoose.model<IJob>("Job", JobSchema);
