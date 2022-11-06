import { connect, connection } from "mongoose";

export async function connectDatabase() {
  try {
    await connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

connection.on("connected", () => {
  console.log("Mongodb connected to:", connection.db.databaseName);
});

connection.on("error", (error) => {
  console.error("error", error);
});

connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});
