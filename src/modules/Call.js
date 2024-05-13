export class Call {
    constructor(datetimeStart, datetimeEnd, destination) {
      this.datetimeStart = datetimeStart;
      this.datetimeEnd = datetimeEnd;
      this.destination = destination;
    }
  
    cost() {
      return this.variableCost() * this.duration();
    }
  
    duration() {
      const duration = this.datetimeEnd.getTime() - this.datetimeStart.getTime();
      return Math.floor(duration / (1000 * 60));
    }
  }
  