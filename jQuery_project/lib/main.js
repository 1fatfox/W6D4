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

children() {
  let childNodes = [];
  this.each((node) => {
    const childNodeList = node.children;
    childNodes = childNodes.concat(Array.from(childNodeList));
  });
  return new DomNodeCollection(childNodes);
}

parent() {
  const parentNodes = [];
  this.each(({ parentNode }) => {
    // we apply 'visited' property to prevent adding duplicate parents
    if (!parentNode.visited) {
      parentNodes.push(parentNode);
      parentNode.visited = true;
    }
  });

  find(selector) {
  let foundNodes = [];
  this.each((node) => {
    const nodeList = node.querySelectorAll(selector);
    foundNodes = foundNodes.concat(Array.from(nodeList));
  });
  return new DomNodeCollection(foundNodes);
}


remove() {
  this.each(node => node.parentNode.removeChild(node));
}
