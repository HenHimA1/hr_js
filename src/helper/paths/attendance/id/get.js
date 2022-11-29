export const getAttendanceId = {
    tags: ["Attendance"],
    description: "Get attendance id",
    parameters: [
      {
        name: "attendanceId",
        in: "path",
        description: "Id attendance to return",
        required: true,
        schema: { type: "string", example: "636c5a78355d8f7946087eda" },
      },
    ],
    responses: {
      200: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "success",
                },
                data: {
                  $ref: "#/components/schemas/AttendanceModel",
                },
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
              $ref: "#/components/schemas/ErrorResponse",
            },
          },
        },
      },
    },
  };
  