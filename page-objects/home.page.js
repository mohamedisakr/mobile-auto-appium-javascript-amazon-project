class Home {
  get $wishList() {
    return $(
      "//android.widget.TextView[@resource-id='com.amazon.mShop.android.shopping:id/view_your_wish_list']"
    );
  }

  get $pastPurchases() {
    return $(
      '//android.widget.TextView[@resource-id="com.amazon.mShop.android.shopping:id/Find_purchase"'
    );
  }

  get $trackPurchases() {
    return $(
      "android.widget.TextView[@resource-id='com.amazon.mShop.android.shopping:id/track_your_packages'"
    );
  }

  get $alreadyCustomerButton() {
    return $(
      "//android.widget.Button[@resource-id='com.amazon.mShop.android.shopping:id/sign_in_button']"
    );
  }

  get $newToAmazonButton() {
    return $(
      "//android.widget.Button[@resource-id='com.amazon.mShop.android.shopping:id/new_user']"
    );
  }

  get $skipSigninButton() {
    return $(
      "//android.widget.Button[@resource-id='com.amazon.mShop.android.shopping:id/skip_sign_in_button']"
    );
  }

  clickSkipSignin() {
    this.$skipSigninButton.click();
  }
}
module.exports = new Home();
