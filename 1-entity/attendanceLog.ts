import { Attendance } from "./attendance";

export class AttendanceLog {
  private id: string;
  private newAttendance: Attendance;
  private oldAttendance: Attendance;

  constructor(
    id: string,
    newAttendance: Attendance,
    oldAttendance: Attendance
  ) {
    this.id = id;
    this.newAttendance = newAttendance;
    this.oldAttendance = oldAttendance;
  }
}
