export const getCompanyId = {
    tags: ["Company"],
    description: "Get company id",
    parameters: [
      {
        name: "companyId",
        in: "path",
        description: "Id company to return",
        required: true,
        schema: { type: "string", example: "636c5a7c355d8f7946087edc" },
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
                  $ref: "#/components/schemas/CompanyModel",
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
  