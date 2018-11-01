// In this phase we are going to create a class to hold DOM nodes and offer
// convenient methods for traversal and manipulation. We will implement
// empty, remove, attr, addClass, removeClass, html, find, children, and parent.



// Element.DomNodeCollection

const nodes = Array.from(node.getElementsByClassName(DomNodeCollection))

class DomNodeCollection () {
  constructor(nodes) {
    this.nodes = nodes;
  }
};


html(html) {
  if (typeof html === "string") {
    this.each((node) => {
      node.innerHTML = html;
    });
  } else if (this.nodes.length > 0) {
    return this.nodes[0].innerHTML;
  }
}

empty() {
  this.html('');
}

append(children) {
  if (this.nodes.length === 0) return;

  if (typeof children === 'object' &&
      !(children instanceof DomNodeCollection)) {
    // ensure argument is coerced into DomNodeCollection
    children = $l(children);
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
  };


  on(eventName, callback) {
    this.each((node) => {
      node.addEventListener(eventName, callback);
      const eventKey = `jqliteEvents-${eventName}`;
      if (typeof node[eventKey] === "undefined") {
        node[eventKey] = [];
      }
      node[eventKey].push(callback);
    });
  }

  off(eventName) {
    this.each((node) => {
      const eventKey = `jqliteEvents-${eventName}`;
      if (node[eventKey]) {
        node[eventKey].forEach((callback) => {
          node.removeEventListener(eventName, callback);
        });
      }
      node[eventKey] = [];
    });
  }


module.exports = DomNodeCollection;
