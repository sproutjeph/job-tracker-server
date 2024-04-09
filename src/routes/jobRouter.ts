import { Elysia, t } from "elysia";
import { jobs } from "../controllers/jobController";

export default (app: Elysia) => app.get("/all-jobs", jobs);
