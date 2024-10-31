  // sorter should be in a helper class
  export function sortSchedule() {
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