import { driver } from "@wdio/globals";

export default class AppAndroid {
  public readonly appId: string;

  constructor() {
    this.appId = "cz.alza.eshop";
  }

  public async clearApp() {
    await driver.execute("mobile: clearApp", { appId: this.appId });
  }

  public async activateApp() {
    await driver.execute("mobile: activateApp", { appId: this.appId });
  }

  public async terminateApp() {
    await driver.execute("mobile: terminateApp", { appId: this.appId });
  }

  public async wait({ timeout }: { timeout: number }) {
    await driver.pause(timeout);
  }
}
