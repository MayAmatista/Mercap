import { Call } from "./Call.js";
export class LongDistanceCall extends Call {
  constructor(startTime, endTime, costPerMinute, destination) {
    super(startTime, endTime);
    this.costPerMinute = costPerMinute;
    this.destination = destination;
  }

  variableCost() {
    return this.costPerMinute;
  }

}
