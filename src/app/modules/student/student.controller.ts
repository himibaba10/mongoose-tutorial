import { Request, Response } from 'express';
import { studentServices } from './student.service';

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved students',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const studentId = req.params.studentId;
    const result = await studentServices.getStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved student',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await studentServices.createStudentIntoDB(student);
    res.status(200).json({
      succcess: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
  getStudents,
  getStudent,
};
