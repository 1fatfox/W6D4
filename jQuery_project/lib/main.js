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


remove() {
  this.each(node => node.parentNode.removeChild(node));
}

attr(key, val) {
  if (typeof val === "string") {
    this.each(node => node.setAttribute(key, val));
  } else {
    return this.nodes[0].getAttribute(key);
  }
}

addClass(newClass) {
  this.each(node => node.classList.add(newClass));
}

removeClass(oldClass) {
  this.each(node => node.classList.remove(oldClass));
}
