const DomNodeCollection = require("./dom_node_collection");


window.$l = (arg) => {

};

const select = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodeArr = Array.from(nodes);
  return new DomNodeCollection(nodesArr);
}
