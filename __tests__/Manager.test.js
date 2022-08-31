// My Attempt
const Manager = require("../lib/Manager");

test("Create an office number.", () => {
    const testOfficeNumber = 3;
    const employeeInstance = new Manager("Onay", 3, "onayau@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Test role", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Onay", 3, "onayau@gmail.com", 3);
    expect(employeeInstance.getRole()).toBe(returnValue);
});