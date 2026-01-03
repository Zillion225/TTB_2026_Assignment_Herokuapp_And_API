// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPageObject } from '../pageObject/page/loginPage.po'
import { SecurePageObject } from '../pageObject/page/securePage.po'
import { test_data } from '../resources/data/testData.json' with { type: 'json' };

test('Login success', async ({ page }) => {
  var pagePO = new LoginPageObject(page);
  var securePO = new SecurePageObject(page);
  var loginUser = test_data.user1;
  var verifyObj = {
    msg1: 'You logged into a secure area!',
    msg2: 'You logged out of the secure area!'
  }

  await test.step('Visit website', async () => {
    await pagePO.goto();
  });

  await test.step('Check on login page', async () => {
    await pagePO.expectOnLoginPage();
  });

  await test.step('Login website', async () => {
    await pagePO.login(loginUser);
  });

  await test.step('Check on secure page', async () => {
    await securePO.expectOnSecurePage()
  });

  await test.step(`Check '${verifyObj.msg1}' visible`, async () => {
    await expect(securePO.lblFlashMsg).toContainText(verifyObj.msg1);
  });

  await test.step(`Logout`, async () => {
    await securePO.logout()
  });

  await test.step('Check on login page', async () => {
    await pagePO.expectOnLoginPage();
  });

  await test.step(`Check '${verifyObj.msg2}' visible`, async () => {
    await expect(pagePO.lblFlashMsg).toContainText(verifyObj.msg2);
  });
});

test('Login failed - Password incorrect', async ({ page }) => {
  var pagePO = new LoginPageObject(page);
  var securePO = new SecurePageObject(page);
  var loginUser = test_data.userFailPasswordIncorrect;
  var verifyObj = {
    msg1: 'Your password is invalid!'
  }

  await test.step('Visit website', async () => {
    await pagePO.goto();
  });

  await test.step('Check on login page', async () => {
    await pagePO.expectOnLoginPage();
  });

  await test.step('Login website', async () => {
    await pagePO.login(loginUser);
  });

  await test.step(`Fail message ${verifyObj.msg1} is show`, async () => {
    await expect(pagePO.lblFlashMsg).toContainText(verifyObj.msg1);
  });
});

test('Login failed - Username not found', async ({ page }) => {
  var pagePO = new LoginPageObject(page);
  var securePO = new SecurePageObject(page);
  var loginUser = test_data.userFailUsernameInvalid;
  var verifyObj = {
    msg1: 'Your username is invalid!'
  }

  await test.step('Visit website', async () => {
    await pagePO.goto();
  });

  await test.step('Check on login page', async () => {
    await pagePO.expectOnLoginPage();
  });

  await test.step('Login website', async () => {
    await pagePO.login(loginUser);
  });

  await test.step(`Fail message ${verifyObj.msg1} is show`, async () => {
    await expect(pagePO.lblFlashMsg).toContainText(verifyObj.msg1);
  });
});