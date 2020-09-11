const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  const authorization = req.headers.authorization;
  console.log(authorization);

  const userpass = authorization.split(" ")[1];
  const plaintext = Buffer.from(userpass, "base64").toString("ascii");

  const user_name = plaintext.split(":")[0];
  const user_password = plaintext.split(":")[1];

  if (user_name == "admin" && user_password == "admin") {
    res.send("Uspjesna auth..");
  } else {
    res.send("Greška kod auth..");
  }
});

const PORT = 3000;
app.listen(PORT, console.log("SERVER RADI NA PORTU " + PORT));
