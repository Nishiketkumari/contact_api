import express from "express";
import { register,login } from "../controllers/user.js";

const router = express.Router();

//user register
//@api dec :- user register
//@api method :- post
//@api endPoint :- /api/user/register
router.post('/register', register);

//user login
//@api dec :- user login
//@api method :- post
//@api endPoint :- /api/user/login
router.post('/login', login);


export default router