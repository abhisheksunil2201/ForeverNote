const { model, Schema } = require("mongoose");

const notebookSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  notes: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
});

module.exports = model("Notebook", notebookSchema);
