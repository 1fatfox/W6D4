const DomNodeCollection = require("./dom_node_collection");


window.$l = (arg) => {
  switch (typeof arg) {
  case "function":
    return registerDocReadyCallback(arg);
  case "string":
    return getNodesFromDom(arg);
  case "object":
    if (arg instanceof HTMLElement) {
      return new DomNodeCollection([arg]);
    }
  }
};

const select = (selector) => {
  const nodes = document.querySelectorAll(selector);
  const nodeArr = Array.from(nodes);
  return new DomNodeCollection(nodesArr);
}
