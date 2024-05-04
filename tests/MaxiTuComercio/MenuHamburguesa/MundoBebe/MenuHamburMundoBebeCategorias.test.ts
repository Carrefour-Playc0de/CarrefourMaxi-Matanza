import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburMundoBebe}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Mundo Bebe', async () => {
        await menuHamburMundoBebe.navigateToMenuHamburMundoBebe()
    })
})

test('@XYZQW @Smoke @Regression () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: VER TODO', async ({menuHamburMundoBebeVerTodos}) => {

    await test.step('Click en Mundo Bebe VER TODO', async () => {
        await menuHamburMundoBebeVerTodos.navigateToMenuHamburMundoBebeVerTodos()
    })
})
test('XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: Alimento para Bebe', async ({menuHamburMundoBebeAlimentoBebe}) => {

    await test.step('Click en Alimento para Bebe', async () => {
        await menuHamburMundoBebeAlimentoBebe.navigateToMenuHamburMundoBebeAlimentoBebe()
    })
})
test('XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: Despues del Banio', async ({menuHamburMundoBebeDespuesBanio}) => {

    await test.step('Click en Despues del Banio', async () => {
        await menuHamburMundoBebeDespuesBanio.navigateToMenuHamburMundoBebeDespuesBanio()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: Paniales', async ({menuHamburMundoBebePaniales}) => {

    await test.step('Click en Paniales', async () => {
        await menuHamburMundoBebePaniales.navigateToMenuHamburMundoBebePaniales()
    })
})
test('XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: Para el Banio', async ({menuHamburMundoBebeParaElBanio}) => {

    await test.step('Click en Para el Banio', async () => {
        await menuHamburMundoBebeParaElBanio.navigateToMenuHamburMundoBebeParaElBanio()
    })
})
test('XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mundo Bebe: Toallitas Humedas', async ({menuHamburMundoBebeToallitasHumedas}) => {

    await test.step('Click en Toallitas Humedas', async () => {
        await menuHamburMundoBebeToallitasHumedas.navigateToMenuHamburMundoBebeToallitasHumedas()
    })
})
