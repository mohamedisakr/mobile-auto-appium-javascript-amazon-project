const {
  searchBox,
  cart,
  voiceSearch,
  homePage,
  navigationPanel,
  signInButton,
  createAccount,
} = require("../selectors/main.selectors");

class Main {
  //
  get $searchBox() {
    return $(searchBox);
  }

  get $cart() {
    return $(cart);
  }

  get $voiceSearch() {
    return $(voiceSearch);
  }

  get $homePage() {
    return $(homePage);
  }

  get $navigationPanel() {
    return $(navigationPanel);
  }

  get $signInButton() {
    return $(signInButton);
  }

  get $createAccount() {
    return $(createAccount);
  }
}

module.exports = new Main();
