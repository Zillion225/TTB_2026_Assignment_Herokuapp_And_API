import { expect } from '@playwright/test';
import webConfig from '../../resources/settings/web.json' with { type: 'json' };
import pageLocator from '../../resources/locators/securePage.locator.json' with { type: 'json' };

export class SecurePageObject {
    constructor(page) {
        this.page = page;
        this.url = webConfig.url.secure_url;
        this.h2Title = page.locator(pageLocator.h2Title);
        this.lblFlashMsg = page.locator(pageLocator.lblFlashMsg);
        this.btnLogout = page.locator(pageLocator.btnLogout);
    }

    async expectOnSecurePage() {
        await expect(this.h2Title).toBeVisible()
    }

    async logout(username, password) {
        await this.btnLogout.click();
    }
}