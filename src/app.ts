import "dotenv/config";
import express from "express";
import passport from "passport";
import session from "express-session";
import path from "path";
import configurePassPortStrategy from "./auth";
import routes from "./routes";

const app = express();
const PORT = 3002;

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use("/", express.static(__dirname + "/views"));

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

configurePassPortStrategy();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
