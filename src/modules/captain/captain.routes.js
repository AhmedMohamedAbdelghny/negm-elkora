import { Router } from "express";
import * as CC from "./captain.controller.js";
import { validation } from "../../middleware/validation.js";
import * as CV from "./captain.validation.js";




const router = Router();

router.post("/signUp", validation(CV.signUp), CC.signUp);
router.get("/confirmEmail/:token", validation(CV.confirmEmail), CC.confirmemail);
router.get("/rfreashToken/:token", validation(CV.rfreashToken), CC.rfreashToken);
router.patch("/forgetPassword", validation(CV.forgetPassword), CC.forgetPassword);
router.patch("/resetPassword/:token", validation(CV.resetPassword), CC.resetPassword);
router.post("/signIn", validation(CV.signIn), CC.signIn);

/**
 * 1 get all captins
 * 2 get all child answer task    ? degree "optional" عاوز الأطفال اللى عملوا تاسك معينة
 * 3 التاسكات اللى طفل معين عملها
 * 4 virtual populate => كل التاسكات موما بالناس اللى حلتها 
 * 5- documentaion , vercel , 
 */



export default router;
