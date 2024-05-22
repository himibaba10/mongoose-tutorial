import express, { Router } from 'express';
import { studentControllers } from './student.controller';

const studentRoute: Router = express.Router();

studentRoute.get('/', studentControllers.getStudents);
studentRoute.get('/:studentId', studentControllers.getStudent);
studentRoute.post('/create-student', studentControllers.createStudent);

export const studentRoutes = studentRoute;
