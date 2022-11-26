export const getUserId = {
  tags: ["User"],
  description: "Get user id",
  parameters: [
    {
      name: "userId",
      in: "path",
      description: "Id user to return",
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
