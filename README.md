\# Capitec Assessment - Mobile and API Automation Framework

 

A mobile end-to-end (E2E) automation framework built with \[WebdriverIO](https://webdriver.io), \[TypeScript](https://typescriptlang.org), \[Appium](https://appium.io), and \[Axios](https://axios-http.com) for API helper/setup routines.

 

\---

 

\## Table of Contents

\* \[Tech Stack](#tech-stack)

\* \[Project Structure](#project-structure)

\* \[Prerequisites](#prerequisites)

\* \[Installation](#installation)

\* \[Configuration](#configuration)

\* \[Running Tests](#running-tests)

 

\---

 

\## Tech Stack

 

\* \*\*Test Runner:\*\* WebdriverIO (`@wdio/cli`)

\* \*\*Language:\*\* TypeScript (`ts-node`, `typescript`)

\* \*\*Mobile Driver:\*\* Appium (with `@wdio/appium-service` and Android/iOS drivers)

\* \*\*HTTP Client:\*\* Axios (for pre-test seeding, mock data, or API verification)

\* \*\*Test Framework:\*\* Mocha / Jasmine

 

\---

 

\## Project Structure

 

```text

|\_\_\_\_apps

| |\_\_\_\_android

| |\_\_\_\_ios

|\_\_\_\_package-lock.json

|\_\_\_\_package.json

|\_\_\_\_README.md

|\_\_\_\_test

| |\_\_\_\_api

| | |\_\_\_\_booking.service.ts

| |\_\_\_\_pageobjects

| | |\_\_\_\_login.page.ts

| | |\_\_\_\_page.ts

| | |\_\_\_\_secure.page.ts

| |\_\_\_\_screen\_objects

| | |\_\_\_\_android

| | | |\_\_\_\_form.components.screen.ts

| | | |\_\_\_\_login.signup.screen.ts

| | | |\_\_\_\_main.screen.ts

| | | |\_\_\_\_menu.screen.ts

| | | |\_\_\_\_swipe.screen.ts

| | |\_\_\_\_ios

| |\_\_\_\_specs

| | |\_\_\_\_api.tests.ts

| | |\_\_\_\_mobile.tests.ts

| | |\_\_\_\_test.e2e.ts

|\_\_\_\_tsconfig.json

|\_\_\_\_utils

| |\_\_\_\_scroll.util.ts

|\_\_\_\_wdio.api.conf.ts

|\_\_\_\_wdio.conf.ts

|\_\_\_\_wdio.mobile.conf.ts



```

 

\---

 

\## Prerequisites

 

\* \*\*Node.js\*\* (v18.x or higher recommended)

\* \*\*Java Development Kit (JDK 11 or 17)\*\* for Android/Appium

\* \*\*Android Studio\*\* (for Android Emulator \& `ANDROID\_HOME` setup) or \*\*Xcode\*\* (for iOS Simulator on macOS)

\* \*\*Appium\*\* drivers installed (`appium driver install uiautomator2` / `appium driver install xcuitest`)

 

\---

 

\## Installation

 

1\. Clone the repository and navigate into the project directory:

   ```bash

   git clone https://github.com/nkombali/capitec-assessment.git

   cd capitec-assessment

   ```

 

2\. Install dependencies:

   ```bash

   npm install

   ```

 

\---

 

\## Configuration

 

\* \*\*Appium Service:\*\* `@wdio/appium-service` is configured in `wdio.mobile.conf.ts` so WebdriverIO manages the Appium server lifecycle automatically.



\* \*\*App Installation:\*\*

It is recommended that store the app build in `/apps/android` folder, however, because I am required to run these tests on a real device, there may be device security challenges. Here is a workaround below:



\*\*\*Security Workaround:\*\*\*

1. install the app on the target device
2. connect your device and allow Developer Mode and turn USB Debugging on
3. run `adb devices` to list connected devices, then grab the device name
4. use this device name for `appium:deviceName` in `wdio.mobile.conf.ts`



\---

   

\* \*\*WDIO Configuration Files:\*\*



1. Mobile Tests --> `wdio.mobile.conf.ts`
2. API Tests --> `wdio.api.conf.ts`

 

\---

 

\## Running Tests

 

\* \*\*Run Android tests:\*\*

  ```bash

  npm run wdio:mobile

  ```

 

\* \*\*Run API tests:\*\*

  ```bash

  npm run wdio:api

  ```

 

\---



\## Generating and Viewing Allure Report



\* \*\*Allure Report:\*\*

```bash

npm run allure

```



\---

 

\## Test Cases



\* \*\*Mobile (Android) Tests:\*\*

1. Sign Up and the Login
2. Login with invalid credentials
3. Form interactions
4. Swipe Horizontally and Vertically



\* \*\*API Tests:\*\*

1. Verify Auth is generated successfully
2. Verify a booking can be placed successfully



```

 

 

