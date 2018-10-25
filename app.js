//const createError = require("http-errors");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
//const cookieParser = require("cookie-parser");
const logger = require("morgan");
const config = require("./helpers/keys");
// Import Routes
const indexRouter = require("./routes/index");
const QuestionRouter = require("./routes/api/questionRoute");
// const authRouter = require("./routes/auth");
const authRouter = require("./routes/api/auth");
// const profileRouter = require("./routes/profile");
const profileRouter = require("./routes/api/profile");
//const postRouter = require("./routes/post");
const postRouter = require("./routes/api/posts");
// const envRouter = require("./routes/env");
const envRouter = require("./routes/api/env");
// const commentRouter = require("./routes/comment");
const inboxRouter = require("./routes/inbox");
const userRouter = require("./routes/user");
const searchRouter = require("./routes/api/search");
const app = express();

// Express Session
app.use(
  session({
    secret: "Mentornity",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
require("./helpers/passport")(passport);
// MongoDB Schemas
const User = require("./models/user");
// Mlab Mongoose setup
const dbadd = require("./helpers/keys").mongoURI;
mongoose.connect(dbadd);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Body Parser Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//Express Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*app.use(cookieParser());*/
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter); //Landing Page
app.use("/auth", authRouter); // Auth
app.use("/profile", profileRouter);
app.use("/post", postRouter);
app.use("/env", envRouter);
// app.use("/comment", commentRouter);
app.use("/inbox", inboxRouter);
app.use("/user", userRouter);
app.use("/question", QuestionRouter);
app.use("/search", searchRouter);
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});
*/
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
