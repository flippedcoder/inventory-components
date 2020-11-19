class Activity {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

class Alert {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

class Item {
  constructor(id, { name, date, amount, location }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.location = location;
  }
}

class User {
  constructor(id, { name, date, description }) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.description = description;
  }
}

const rootDb = {};

export const resolvers = {
  Query: {
    getActivity: (_, { id }) => {
      return new Activity(id, rootDb[id]);
    },
    getActivities: (_) => {
      const activityList = Object.entries(rootDb)
      
      return activityList.map((activityData) => new Activity(...activityData));
    },
    getAlert: (_, { id }) => {
      return new Alert(id, rootDb[id]);
    },
    getAlerts: (_) => {
      const alertList = Object.entries(rootDb)
      
      return alertList.map((alertData) => new Alert(...alertData));
    },
    getItem: (_, { id }) => {
      return new Item(id, rootDb[id]);
    },
    getItems: (_) => {
      const itemList = Object.entries(rootDb)
      
      return itemList.map((itemData) => new Item(...itemData));
    },
    getUser: (_, { id }) => {
      return new User(id, rootDb[id]);
    },
    getUsers: (_) => {
      const userList = Object.entries(rootDb)
      
      return userList.map((userData) => new User(...userData));
    },
  },
  Mutation: {
    createActivity: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDb[id] = input;

      return new Activity(id, input);
    },
    createAlert: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDb[id] = input;

      return new Alert(id, input);
    },
    createItem: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDb[id] = input;

      return new Item(id, input);
    },
    createUser: (_, { input }) => {
      const id = require("crypto").randomBytes(10).toString("hex");
      rootDb[id] = input;

      return new User(id, input);
    },
  },
};
