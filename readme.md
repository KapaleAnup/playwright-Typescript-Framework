Playwright with Typescript framework design

Playwright Demo - This project is based on Microsoft Playwright which enables reliable end-to-end testing for modern web apps.


Installing Playwright:
npm init playwright@latest

Running the Test:
npx playwright test

HTML Test Reports:
npx playwright show-report

Updating Playwright:
npm install -D @playwright/test@latest

Check Version:
npx playwright --version

Folder sturcture :
-src
    -basepages
    -pages
    -sections
    -utils

-basepages
    -commonbasepage

-pages 
    -All pages 
-Data
    -loginData.json
    -registrationData.json

-env
    -.env.stage
    -.env.prod

-constants
    -error messages

utils
    -dataGenerator

tests
    -all test cases
