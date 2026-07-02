import axios from "axios";

const LOG_URL = "http://4.224.186.213/evaluation-service/logs";
const TOKEN = "YOUR_ACCESS_TOKEN_HERE";

export async function Log(stack, level, packageName, message) {
  try {
    const res = await axios.post(
      LOG_URL,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log:", res.data);
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}