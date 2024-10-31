import { Scheduler } from "./model/Scheduler";
import { Customer } from "./model/Customer";
import { CustomerEvent } from "./model/CustomerEvent";
import { Event, EventType } from "./model/Event";

// create scheduler
const scheduler = new Scheduler();

// create customers
const tim = new Customer("Tim");
const jon = new Customer("Jon");
const nick = new Customer("Nick");

// add actions to scheduler
scheduler.addEvent(new CustomerEvent(tim, "00:00", EventType.PrepareSandwich));
scheduler.addEvent(new CustomerEvent(tim, "01:00", EventType.ServeSandwich));
scheduler.addEvent(new CustomerEvent(jon, "00:30", EventType.PrepareSandwich));
scheduler.addEvent(new CustomerEvent(jon, "01:30", EventType.ServeSandwich));
scheduler.addEvent(new CustomerEvent(nick, "03:00", EventType.PrepareSandwich));
scheduler.addEvent(new CustomerEvent(nick, "04:00", EventType.ServeSandwich));
scheduler.addEvent(new Event("04:30", EventType.Break));

// print schedule
scheduler.printSchedule();
