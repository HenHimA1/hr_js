export const getUser = {
  tags: ["User"],
  description: "List of all user",
  parameters: [
    {
      name: "company_id",
      in: "query",
      description: "ID of company",
      schema: {
        type: "string",
      },
    },
    {
      name: "active",
      in: "query",
      description: "User status",
      schema: {
        type: "boolean",
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
                  $ref: "#/components/schemas/UserModel",
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
