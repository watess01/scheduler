export enum EventType {
  PrepareSandwich,
  ServeSandwich,
  Break,
}

// list of actiontypes with associated time
const actionTypeTimeSeconds = {
  [EventType.PrepareSandwich]: 60,
  [EventType.ServeSandwich]: 30,
  [EventType.Break]: 3600, // default 1hr
};

// type for MyTime so it can be changed later
export type MyTime = string;

export interface IEvent {
  actionType: EventType;
  startTime: MyTime;
}

export class Event implements IEvent {
  startTime: MyTime;
  actionType: EventType;
  constructor(time: MyTime, actionType: EventType) {
    this.startTime = time;
    this.actionType = actionType;
  }

  // this should not be here, eg class EventService
  public static getEventDescription(event:EventType): string {
    switch (event) {
      case EventType.PrepareSandwich:
        return "Prepare sandwhich";
      case EventType.ServeSandwich:
        return "Serve sandwhich";
      case EventType.Break:
        return "Take a break";
      default:
        return "Unknown action";
    }
  }

  public toString(): string {
    // format 00:00 Prepare sandwhich for Tim
    return `${this.startTime} ${Event.getEventDescription(this.actionType)}`;
  }
}
