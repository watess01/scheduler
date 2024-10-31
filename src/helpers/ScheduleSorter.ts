import { Scheduler } from "../model/Scheduler";

// ScheduleSorter.ts
export class ScheduleSorter {
  static sort(schedule: any[]): any[] {
    // Sorting logic here
    return schedule.sort((a, b) => {
      // Example sorting logic
      return a.date - b.date;
    });
  }
}