import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class HeaderIngresarAlSitio extends BasePage {

    readonly ELEGI_FORMA_ENTREGA: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ELEGI_FORMA_ENTREGA = this.page.locator("(//strong[@onclick='openDelivery()'])[1]")
    }

    async clickHeaderIngresarAlSitio(): Promise<void> {
        await this.click(this.ELEGI_FORMA_ENTREGA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToHeaderIngresarAlSitio(): Promise<void> {
        await this.clickHeaderIngresarAlSitio()
    }
}
