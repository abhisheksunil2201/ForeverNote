const notebooksResolvers = require("./notebooks");
const usersResolvers = require("./users");

module.exports = {
  Query: {
    ...notebooksResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...notebooksResolvers.Mutation,
  },
};
