export const postUserId = {
    tags: ["User"],
    description: "Post user id",
    parameters: [
      {
        name: "userId",
        in: "path",
        description: "Id user to return",
        required: true,
        schema: { type: "string", example: "636c5a78355d8f7946087eda" },
      },
    ],
    requestBody: {
      description: "Optional description in Markdown",
      required: true,
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/UpdateUserModel" },
        },
        "application/xml": {
          schema: { $ref: "#/components/schemas/UpdateUserModel" },
        },
        "application/x-www-form-urlencoded": {
          schema: { $ref: "#/components/schemas/UpdateUserModel" },
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
                  $ref: "#/components/schemas/UserModel",
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
  