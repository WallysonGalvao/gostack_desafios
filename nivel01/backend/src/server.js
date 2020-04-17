const app = require("./app");

const port = 3333;
app.listen({ port }, () =>
  console.info("❤ server this my love online...", `http://localhost:${port}/`)
);
