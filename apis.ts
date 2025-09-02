import { Router } from 'express';
import {sign} from "./handlers";

const router = Router();

router.post('/signup', sign);
