import express from "express";
import { vehicle } from "./api/vehicle.js";

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.route("/development/dealers").get(vehicle.getDealers);
app.route("/development/vehicles/:bac").get(vehicle.getDealerDetails);

app.listen(port, () =>
  console.log("Server is successfully running on " + port)
);

export { app };
