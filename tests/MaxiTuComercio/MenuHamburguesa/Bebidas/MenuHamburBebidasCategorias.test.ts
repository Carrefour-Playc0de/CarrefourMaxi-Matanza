import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburBebidas}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Bebidas', async () => {
        await menuHamburBebidas.navigateToMenuHamburBebidas()
    })
})

test('@XYZQW @Smoke @Regression () Verificar que funciona correctamente al clickear en el Menu Bebidas: VER TODO', async ({menuHamburBebidasVerTodo}) => {

    await test.step('Click en Bebidas VER TODO', async () => {
        await menuHamburBebidasVerTodo.navigateToMenuHamburBebidasVerTodo()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Aguas', async ({menuHamburBebidasAguas}) => {

    await test.step('Click en Aguas', async () => {
        await menuHamburBebidasAguas.navigateToMenuHamburBebidasAguas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Bebidas Blancas', async ({menuHamburBebidasBebidasBlancas}) => {

    await test.step('Click en Bebidas Blancas', async () => {
        await menuHamburBebidasBebidasBlancas.navigateToMenuHamburBebidasBebidasBlancas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Bebidas Energizantes', async ({menuHamburBebidasBebidasEnergizantes}) => {

    await test.step('Click en Bebidas Energizantes', async () => {
        await menuHamburBebidasBebidasEnergizantes.navigateToMenuHamburBebidasBebidasEnergizantes()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Bebidas Isotonicas', async ({menuHamburBebidasBebidasIsotonicas}) => {

    await test.step('Click en Bebidas Isotonicas', async () => {
        await menuHamburBebidasBebidasIsotonicas.navigateToMenuHamburBebidasBebidasIsotonicas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Cervezas', async ({menuHamburguesaBebidasCervezas}) => {

    await test.step('Click en Cervezas', async () => {
        await menuHamburguesaBebidasCervezas.navigateToMenuHamburBebidasCervezas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Espumantes y Sidras', async ({menuHamburBebidasEspumantesSidras}) => {

    await test.step('Click en Espumantes y Sidras', async () => {
        await menuHamburBebidasEspumantesSidras.navigateToMenuHamburBebidasEspumantesSidras()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Fernet y Aperitivos', async ({menuHamburBebidasFernetAperitivos}) => {

    await test.step('Click en Fernet y Aperitivos', async () => {
        await menuHamburBebidasFernetAperitivos.navigateToMenuHamburBebidasFernetAperitivos()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Gaseosas', async ({menuHamburBebidasGaseosas}) => {

    await test.step('Click en Gaseosas', async () => {
        await menuHamburBebidasGaseosas.navigateToMenuHamburBebidasGaseosas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Jugos', async ({menuHamburBebidasJugos}) => {

    await test.step('Click en Jugos', async () => {
        await menuHamburBebidasJugos.navigateToMenuHamburBebidasJugos()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Bebidas: Vinos', async ({menuHamburBebidasVinos}) => {

    await test.step('Click en Vinos', async () => {
        await menuHamburBebidasVinos.navigateToMenuHamburBebidasVinos()
    })
})
