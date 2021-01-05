import home from "../../page-objects/home.page"; //= require("../../page-objects/home.page");
//
describe("home page", () => {
  // passed
  it("Task 1 verify all the fields displayed and working as required", () => {
    try {
      expect(home.$wishList).toBeDisplayed();
      expect(home.$pastPurchases).toBeDisplayed();
      expect(home.$trackPurchases).toBeDisplayed();
      expect(home.$alreadyCustomerButton).toBeDisplayed();
      expect(home.$newToAmazonButton).toBeDisplayed();
      expect(home.$skipSigninButton).toBeDisplayed();
    } catch (error) {
      console.log(error);
    }
  });

  // passed
  // it("Task 2 verify click skip signin button", () => {
  //   //
  //   home.clickSkipSignin();
  // });
  //
});
