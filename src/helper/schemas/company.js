export const companySchema = {
  CompanyModel: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "The auto-generated id of the user",
        required: true,
      },
      name: {
        type: "string",
        description: "The company name",
        required: true,
      },
      create_date: {
        type: "string",
        description: "The company date create",
      },
      create_uid: {
        type: "string",
        description: "The company create by user id",
      },
      code: {
        type: "string",
        description: "The company code",
        required: true,
      },
      latitude: {
        type: "number",
        description: "The company latitude",
      },
      longitude: {
        type: "number",
        description: "The company longitude",
      },
    },
    example: {
      _id: "636c5a7c355d8f7946087edc",
      name: "My Company",
      create_date: "08:57:12 10-11-2022",
      create_uid: "636c5a78355d8f7946087eda",
      code: "1845F4166D5",
      latitude: -7.250445,
      longitude: 112.768845,
    },
  },
};
