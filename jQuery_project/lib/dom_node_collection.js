// In this phase we are going to create a class to hold DOM nodes and offer
// convenient methods for traversal and manipulation. We will implement
// empty, remove, attr, addClass, removeClass, html, find, children, and parent.



// Element.DomNodeCollection

const nodes = Array.from(node.getElementsByClassName(DomNodeCollection))

class DomNodeCollection () {
  constructor(nodes) {
    this.nodes = nodes;
  }
}


module.exports = DomNodeCollection;
