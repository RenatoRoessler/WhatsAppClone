export class ClassEvent {
  constructor() {
    this._events = {};
  }

  on(eventNane, fn) {
    if (!this._events[eventNane]) this._events[eventNane] = new Array();
    this._events[eventNane].push(fn)
  }

  trigger() {
    let args = [...arguments];
    let eventName = args.shift();
    args.push(new Event(eventName))
    if (this._events[eventName] instanceof Array) {
      this._events[eventName].forEach(fn => {
        fn.apply(null, args);
      })
    }
  }

  
}