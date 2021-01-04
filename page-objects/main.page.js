class Main {
  //
  get $searchBox() {
    return $(
      "//android.widget.EditText[@resource-id='com.amazon.mShop.android.shopping:id/rs_search_src_text'"
    );
  }

  get $cart() {
    return $("~Cart");
  }

  get $voiceSearch() {
    return $("~Voice search, double tap and say what you want to search for");
  }

  get $homePage() {
    return $("~Home");
  }

  get $navigationPanel() {
    return $(
      "//android.widget.ImageView[@resource-id='com.amazon.mShop.android.shopping:id/chrome_action_bar_burger_icon'"
    );
  }

  get $signInButton() {
    return $("//android.widget.Button[@text='Sign in']");
  }

  get $createAccount() {
    return $("//android.view.View[@text='Create an account']");
  }
}

module.exports = new Main();
