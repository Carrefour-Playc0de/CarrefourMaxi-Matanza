import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburMascotas}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Mascotas', async () => {
        await menuHamburMascotas.navigateToMenuHamburMascotas()
    })
})

test('@XYZQW @Smoke @Regression () Verificar que funciona correctamente al clickear en el Menu Mascotas: VER TODO', async ({menuHamburMascotasVerTodos}) => {

    await test.step('Click en Mascotas VER TODO', async () => {
        await menuHamburMascotasVerTodos.navigateToMenuHamburMascotasVerTodos()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mascotas: Alimentos para Gatos', async ({menuHamburMascotasAlimentosGatos}) => {

    await test.step('Click en Alimentos para Gatos', async () => {
        await menuHamburMascotasAlimentosGatos.navigateToMenuHamburMascotasAlimentosGatos()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Mascotas: Alimentos y Snacks para Perros', async ({menuHamburMascotasAlimentosSnacksPerros}) => {

    await test.step('Click en Alimentos y Snacks para Perros', async () => {
        await menuHamburMascotasAlimentosSnacksPerros.navigateToMenuHamburMascotasAlimentosSnacksPerros()
    })
})
