import test from '../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, ingresarCuenta}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Click en el icono Ingresar', async () => {
        await ingresarCuenta.navigateToIngresarCuenta()
    })
})

test('@Smoke @Regression @Login (B2B-TC-303) Verificar que se puede loguear con el CUIT correctamente', async ({loginPage}) => {
    await test.step('Ingresar CUIT', async () => {
        await loginPage.fillCredentials()
    })
    await test.step('Click en el boton INGRESAR', async () => {
        await loginPage.clickBotonIngresarLoginPage()
    })
})
