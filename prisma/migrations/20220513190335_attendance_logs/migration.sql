-- CreateTable
CREATE TABLE "attendance_log" (
    "id" SERIAL NOT NULL,
    "attendanceId" INTEGER NOT NULL,
    "oldValues" JSONB NOT NULL,
    "newValues" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attendance_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "attendance_log" ADD CONSTRAINT "attendance_log_attendanceId_fkey" FOREIGN KEY ("attendanceId") REFERENCES "attendance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
