"use strict";
function tag(name, content, props, attrs) {
  const el = document.createElement(name);
  if (props) {
    Object.entries(props).forEach(([propName, propVal]) => (el[propName] = propVal));
  }

  if (attrs) {
    Object.entries(attrs).forEach(([attrName, attrVal]) => el.setAttribute(attrName, attrVal));
  }

  if (content) {
    el.innerHTML = content;
  }

  return el;
}
