function Events() {
    this.event = {};
  }
  
  Events.prototype.on = function(type, listener) {
    this.event[type] = this.event[type] || [];
    this.event[type].push(listener);
  };
  
  Events.prototype.emit = function(type) {
    if (this.event[type]) {
      this.event.forEach(listener => listener());
    }
  };
  
  module.exports = Events;
  