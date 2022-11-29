export const postAttendanceId = {
    tags: ["Attendance"],
    description: "Post attendance id",
    parameters: [
      {
        name: "attendanceId",
        in: "path",
        description: "Id attendance to return",
        required: true,
        schema: { type: "string", example: "636c5a78355d8f7946087eda" },
      },
    ],
    requestBody: {
      description: "Optional description in Markdown",
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/CreateAttendanceModel" },
        },
        "application/xml": {
          schema: { $ref: "#/components/schemas/CreateAttendanceModel" },
        },
        "application/x-www-form-urlencoded": {
          schema: { $ref: "#/components/schemas/CreateAttendanceModel" },
        },
      },
    },
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
  