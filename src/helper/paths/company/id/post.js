export const postCompanyId = {
  tags: ["Company"],
  description: "Post company id",
  parameters: [
    {
      name: "companyId",
      in: "path",
      description: "Id company to return",
      required: true,
      schema: { type: "string", example: "636c5a7c355d8f7946087edc" },
    },
  ],
  requestBody: {
    description: "Optional description in Markdown",
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/CompanyModel" },
      },
      "application/xml": {
        schema: { $ref: "#/components/schemas/CompanyModel" },
      },
      "application/x-www-form-urlencoded": {
        schema: { $ref: "#/components/schemas/CompanyModel" },
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
