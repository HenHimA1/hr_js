export const createNotificationSchema = {
    CreateNotificationModel: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "The notification title",
          required: true,
        },
        description: {
            type: "string",
            description: "The notification title",
            required: true,
          },
        user_id: {
          type: "string",
          description: "The notification user id",
        },
      },
      example: {
        title: "My Notification",
        description: "1845F4166D5",
        user_id: "636c5a78355d8f7946087eda",
      },
    },
  };
  

export const notificationSchema = {
    NotificationModel: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          description: "The auto-generated id of the notification",
          required: true,
        },
        title: {
          type: "string",
          description: "The notification title",
          required: true,
        },
        description: {
            type: "string",
            description: "The notification title",
            required: true,
          },
        create_date: {
          type: "string",
          description: "The notification date create",
        },
        user_id: {
          type: "string",
          description: "The notification user id",
        },
      },
      example: {
        _id: "636c5a7c355d8f7946087edc",
        title: "My Notification",
        description: "1845F4166D5",
        create_date: "08:57:12 10-11-2022",
        user_id: "636c5a78355d8f7946087eda",
      },
    },
  };
  