import { expect } from '@playwright/test';
import webConfig from '../../resources/settings/web.json' with { type: 'json' };
import pageLocator from '../../resources/locators/loginPage.locator.json' with { type: 'json' };

export class LoginPageObject {
  constructor(page) {
    this.page = page;
    this.url = webConfig.url.base_url;
    this.h2Title = page.locator(pageLocator.h2Title);
    this.lblFlashMsg = page.locator(pageLocator.lblFlashMsg);
    this.inputUsername = page.locator(pageLocator.txtUsername);
    this.inputPassword = page.locator(pageLocator.txtPassword);
    this.btnLogin = page.locator(pageLocator.btnLogin);
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(user) {
    await this.inputUsername.fill(user.username);
    await this.inputPassword.fill(user.password);
    await this.btnLogin.click();
  }

  async expectOnLoginPage() {
    await expect(this.h2Title).toBeVisible()
  }
}