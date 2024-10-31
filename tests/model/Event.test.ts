import { Event, EventType } from "../../src/model/Event";

describe("Event", () => {
  it("should return the description of types", () => {
    expect(Event.getEventDescription(EventType.PrepareSandwich)).toBe(
      "Prepare sandwhich"
    );
    expect(Event.getEventDescription(EventType.ServeSandwich)).toBe(
      "Serve sandwhich"
    );
    expect(Event.getEventDescription(EventType.Break)).toBe("Take a break");
  });

  it("should return the string representation of the event", () => {
    const event = new Event("00:00", EventType.Break);
    expect(event.toString()).toBe("00:00 Take a break");
  });
});
