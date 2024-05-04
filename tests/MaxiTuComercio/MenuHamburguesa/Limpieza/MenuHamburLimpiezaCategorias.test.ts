import test from '../../../../config/testManager'

test.beforeEach(async ({cerrarModalTeDamosBienvenida, menuHamburguesa, menuHamburLimpieza}) => {
    await test.step('Click en la X del modal Te Damos la Bienvenida', async () => {
        await cerrarModalTeDamosBienvenida.navigateToMainPageAndCerrarModalTeDamosBienvenida();
    })
    await test.step('Clickear el icono Menu Hamburguesa', async () => {
        await menuHamburguesa.navigateToMenuHamburguesa()
    })
    await test.step('Click en Limpieza', async () => {
        await menuHamburLimpieza.navigateToMenuHamburLimpieza()
    })
})

test('@XYZQW @Smoke @Regression () Verificar que funciona correctamente al clickear en el Menu Limpieza: VER TODO', async ({menuHamburLimpiezaVerTodo}) => {

    await test.step('Click en Congelados VER TODO', async () => {
        await menuHamburLimpiezaVerTodo.navigateToMenuHamburLimpiezaVerTodo()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Articulos de Limpieza', async ({menuHamburLimpiezaArticulosLimpieza}) => {

    await test.step('Click en Articulos de Limpieza', async () => {
        await menuHamburLimpiezaArticulosLimpieza.navigateToMenuHamburLimpiezaArticulosLimpieza()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Desodorantes de Ambiente', async ({menuHamburLimpiezaDesodorantesAmbiente}) => {

    await test.step('Click en Desodorantes de Ambiente', async () => {
        await menuHamburLimpiezaDesodorantesAmbiente.navigateToMenuHamburLimpiezaDesodorantesAmbiente()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Insecticidas', async ({menuHamburLimpiezaInsecticidas}) => {

    await test.step('Click en Insecticidas', async () => {
        await menuHamburLimpiezaInsecticidas.navigateToMenuHamburLimpiezaInsecticidas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Lavandinas', async ({menuHamburLimpiezaLavandinas}) => {

    await test.step('Click en Lavandinas', async () => {
        await menuHamburLimpiezaLavandinas.navigateToMenuHamburLimpiezaLavandinas()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Limpieza de Banio', async ({menuHamburLimpiezaLimpiezaBanio}) => {

    await test.step('Click en Limpieza de Banio', async () => {
        await menuHamburLimpiezaLimpiezaBanio.navigateToMenuHamburLimpiezaLimpiezaBanio()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Limpieza de Cocina', async ({menuHamburLimpiezaLimpiezaCocina}) => {

    await test.step('Click en Limpieza de Cocina', async () => {
        await menuHamburLimpiezaLimpiezaCocina.navigateToMenuHamburLimpiezaLimpiezaCocina()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Limpieza de Pisos y Muebles', async ({menuHamburLimpiezaLimpiezaPisosMuebles}) => {

    await test.step('Click en Limpieza de Pisos y Muebles', async () => {
        await menuHamburLimpiezaLimpiezaPisosMuebles.navigateToMenuHamburLimpiezaLimpiezaPisosMuebles()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Limpieza de la Ropa', async ({menuHamburLimpiezaLimpiezaRopa}) => {

    await test.step('Click en Limpieza de la Ropa', async () => {
        await menuHamburLimpiezaLimpiezaRopa.navigateToMenuHamburLimpiezaLimpiezaRopa()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Papeles Higienicos', async ({menuHamburLimpiezaPapelesHigienicos}) => {

    await test.step('Click en Papeles Higienicos', async () => {
        await menuHamburLimpiezaPapelesHigienicos.navigateToMenuHamburLimpiezaPapelesHigienicos()
    })
})
test('@XYZQW @Regression @MenuHamburguesa () Verificar que funciona correctamente al clickear en el Menu Limpieza: Rollos de Cocina y Servilletas', async ({menuHamburLimpiezaRollosCocinaServilletas}) => {

    await test.step('Click en Rollos de Cocina y Servilletas', async () => {
        await menuHamburLimpiezaRollosCocinaServilletas.navigateToMenuHamburLimpiezaRollosCocinaServilletas()
    })
})
