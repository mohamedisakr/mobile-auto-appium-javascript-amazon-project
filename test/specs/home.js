const home = require("../../page-objects/home.page");
//
describe("home page", () => {
  //
  it("Task 1 verify all the fields displayed and working as required", () => {
    //
    try {
      expect(home.$alreadyCustomerButton).toBeDisplayed();
      expect(home.$newToAmazonButton).toBeDisplayed();
      expect(home.$skipSigninButton).toBeDisplayed();
    } catch (error) {
      console.log(error);
    }
  });
});
