import upload from "../Config/multerConfig";
import {
  createPlantorium,
  deleteSpecificPlantorium,
  getReport,
  postGeneratedReport,
  updateSpecificPlantorium,
} from "../Controllers/PlantoriumController";
const express = require("express");

const plantoriumRoutes = express.Router();

plantoriumRoutes.post(
  "/createNew",
  upload.array("Photos", 4),
  createPlantorium
);
plantoriumRoutes.delete("/:id", deleteSpecificPlantorium);
plantoriumRoutes.put("/:id", updateSpecificPlantorium);
plantoriumRoutes.post("/generateReport", postGeneratedReport);
plantoriumRoutes.get("/getReport/:id", getReport);
export default plantoriumRoutes;
