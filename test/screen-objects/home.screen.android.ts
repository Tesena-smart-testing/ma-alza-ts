import AppAndroid from "../lib/android/app.android.js";

class HomeScreen extends AppAndroid {
  get localTitleScreen() {
    return $('android=new UiSelector().resourceId("LocalTitleScreen")');
  }
}

export default new HomeScreen();
