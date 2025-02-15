import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburOfertas extends BasePage {

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)
    }

    async mouseOverOfertas(): Promise<void> {
        // let selector = "(//div[@onclick=\"gotoPage('sale', '')\"][normalize-space()='Ofertas'])[1]"
        let selector = "(//img[@class='btn_access__img2 icon_red hide_mobile'])[1]"
        await this.page.waitForSelector(selector)
        let element = await this.page.$(selector)
        await element?.hover()
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburOfertas(): Promise<void> {
        await this.mouseOverOfertas()
    }
}
