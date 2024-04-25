import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/MaxiTuComercio/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/MaxiTuComercio/CerrarModalTeDamosBienvenida'
import { IngresarCuenta } from '../pageObjectModel/MaxiTuComercio/IngresarCuenta'

const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    // profilePage: ProfilePage
    loginPage: LoginPage
    cerrarModalTeDamosBienvenida: CerrarModalTeDamosBienvenida
    ingresarCuenta: IngresarCuenta

}>({
    //COMUNES
    cerrarModalTeDamosBienvenida: async ({ page, context }, use) => {
        await use(new CerrarModalTeDamosBienvenida(page, context, environment))
    },
    ingresarCuenta: async ({ page, context }, use) => {
        await use(new IngresarCuenta(page, context, environment))
    },
    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context, environment))
    },



    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
