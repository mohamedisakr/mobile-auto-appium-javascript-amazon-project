## Appium Mobile Automation using JavaScript E-Commerce Project

### Pre-Installation

1.

### Installation Steps

1. npm init -y
2. npm install webdriverio
3. npm i --save-dev @wdio/cli
4. npx wdio config
5. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
6. add npx wdio run wdio.conf.js in scripts => test in package.json file
7. add the following configuration in wdio.config.js file

```
  port: 4723,
  host: "localhost",
  path: "/wd/hub",
```

```
capabilities: [
    {
      platformName: "Android",
      platformVersion: "11.0",
      deviceName: "coti", //"Pixel_2_API_30",
      app: "E:\\Projects Prep\\Guru99 Appium Mobile Auto\\app\\com.vector.guru99.apk",
      appPackage: "com.amazon.mShop.android.shopping",
      appActivity:".com.amazon",
    }
]
```

```
capabilities: {
  deviceName: 'Samsung Tab',
  udid: 'xxxxxxxxxxxxx',
  platformName: 'Android',
  platformVersion: '7.0',
  appPackage: 'com.app.preprod',
  appActivity: 'com.app.android.web.app.bridge.MainActivity',
  noReset: true,
  newCommandTimeout: 0,
},
```

### Start emulator from command line

1. type: cd C:\Users\STC\AppData\Local\Android\Sdk\emulator
2. type: emulator -avd coti (emulator name)
   or
   type: emulator -avd coti -no-snapshot-load

### List all up and running emulator/devices

type: adb devices

### To install apk application file directly to mobile emulator

type: adb install <<apk file path>>

## Tasks

### Task 1 To validate all the fields displayed and working as required

## https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/android/activity-startup.md

Appium needs to know package and activity names in order to properly initialize the application under test. This information is expected to be provided in driver capabilities and consists of the following keys:

appActivity: The name of the main application activity
appPackage: The identifier of the application package
appWaitActivity: The name of the application activity to wait for/which starts the first
appWaitPackage: The id of the application package to wait for/which starts the first
appWaitDuration: The maximum duration to wait until the appWaitActivity is focused in milliseconds (20000 by default)

All these capabilities are optional. If they are not set explicitly then Appium tries to auto detect them by reading their values from the APK manifest. Although, if the application under test is supposed to be already installed on the device (noReset=true) then at least appActivity and appPackage options are required to be set, since no package manifest is available in such case. If you don't set appWaitPackage and appWaitActivity explicitly then these are getting assigned to appPackage/appActivity values automatically. For more details check on the implementation of packageAndLaunchActivityFromManifest method in the appium-adb package.
