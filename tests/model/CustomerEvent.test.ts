import { CustomerEvent } from "../../src/model/CustomerEvent";
import { Customer } from "../../src/model/Customer";
import { EventType } from "../../src/model/Event";
describe("CustomerEvent", () => {
  it("should return the string representation of the event", () => {
    const customer = new Customer("AAA");
    const event = new CustomerEvent(
      customer,
      "00:00",
      EventType.PrepareSandwich
    );
    expect(event.toString()).toBe("00:00 Prepare sandwhich for AAA");
  });
});
