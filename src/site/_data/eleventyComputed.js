const { getGraph } = require("../../helpers/linkUtils");
const { getFileTree } = require("../../helpers/filetreeUtils");
const { userComputed } = require("../../helpers/userUtils");

module.exports = {
  graph: async (data) => await getGraph(data),  // <-- make async and await here
  filetree: (data) => getFileTree(data),
  userComputed: (data) => userComputed(data),
};

