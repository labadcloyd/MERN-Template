const axios = require("axios");
const app = require("express")();
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = process.env.PORT || 3000;
require("dotenv").config({ path: ".env" });
const { connectDb } = require("./src/backend/utils");
connectDb();

nextApp.prepare().then(() => {
  // logging out
  app.delete("/api/deleteSession", async (req, res) => {
    const cookieHeader = req.headers.cookie.split(";");

    const finalHeader = cookieHeader.map((item) => {
      const [title, value] = item.split("=");
      if (title.includes("next-auth.session-token")) {
        return `${title}=`;
      }
      return item;
    });

    return res.setHeader("Set-Cookie", finalHeader).end();
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

  setInterval(() => {
    axios
      .get(process.env.PING_SERVER_URL)
      .then((res) => {
        // console.log("Response:", res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, 15 * 60 * 1000); // 15 minutes in milliseconds
});
