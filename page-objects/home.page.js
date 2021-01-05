import {
  wishList,
  pastPurchases,
  trackPurchases,
  alreadyCustomerButton,
  newToAmazonButton,
  skipSigninButton,
} from "../selectors/home.selectors";

class Home {
  get $wishList() {
    return $(wishList);
  }

  get $pastPurchases() {
    return $(pastPurchases);
  }

  get $trackPurchases() {
    return $(trackPurchases);
  }

  get $alreadyCustomerButton() {
    return $(alreadyCustomerButton);
  }

  get $newToAmazonButton() {
    return $(newToAmazonButton);
  }

  get $skipSigninButton() {
    return $(skipSigninButton);
  }

  clickSkipSignin() {
    this.$skipSigninButton.click();
  }
}
export default new Home();
