import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/inventory", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const alertSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  amount: {
    type: Number,
  },
  location: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Activities = mongoose.model("activities", activitySchema);
const Alerts = mongoose.model("alerts", alertSchema);
const Items = mongoose.model("items", itemSchema);
const Users = mongoose.model("users", userSchema);

export { Activities, Alerts, Items, Users };
