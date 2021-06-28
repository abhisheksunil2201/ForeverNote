const Notebook = require("../../models/Notebook");
const checkAuth = require("../../utils/check-auth");

module.exports = {
  Mutation: {
    createNote: async (_, { notebookId, title, body }, context) => {
      const { username } = checkAuth(context);
      if (body.trim() === "") {
        throw new UserInputError("Empty note", {
          errors: {
            body: "Note body must not empty",
          },
        });
      }

      const notebook = await Notebook.findById(notebookId);

      if (notebook) {
        notebook.notes.unshift({
          body,
          title,
          createdAt: new Date().toISOString(),
        });
        await notebook.save();
        return notebook;
      } else throw new UserInputError("Notebook not found");
    },
    deleteNote: async (notebookId, noteId) => {},
  },
};
