export const getCompany = {
  tags: ["Company"],
  description: "List of all company",
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
                  $ref: "#/components/schemas/CompanyModel",
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
