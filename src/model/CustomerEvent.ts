import { Event, EventType, MyTime } from "./Event";
import { Customer } from "./Customer";

export class CustomerEvent extends Event {
  private Customer: Customer;
  constructor(customer: Customer, time: MyTime, actionType: EventType) {
    super(time, actionType);
    this.Customer = customer;
  }

  public toString(): string {
    return `${super.toString()} for ${this.Customer.getName()}`;
  }
}
