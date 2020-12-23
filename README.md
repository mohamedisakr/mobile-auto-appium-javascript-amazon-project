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
    }
]
```

### Start emulator from command line

1. type: cd C:\Users\STC\AppData\Local\Android\Sdk\emulator
2. type: emulator -avd Pixel_2_API_30 (emulator name)
   or
   type: emulator -avd Pixel_2_API_30 -no-snapshot-load

### List all up and running emulator/devices

type: adb devices

### To install apk application file directly to mobile emulator

type: adb install <<apk file path>>

## Tasks

### Task 1 To validate all the fields displayed and working as required
