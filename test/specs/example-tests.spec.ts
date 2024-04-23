import LoginScreen from "../screen-objects/login.screen.android.js";
import HomeScreen from "../screen-objects/home.screen.android.js";

describe("Example tests", function () {
  beforeEach(async function () {
    await LoginScreen.clearApp();
    await LoginScreen.activateApp();
  });

  afterEach(async function () {
    await LoginScreen.terminateApp();
  });

  it("login screen is visible", async function () {
    await expect(await LoginScreen.scrollView).toBeDisplayed();
  });

  it("login button is visible", async function () {
    await expect(await LoginScreen.loginButton).toBeDisplayed();
  });

  it("signup button is visible", async function () {
    await expect(await LoginScreen.signupButton).toBeDisplayed();
  });

  it("skip login button is visible", async function () {
    await expect(await LoginScreen.skipLoginButton).toBeDisplayed();
  });

  it("skip login will display local title screen", async function () {
    await LoginScreen.skipLoginButton.click();
    await expect(await HomeScreen.localTitleScreen).toBeDisplayed();
  });
});
