import { capitalize } from "./utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('zzz')
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!method) {
        throw new Error('no method')
      }
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method])
    })
  }
  
  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      this.$root.off(listener, this[method])
    });
  }
}

function getMethodName(name) {
  return 'on' + capitalize(name)
}
