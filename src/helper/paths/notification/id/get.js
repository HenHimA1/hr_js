export const getNotificationId = {
    tags: ["Notification"],
    description: "Get notification id",
    parameters: [
      {
        name: "notificationId",
        in: "path",
        description: "Id notification to return",
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
  