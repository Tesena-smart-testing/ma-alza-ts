# Testing native mobile app on Android using Webdriver.io and Appium

## Preconditions

- [Node.js](https://nodejs.org) LTS installed
- [Android Studio](https://developer.android.com/studio)
- [Appium Inspector](https://github.com/appium/appium-inspector)

## Installation

- clone repo using `git clone git@github.com:Tesena-smart-testing/templates_for_MA_training.git`
- if you cannot find the `alza-ts` folder, then switch git branch to the `radekB/dev2`. This means, that this code was not yet merged into the `main` branch
- switch to the `<project>/alza-ts` folder and run `npm i`
- check `wdio.confi.ts` file and its `capabilities` prop. Create AVD emulation in the Android Studio accordingly, so this setup would work. Otherwise, adjust setup values to your emulated mobile device.

## How to run tests

- start Android Studio and correct mobile phone emulation
- run `npx wdio run ./wdio.conf.ts`

## How to create completely new project

- run `npm init wdio@latest ./path/to/new/project` or `npm init wdio@latest .` if you are already in your selected project folder
- when prompted by CLI wizard, select needed options. Do not forget to select Typescript compiler and appium installation
- wait until project is created
- see [GUIDE](https://webdriver.io/docs/gettingstarted#initiate-a-webdriverio-setup)

## If you are using ESET Antivirus

- be careful, latest update of ESET as of 23.04.2024 breaks nodejs and npm functionalities due to nodejs handling of the certificates. ESET newly implemented scanning of HTTPS protocol and blocks nodejs' network calls. Current workaround is to disable the https scanning or wait few days until this is fixed and rolled out from ESET. See [HERE](https://forum.eset.com/topic/40702-eset-ssl-protection-produces-an-invalid-certificate-chain-for-nodejs-apps/page/2/)

## If you have problems with appium wdio service

Sometimes, at least in my case, the appium service does not work correctly, due to selected port blockage. Best way to resolve this is to disable appium service in the `wdio.conf.ts` file and run appium manually in the second console. Ensure, that port in wdio.conf.ts is the same, as when running command `npx appium --port <port>`.
