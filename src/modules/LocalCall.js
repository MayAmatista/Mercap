import { Call } from './Call.js';

export class LocalCall extends Call {
  constructor(datetimeStart, datetimeEnd, place) {
    super(datetimeStart, datetimeEnd, place);
  }

  variableCost() {
    return (this.isWorkingHour() ? 0.20 : 0.10);
  }

  isWorkingHour() {
    const dayOfWeek = this.datetimeStart.getDay();
    const hour = this.datetimeStart.getHours();
    return (dayOfWeek !== 6 && dayOfWeek !== 0) && (hour >= 8 && hour < 20);
  }
}
