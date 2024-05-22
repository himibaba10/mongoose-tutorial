import { Student } from './student.interface';
import StudentModel from './student.model';

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentFromDB = async (studentId: string) => {
  const result = await StudentModel.findOne({ id: studentId });
  return result;
};

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const studentServices = {
  getStudentsFromDB,
  createStudentIntoDB,
  getStudentFromDB,
};
