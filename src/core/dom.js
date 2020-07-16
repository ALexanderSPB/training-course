class Dom {
  constructor(selector) {
    if (typeof selector === 'string') {
      this.$el = document.querySelector(selector)
    } else {
      this.$el = selector
    }
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    } 
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this;
  }

  get data() {
    return this.$el.dataset;
  }
  
  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  on(event, cb) {
    this.$el.addEventListener(event, cb)
  }

  off(event, cb) {
    this.$el.removeEventListener(event, cb)
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    Object.assign(this.$el.style, styles)
  }
}


export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes)
  }
  return $(el);
}
