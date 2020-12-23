class Home {
  $alreadyCustomerButton() {
    $("~com.amazon.mShop.android.shopping:id/sign_in_button");
  }
  $newToAmazonButton() {
    $("~com.amazon.mShop.android.shopping:id/new_user");
  }
  $skipSigninButton() {
    $("~com.amazon.mShop.android.shopping:id/skip_sign_in_button");
  }
}
module.exports = new Home();
