export const postAttendance = {
    tags: ["Attendance"],
    description: "Create attendance",
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
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/AttendanceModel",
                  },
                },
              },
            },
          },
        },
      },
      401: {
        description: "Error: Unauthorized",
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
  