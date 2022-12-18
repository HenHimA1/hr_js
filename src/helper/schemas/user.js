export const updateUserSchema = {
  UpdateUserModel: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The Name Company",
        required: true,
      },
      email: {
        type: "string",
        description: "The Email Company",
        required: true,
      },
      password: {
        type: "string",
        description: "The Password Company",
        required: true,
      },
    },
    example: {
      name: "staff",
      email: "staff@mycompany.com",
      password: "staff",
    },
  },
};

export const userSchema = {
    UserModel: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          description: "The auto-generated id of the user",
        },
        active: {
          type: "boolean",
          description: "The user status",
        },
        name: {
          type: "string",
          description: "The user name",
        },
        user_type: {
          type: "string",
          description: "The user type",
        },
        email: {
          type: "string",
          description: "The user email",
        },
        create_date: {
          type: "string",
          description: "The user date create",
        },
        company_id: {
          type: "string",
          description: "The user company",
        },
      },
      example: {
        _id: "636c5a78355d8f7946087eda",
        active: false,
        name: "Admin My Company",
        user_type: "client",
        email: "admin@mycompany.com",
        create_date: "08:57:12 10-11-2022",
        company_id: "636c5a7c355d8f7946087edc",
      },
    },
  };