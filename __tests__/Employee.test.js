const Employee = require("../lib/Employee");

test("Create an employee", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Test the name", () => {
    const name = "Onay";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test the ID", () => {
    const id = 2;
    const employeeInstance = new Employee("Onay", id);
    expect(employeeInstance.id).toBe(id);
})

test("Test the email", () => {
    const email = "onayau@gmail.com";
    const employeeInstance = new Employee("Onay", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Test getName method - Name", () => {
    const testName = "Onay";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test getID method - ID", () => {
    const testID = 2;
    const employeeInstance = new Employee("Onay", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test getEmail method - email", () => {
    const testEmail = "onayau@gmail.com";
    const employeeInstance = new Employee("Onay", 3, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Test role", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Onay", 3, "onayau@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})

