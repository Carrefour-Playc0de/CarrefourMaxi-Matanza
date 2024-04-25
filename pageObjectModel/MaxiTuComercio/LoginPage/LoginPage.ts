import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class LoginPage extends BasePage {

    readonly CUIT_INPUT: Locator
    readonly BOTON_INGRESAR: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUIT_INPUT = this.page.locator("//input[@placeholder='Ej: 30112233440']")
        this.BOTON_INGRESAR = this.page.locator('//button [@id="btn_step2"]')
    }

    async fillCredentials(): Promise<void> {
        await this.fill(this.CUIT_INPUT, '20111111110')
    }
    async clickBotonIngresarLoginPage(): Promise<void> {
        await this.click(this.BOTON_INGRESAR)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToUrlAndLogin(): Promise<void> {
        await this.fillCredentials()
        await this.clickBotonIngresarLoginPage()
    }
}
