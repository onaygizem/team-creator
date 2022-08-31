const Engineer = require("../lib/Engineer");

test("Create a github.", () => {
    const testGithub = "onayau";
    const employeeInstance = new Engineer("Onay", 3, "onayau@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Github to return github", () => {
    const testGithub = "onayau";
    const employeeInstance = new Engineer("Onay", 3, "onayau@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Test the role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Onay", 3, "onayau@gmail.com", "onayau");
    expect(employeeInstance.getRole()).toBe(returnValue);
});