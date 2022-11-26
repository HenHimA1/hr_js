export const postNotificationId = {
  tags: ["Notification"],
  description: "Post notification id",
  parameters: [
    {
      name: "notificationId",
      in: "path",
      description: "Id notification to return",
      required: true,
      schema: { type: "string", example: "636c5a78355d8f7946087eda" },
    },
  ],
  requestBody: {
    description: "Optional description in Markdown",
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/CreateNotificationModel" },
      },
      "application/xml": {
        schema: { $ref: "#/components/schemas/CreateNotificationModel" },
      },
      "application/x-www-form-urlencoded": {
        schema: { $ref: "#/components/schemas/CreateNotificationModel" },
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
                $ref: "#/components/schemas/NotificationModel",
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
