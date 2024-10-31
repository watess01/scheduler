import { Event } from "./Event";
import { ScheduleSorter } from "../helpers/ScheduleSorter";

export class Scheduler {
  // contains ordered list of customers and breaks
  private schedule: Array<Event>;
  constructor() {
    this.schedule = [];
  }

  public addEvent(action: Event) {
    this.schedule.push(action);
  }

  private sortSchedule(): void {
    this.schedule = ScheduleSorter.sort(this.schedule);
  }

  public printSchedule() {
    this.sortSchedule();
    this.schedule.forEach((action) => {
      console.log(action.toString());
    });
  }
}
