// My Attempt
const Intern = require("../lib/Intern");

test("Create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Onay", 3, "onayau@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Test officeNumber", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Onay", 3, "onayau@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Test role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Onay", 3, "onayau@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});