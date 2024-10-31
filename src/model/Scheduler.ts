import { Event } from "./Event";

export class Scheduler {
  // contains ordered list of customers and breaks
  private schedule: Array<Event>;
  constructor() {
    this.schedule = [];
  }

  public addEvent(action: Event) {
    this.schedule.push(action);
  }

  private sortSchedule() {
    this.schedule.sort((a, b) => {
      if (a.startTime < b.startTime) {
        return -1;
      }
      if (a.startTime > b.startTime) {
        return 1;
      }
      return 0;
    });
  }

  public printSchedule() {
    this.sortSchedule();
    this.schedule.forEach((action) => {
      console.log(action.toString());
    });
  }
}
