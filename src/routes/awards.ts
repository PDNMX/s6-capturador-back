import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import { checkJwt } from "../middleware/checkJwt";
import ControllerAwards from "../controllers/ControllerAwards";

const router = Router();

const validations = [checkJwt, asyncHandler(ControllerAwards.checkRequest)];

router.post("/", validations, asyncHandler(ControllerAwards.executeQuery));
router.post("/insert", /* validations, */ asyncHandler(ControllerAwards.insertAward));
router.post('/getAll', validations, asyncHandler(ControllerAwards.getAll));
//router.post("/update", /* validations, */ asyncHandler(ControllerAwards.executeQuery));
router.post("/query", /* validations, */ asyncHandler(ControllerAwards.query));
router.post("/getById", /* validations, */ asyncHandler(ControllerAwards.getById));
router.put('/update', /* validations, */ asyncHandler(ControllerAwards.updateData));

export default router;
