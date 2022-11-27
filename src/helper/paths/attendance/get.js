export const getAttendance = {
    tags: ["Attendance"],
    description: "List of all attendance",
    parameters: [
      {
        name: "user_id",
        in: "query",
        description: "ID of user",
        schema: {
          type: "string",
        },
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
  