# Capitec Assessment - Mobile and API Automation Framework

A mobile end-to-end (E2E) automation framework built with \[WebdriverIO](https://webdriver.io), \[TypeScript](https://typescriptlang.org), \[Appium](https://appium.io), and \[Axios](https://axios-http.com) for API helper/setup routines.

 ---

## Table of Contents

* [Tech Stack](#tech-stack)

* [Project Structure](#project-structure)

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Configuration](#configuration)

* [Running Tests](#running-tests)


---

 

## Tech Stack

 

* **Test Runner:** WebdriverIO (`@wdio/cli`)

* **Language:** TypeScript (`ts-node`, `typescript`)

* **Mobile Driver:** Appium (with `@wdio/appium-service` and Android driver)

* **HTTP Client:** Axios (for pre-test seeding, mock data, or API verification)

* **Test Framework:** Mocha / Jasmine

 ---

## Project Structure

 
```text

|____apps
| |____android
| |____ios
|____package-lock.json
|____package.json
|____README.md
|____test
| |____api
| | |____booking.service.ts
| |____pageobjects
| | |____login.page.ts
| | |____page.ts
| | |____secure.page.ts
| |____screen\_objects
| | |____android
| | | |____form.components.screen.ts
| | | |____login.signup.screen.ts
| | | |____main.screen.ts
| | | |____menu.screen.ts
| | | |____swipe.screen.ts
| | |____ios
| |____specs
| | |____api.tests.ts
| | |____mobile.tests.ts
| | |____test.e2e.ts
|___tsconfig.json
|____utils
| |____scroll.util.ts
|____wdio.api.conf.ts
|____wdio.conf.ts
|____wdio.mobile.conf.ts

```
---

## Prerequisites

* **Node.js** (v18.x or higher recommended)
* **Java Development Kit (JDK 11 or 17)** for Android/Appium
* **Android Studio** (for Android Emulator \& `ANDROID\_HOME` setup) or **Xcode** (for iOS Simulator on macOS)
* **Appium** drivers installed (`appium driver install uiautomator2`)
---

 ## Installation

1. Clone the repository and navigate into the project directory:

   ```bash
   git clone https://github.com/nkombali/capitec-assessment.git
   cd capitec-assessment
   ```


2. Install dependencies:
   ```bash
   npm install
   ```
---

## Configuration 

* **Appium Service:** `@wdio/appium-service` is configured in `wdio.mobile.conf.ts` so WebdriverIO manages the Appium server lifecycle automatically.

* **App Installation:**

It is recommended that store the app build in `/apps/android` folder, however, because I am required to run these tests on a real device, there may be device security challenges. Here is a workaround below:


***Security Workaround:***

1. install the app on the target device
2. connect your device and allow Developer Mode and turn USB Debugging on
3. run `adb devices` to list connected devices, then grab the device name
4. use this device name for `appium:deviceName` in `wdio.mobile.conf.ts`

---

* **WDIO Configuration Files:**

1. Mobile Tests --> `wdio.mobile.conf.ts`
2. API Tests --> `wdio.api.conf.ts`

 ---

 ## Running Tests

* **Run Android tests:**

  ```bash
  npm run wdio:mobile
  ```

* **Run API tests:**
  
  ```bash
  npm run wdio:api
  ```

---



## Generating and Viewing Allure Report

* **Allure Report:**

```bash
npm run allure
```

---

## Test Cases

* **Mobile (Android) Tests:**

1. Sign Up and the Login
2. Login with invalid credentials
3. Form interactions
4. Swipe Horizontally and Vertically



* **API Tests:**

1. Verify Auth is generated successfully
2. Verify a booking can be placed successfully

---

 

 
