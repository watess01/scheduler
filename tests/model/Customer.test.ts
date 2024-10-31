// relative paths should be replaced with aliases
import { Customer } from "../../src/model/Customer";

describe("Customer", () => {
  it("should return the name of the customer", () => {
    const customer = new Customer("John Doe");
    expect(customer.getName()).toBe("John Doe");
  });
});
