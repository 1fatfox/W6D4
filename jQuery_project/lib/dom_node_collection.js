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


module.exports = DomNodeCollection;
