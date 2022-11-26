const getAttendance = {
  tags: ["Attendance"],
  description: "List of all attendance",
  responses: {
    200: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: {
              success: 1,
              data: [
                {
                  _id: "attendance_id",
                  employee_id: "attendance_employee_id",
                  check_in: "attendance_check_in",
                  check_out: "attendance_check_out",
                  create_date: "attendance_create_date",
                },
              ],
              error: null,
            },
          },
        },
      },
    },
    401: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            example: { success: 0, data: null, error: "Error Message" },
          },
        },
      },
    },
  },
};

const attendancePath = { "/attendance": { get: getAttendance } };

export { attendancePath };
