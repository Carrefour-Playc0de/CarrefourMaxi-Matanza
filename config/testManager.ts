import { test as baseTest } from '@playwright/test'
import { LoginPage } from '../pageObjectModel/MaxiTuComercio/LoginPage/LoginPage'
import { CerrarModalTeDamosBienvenida } from '../pageObjectModel/MaxiTuComercio/CerrarModalTeDamosBienvenida'
import { IngresarCuenta } from '../pageObjectModel/MaxiTuComercio/IngresarCuenta'
import { HeaderFolletos } from '../pageObjectModel/MaxiTuComercio/Header/HeaderFolletos'
import { HeaderIngresarAlSitio } from '../pageObjectModel/MaxiTuComercio/Header/HeaderIngresarAlSitio'
import { HeaderSucursales } from '../pageObjectModel/MaxiTuComercio/Header/HeaderSucursales'
import {
    HeaderHBFSFolletosButton
} from '../pageObjectModel/MaxiTuComercio/Header/HeaderButtonsFolletosSucursales/HeaderHBFSFolletosButton'
import {
    HeaderHBFSSucursalesButton
} from '../pageObjectModel/MaxiTuComercio/Header/HeaderButtonsFolletosSucursales/HeaderHBFSSucursalesButton'
import {
    HeaderHBFSQuieroFolletoButton
} from '../pageObjectModel/MaxiTuComercio/Header/HeaderButtonsFolletosSucursales/HeaderHBFSQuieroFolletoButton'
import {
    HeaderHBFSQuieroTerminalCobroButton
} from '../pageObjectModel/MaxiTuComercio/Header/HeaderButtonsFolletosSucursales/HeaderHBFSQuieroTerminalCobroButton'
import {
    HeaderHBFSCompraOnlineButton
} from '../pageObjectModel/MaxiTuComercio/Header/HeaderButtonsFolletosSucursales/HeaderHBFSCompraOnlineButton'
import {
    FolletosSelectProvinciaLocalidadAvellaneda
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadAvellaneda'
import {
    FolletosSelectProvinciaLocalidadBurzaco
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadBurzaco'
import {
    FolletosSelectProvinciaLocalidadEscobar
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadEscobar'
import {
    FolletosSelectProvinciaLocalidadEzpeleta
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadEzpeleta'
import {
    FolletosSelectProvinciaLocalidadItuzaingo
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadItuzaingo'
import {
    FolletosSelectProvinciaLocalidadJoseCPaz
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadJoseCPaz'
import {
    FolletosSelectProvinciaLocalidadJoseLeonSuarez
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadJoseLeonSuarez'
import {
    FolletosSelectProvinciaLocalidadLaferrere
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadLaferrere'
import {
    FolletosSelectProvinciaLocalidadLomaHermosa
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadLomaHermosa'
import {
    FolletosSelectProvinciaLocalidadLomasDeZamora
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadLomasDeZamora'
import {
    FolletosSelectProvinciaLocalidadMoreno
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadMoreno'
import {
    FolletosSelectProvinciaLocalidadPilar
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadPilar'
import {
    FolletosSelectProvinciaLocalidadSanVicente
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadSanVicente'
import {
    FolletosSelectProvinciaLocalidadTandil
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadTandil'
import {
    FolletosSelectProvinciaLocalidadTemperley
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadTemperley'
import {
    FolletosSelectProvinciaLocalidadTigre
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadTigre'
import {
    FolletosSelectProvinciaLocalidadTortuguitas
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadTortuguitas'
import {
    FolletosSelectProvinciaLocalidadCatamarca
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadCatamarca'
import {
    FolletosSelectProvinciaLocalidadChaco
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadChaco'
import {
    FolletosSelectProvinciaLocalidadCordoba
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadCordoba'
import {
    FolletosSelectProvinciaLocalidadMendoza
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadMendoza'
import {
    FolletosSelectProvinciaLocalidadEntreRios
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadEntreRios'
import {
    FolletosSelectProvinciaLocalidadJujuy
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidadJujuy'
import {
    FolletosSelectProvinciaLocalidad
} from '../pageObjectModel/MaxiTuComercio/Header/Folletos/FolletosSelectProvinciaLocalidad'
import { MenuHamburguesa } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHambur'
import { MenuHamburAlmacen } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburAlmacen'
import { MenuHamburBazarTextil } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburBazarTextil'
import { MenuHamburBebidas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburBebidas'
import { MenuHamburDesayunoMerienda } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburDesayunoMerienda'
import { MenuHamburLacteosProdsFrescos } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburLacteosProdsFrescos'
import { MenuHamburLimpieza } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburLimpieza'
import { MenuHamburMascotas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburMascotas'
import { MenuHamburMundoBebe } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburMundoBebe'
import { MenuHamburPanaderia } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburPanaderia'
import { MenuHamburPerfumeria } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburPerfumeria'
import { MenuHamburOfertas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MenuHamburOfertas'
import { MenuHamburAlmacenVerTodo } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenVerTodo'
import {
    MenuHamburAlmacenArrozLegumbres
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenArrozLegumbres'
import {
    MenuHamburAlmacenCaldosSopasPure
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenCaldosSopasPure'
import {
    MenuHamburAlmacenEnlatadosConservas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenEnlatadosConservas'
import {
    MenuHamburAlmacenGolosinasChocolates
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenGolosinasChocolates'
import { MenuHamburAlmacenHarinas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenHarinas'
import { MenuHamburAlmacenPastasSecas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenPastasSecas'
import {
    MenuHamburAlmacenReposteriaPostres
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenReposteriaPostres'
import {
    MenuHamburAlmacenSalAderezosSaborizadores
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenSalAderezosSaborizadores'
import { MenuHamburAlmacenSnacks } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenSnacks'
import {
    MenuHamburguesaAlmacenAceitesVinagres
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Almacen/MenuHamburAlmacenAceitesVinagres'
import {
    MenuHamburBazarTextilVerTodo
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilVerTodo'
import {
    MenuHamburBazarTextilAutomotor
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilAutomotor'
import {
    MenuHamburBazarTextilCocinaComedor
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilCocinaComedor'
import {
    MenuHamburBazarTextilDecoOrganizacion
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilDecoOrganizacion'
import {
    MenuHamburBazarTextilFerreteriaPintura
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilFerreteriaPintura'
import {
    MenuHamburBazarTextilLibreria
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/BazarTextil/MenuHamburBazarTextilLibreria'
import {
    MenuHamburBebidasVerTodo
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasVerTodo'
import { MenuHamburBebidasAguas } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasAguas'
import {
    MenuHamburBebidasBebidasBlancas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasBlancas'
import {
    MenuHamburBebidasBebidasEnergizantes
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasEnergizantes'
import {
    MenuHamburBebidasBebidasIsotonicas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasBebidasIsotonicas'
import {
    MenuHamburguesaBebidasCervezas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasCervezas'
import {
    MenuHamburBebidasEspumantesSidras
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasEspumantesSidras'
import {
    MenuHamburBebidasFernetAperitivos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasFernetAperitivos'
import {
    MenuHamburBebidasGaseosas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasGaseosas'
import { MenuHamburBebidasJugos } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasJugos'
import { MenuHamburBebidasVinos } from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Bebidas/MenuHamburBebidasVinos'
import {
    MenuHamburDesayunoMeriendaVerTodo
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaVerTodo'
import {
    MenuHamburDesayunoMeriendaAzucarEndulzantes
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaAzucarEndulzantes'
import {
    MenuHamburDesayunoMeriendaBudinesMagdalenas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaBudinesMagdalenas'
import {
    MenuHamburDesayunoMeriendaCafe
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCafe'
import {
    MenuHamburDesayunoMeriendaCerealesBarritas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaCerealesBarritas'
import {
    MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas'
import {
    MenuHamburDesayunoMeriendaInfusiones
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaInfusiones'
import {
    MenuHamburDesayunoMeriendaMermeladasOtrosDulces
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaMermeladasOtrosDulces'
import {
    MenuHamburDesayunoMeriendaYerba
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/DesayunoMerienda/MenuHamburDesayunoMeriendaYerba'
import {
    MenuHamburLacteosProdsFrescosVerTodo
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosVerTodo'
import {
    MenuHamburLacteosProdsFrescosDulceDeLeche
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosDulceDeLeche'
import {
    MenuHamburLacteosProdsFrescosLeches
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLeches'
import {
    MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida'
import {
    MenuHamburLacteosProdsFrescosPAS
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosPAS'
import {
    MenuHamburLacteosProdsFrescosQuesos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/LacteosProdsFrescos/MenuHamburLacteosProdsFrescosQuesos'
import {
    MenuHamburLimpiezaVerTodo
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaVerTodo'
import {
    MenuHamburLimpiezaArticulosLimpieza
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaArticulosLimpieza'
import {
    MenuHamburLimpiezaDesodorantesAmbiente
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaDesodorantesAmbiente'
import {
    MenuHamburLimpiezaInsecticidas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaInsecticidas'
import {
    MenuHamburLimpiezaLavandinas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLavandinas'
import {
    MenuHamburLimpiezaLimpiezaBanio
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaBanio'
import {
    MenuHamburLimpiezaLimpiezaCocina
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaCocina'
import {
    MenuHamburLimpiezaLimpiezaPisosMuebles
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaPisosMuebles'
import {
    MenuHamburLimpiezaLimpiezaRopa
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaLimpiezaRopa'
import {
    MenuHamburLimpiezaPapelesHigienicos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaPapelesHigienicos'
import {
    MenuHamburLimpiezaRollosCocinaServilletas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Limpieza/MenuHamburLimpiezaRollosCocinaServilletas'
import {
    MenuHamburMascotasVerTodos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Mascotas/MenuHamburMascotasVerTodos'
import {
    MenuHamburMascotasAlimentosGatos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Mascotas/MenuHamburMascotasAlimentosGatos'
import {
    MenuHamburMascotasAlimentosSnacksPerros
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Mascotas/MenuHamburMascotasAlimentosSnacksPerros'
import {
    MenuHamburMundoBebeVerTodos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeVerTodos'
import {
    MenuHamburMundoBebeAlimentoBebe
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeAlimentoBebe'
import {
    MenuHamburMundoBebeDespuesBanio
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeDespuesBanio'
import {
    MenuHamburMundoBebePaniales
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebePaniales'
import {
    MenuHamburMundoBebeParaElBanio
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeParaElBanio'
import {
    MenuHamburMundoBebeToallitasHumedas
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/MundoBebe/MenuHamburMundoBebeToallitasHumedas'
import {
    MenuHamburPanaderiaVerTodos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Panaderia/MenuHamburPanaderiaVerTodos'
import {
    MenuHamburPanaderiaPanRalladoRebozadores
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanRalladoRebozadores'
import {
    MenuHamburPanaderiaPanificados
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Panaderia/MenuHamburPanaderiaPanificados'
import {
    MenuHamburPerfumeriaVerTodos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaVerTodos'
import {
    MenuHamburPerfumeriaAlgodonesHisopos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaAlgodonesHisopos'
import {
    MenuHamburPerfumeriaAntitranspirantesDesodorantes
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaAntitranspirantesDesodorantes'
import {
    MenuHamburPerfumeriaCuidadoCorporal
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoCorporal'
import {
    MenuHamburPerfumeriaCuidadoPiel
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoPiel'
import {
    MenuHamburPerfumeriaCuidadoDelCabello
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoDelCabello'
import {
    MenuHamburPerfumeriaCuidadoDental
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaCuidadoDental'
import {
    MenuHamburPerfumeriaFarmacia
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaFarmacia'
import {
    MenuHamburPerfumeriaJabones
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaJabones'
import {
    MenuHamburPerfumeriaProteccionFemenina
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaProteccionFemenina'
import {
    MenuHamburPerfumeriaProteccionAdultos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Perfumeria/MenuHamburPerfumeriaProteccionAdultos'
import {
    MenuHamburOfertasVerTodos
} from '../pageObjectModel/MaxiTuComercio/MenuHamburguesa/Ofertas/MenuHamburOfertasVerTodos'


const environment = process.env.TEST || 'qa'

const test = baseTest.extend<{
    // profilePage: ProfilePage
    loginPage: LoginPage
    cerrarModalTeDamosBienvenida: CerrarModalTeDamosBienvenida
    ingresarCuenta: IngresarCuenta
    headerFolletos: HeaderFolletos
    headerIngresarAlSitio: HeaderIngresarAlSitio
    headerSucursales: HeaderSucursales
    headerHBFSFolletosButton: HeaderHBFSFolletosButton
    headerHBFSSucursalesButton: HeaderHBFSSucursalesButton
    headerHBFSQuieroFolletoButton: HeaderHBFSQuieroFolletoButton
    headerHBFSQuieroTerminalCobroButton: HeaderHBFSQuieroTerminalCobroButton
    headerHBFSCompraOnlineButton: HeaderHBFSCompraOnlineButton
    folletosSelectProvinciaLocalidad: FolletosSelectProvinciaLocalidad
    folletosSelectProvinciaLocalidadAvellaneda: FolletosSelectProvinciaLocalidadAvellaneda
    folletosSelectProvinciaLocalidadBurzaco: FolletosSelectProvinciaLocalidadBurzaco
    folletosSelectProvinciaLocalidadEscobar: FolletosSelectProvinciaLocalidadEscobar
    folletosSelectProvinciaLocalidadEzpeleta: FolletosSelectProvinciaLocalidadEzpeleta
    folletosSelectProvinciaLocalidadItuzaingo: FolletosSelectProvinciaLocalidadItuzaingo
    folletosSelectProvinciaLocalidadJoseCPaz: FolletosSelectProvinciaLocalidadJoseCPaz
    folletosSelectProvinciaLocalidadJoseLeonSuarez: FolletosSelectProvinciaLocalidadJoseLeonSuarez
    folletosSelectProvinciaLocalidadLaferrere: FolletosSelectProvinciaLocalidadLaferrere
    folletosSelectProvinciaLocalidadLomaHermosa: FolletosSelectProvinciaLocalidadLomaHermosa
    folletosSelectProvinciaLocalidadLomasDeZamora: FolletosSelectProvinciaLocalidadLomasDeZamora
    folletosSelectProvinciaLocalidadMoreno: FolletosSelectProvinciaLocalidadMoreno
    folletosSelectProvinciaLocalidadPilar: FolletosSelectProvinciaLocalidadPilar
    folletosSelectProvinciaLocalidadSanVicente: FolletosSelectProvinciaLocalidadSanVicente
    folletosSelectProvinciaLocalidadTandil: FolletosSelectProvinciaLocalidadTandil
    folletosSelectProvinciaLocalidadTemperley: FolletosSelectProvinciaLocalidadTemperley
    folletosSelectProvinciaLocalidadTigre: FolletosSelectProvinciaLocalidadTigre
    folletosSelectProvinciaLocalidadTortuguitas: FolletosSelectProvinciaLocalidadTortuguitas
    folletosSelectProvinciaLocalidadCatamarca: FolletosSelectProvinciaLocalidadCatamarca
    folletosSelectProvinciaLocalidadChaco: FolletosSelectProvinciaLocalidadChaco
    folletosSelectProvinciaLocalidadCordoba: FolletosSelectProvinciaLocalidadCordoba
    folletosSelectProvinciaLocalidadMendoza: FolletosSelectProvinciaLocalidadMendoza
    folletosSelectProvinciaLocalidadEntreRios: FolletosSelectProvinciaLocalidadEntreRios
    folletosSelectProvinciaLocalidadJujuy: FolletosSelectProvinciaLocalidadJujuy
    menuHamburguesa: MenuHamburguesa
    menuHamburAlmacen: MenuHamburAlmacen
    menuHamburBazarTextil: MenuHamburBazarTextil
    menuHamburBebidas: MenuHamburBebidas
    menuHamburDesayunoMerienda: MenuHamburDesayunoMerienda
    menuHamburLacteosProdsFrescos: MenuHamburLacteosProdsFrescos
    menuHamburLimpieza: MenuHamburLimpieza
    menuHamburMascotas: MenuHamburMascotas
    menuHamburMundoBebe: MenuHamburMundoBebe
    menuHamburOfertas: MenuHamburOfertas
    menuHamburPanaderia: MenuHamburPanaderia
    menuHamburPerfumeria: MenuHamburPerfumeria
    menuHamburAlmacenVerTodo: MenuHamburAlmacenVerTodo
    menuHamburAlmacenArrozLegumbres: MenuHamburAlmacenArrozLegumbres
    menuHamburAlmacenCaldosSopasPure: MenuHamburAlmacenCaldosSopasPure
    menuHamburAlmacenEnlatadosConservas: MenuHamburAlmacenEnlatadosConservas
    menuHamburAlmacenGolosinasChocolates: MenuHamburAlmacenGolosinasChocolates
    menuHamburAlmacenHarinas: MenuHamburAlmacenHarinas
    menuHamburAlmacenPastasSecas: MenuHamburAlmacenPastasSecas
    menuHamburAlmacenReposteriaPostres: MenuHamburAlmacenReposteriaPostres
    menuHamburAlmacenSalAderezosSaborizadores: MenuHamburAlmacenSalAderezosSaborizadores
    menuHamburAlmacenSnacks: MenuHamburAlmacenSnacks
    menuHamburguesaAlmacenAceitesVinagres: MenuHamburguesaAlmacenAceitesVinagres
    menuHamburBazarTextilVerTodo: MenuHamburBazarTextilVerTodo
    menuHamburBazarTextilAutomotor: MenuHamburBazarTextilAutomotor
    menuHamburBazarTextilCocinaComedor: MenuHamburBazarTextilCocinaComedor
    menuHamburBazarTextilDecoOrganizacion: MenuHamburBazarTextilDecoOrganizacion
    menuHamburBazarTextilFerreteriaPintura: MenuHamburBazarTextilFerreteriaPintura
    menuHamburBazarTextilLibreria: MenuHamburBazarTextilLibreria
    menuHamburBebidasVerTodo: MenuHamburBebidasVerTodo
    menuHamburBebidasAguas: MenuHamburBebidasAguas
    menuHamburBebidasBebidasBlancas: MenuHamburBebidasBebidasBlancas
    menuHamburBebidasBebidasEnergizantes: MenuHamburBebidasBebidasEnergizantes
    menuHamburBebidasBebidasIsotonicas: MenuHamburBebidasBebidasIsotonicas
    menuHamburguesaBebidasCervezas: MenuHamburguesaBebidasCervezas
    menuHamburBebidasEspumantesSidras: MenuHamburBebidasEspumantesSidras
    menuHamburBebidasFernetAperitivos: MenuHamburBebidasFernetAperitivos
    menuHamburBebidasGaseosas: MenuHamburBebidasGaseosas
    menuHamburBebidasJugos: MenuHamburBebidasJugos
    menuHamburBebidasVinos: MenuHamburBebidasVinos
    menuHamburDesayunoMeriendaVerTodo: MenuHamburDesayunoMeriendaVerTodo
    menuHamburDesayunoMeriendaAzucarEndulzantes: MenuHamburDesayunoMeriendaAzucarEndulzantes
    menuHamburDesayunoMeriendaBudinesMagdalenas: MenuHamburDesayunoMeriendaBudinesMagdalenas
    menuHamburDesayunoMeriendaCafe: MenuHamburDesayunoMeriendaCafe
    menuHamburDesayunoMeriendaCerealesBarritas: MenuHamburDesayunoMeriendaCerealesBarritas
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas
    menuHamburDesayunoMeriendaInfusiones: MenuHamburDesayunoMeriendaInfusiones
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: MenuHamburDesayunoMeriendaMermeladasOtrosDulces
    menuHamburDesayunoMeriendaYerba: MenuHamburDesayunoMeriendaYerba
    menuHamburLacteosProdsFrescosVerTodo: MenuHamburLacteosProdsFrescosVerTodo
    menuHamburLacteosProdsFrescosDulceDeLeche: MenuHamburLacteosProdsFrescosDulceDeLeche
    menuHamburLacteosProdsFrescosLeches: MenuHamburLacteosProdsFrescosLeches
    menuHamburLacteosProdsFrescosLechesPolvoYLargaVida: MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida
    menuHamburLacteosProdsFrescosPAS: MenuHamburLacteosProdsFrescosPAS
    menuHamburLacteosProdsFrescosQuesos: MenuHamburLacteosProdsFrescosQuesos
    menuHamburLimpiezaVerTodo: MenuHamburLimpiezaVerTodo
    menuHamburLimpiezaArticulosLimpieza: MenuHamburLimpiezaArticulosLimpieza
    menuHamburLimpiezaDesodorantesAmbiente: MenuHamburLimpiezaDesodorantesAmbiente
    menuHamburLimpiezaInsecticidas: MenuHamburLimpiezaInsecticidas
    menuHamburLimpiezaLavandinas: MenuHamburLimpiezaLavandinas
    menuHamburLimpiezaLimpiezaBanio: MenuHamburLimpiezaLimpiezaBanio
    menuHamburLimpiezaLimpiezaCocina: MenuHamburLimpiezaLimpiezaCocina
    menuHamburLimpiezaLimpiezaPisosMuebles: MenuHamburLimpiezaLimpiezaPisosMuebles
    menuHamburLimpiezaLimpiezaRopa: MenuHamburLimpiezaLimpiezaRopa
    menuHamburLimpiezaPapelesHigienicos: MenuHamburLimpiezaPapelesHigienicos
    menuHamburLimpiezaRollosCocinaServilletas: MenuHamburLimpiezaRollosCocinaServilletas
    menuHamburMascotasVerTodos: MenuHamburMascotasVerTodos
    menuHamburMascotasAlimentosGatos: MenuHamburMascotasAlimentosGatos
    menuHamburMascotasAlimentosSnacksPerros: MenuHamburMascotasAlimentosSnacksPerros
    menuHamburMundoBebeVerTodos: MenuHamburMundoBebeVerTodos
    menuHamburMundoBebeAlimentoBebe: MenuHamburMundoBebeAlimentoBebe
    menuHamburMundoBebeDespuesBanio: MenuHamburMundoBebeDespuesBanio
    menuHamburMundoBebePaniales: MenuHamburMundoBebePaniales
    menuHamburMundoBebeParaElBanio: MenuHamburMundoBebeParaElBanio
    menuHamburMundoBebeToallitasHumedas: MenuHamburMundoBebeToallitasHumedas
    menuHamburPanaderiaVerTodos: MenuHamburPanaderiaVerTodos
    menuHamburPanaderiaPanRalladoRebozadores: MenuHamburPanaderiaPanRalladoRebozadores
    menuHamburPanaderiaPanificados: MenuHamburPanaderiaPanificados
    menuHamburPerfumeriaVerTodos: MenuHamburPerfumeriaVerTodos
    menuHamburPerfumeriaAlgodonesHisopos: MenuHamburPerfumeriaAlgodonesHisopos
    menuHamburPerfumeriaAntitranspirantesDesodorantes: MenuHamburPerfumeriaAntitranspirantesDesodorantes
    menuHamburPerfumeriaCuidadoCorporal: MenuHamburPerfumeriaCuidadoCorporal
    menuHamburPerfumeriaCuidadoPiel: MenuHamburPerfumeriaCuidadoPiel
    menuHamburPerfumeriaCuidadoDelCabello: MenuHamburPerfumeriaCuidadoDelCabello
    menuHamburPerfumeriaCuidadoDental: MenuHamburPerfumeriaCuidadoDental
    menuHamburPerfumeriaFarmacia: MenuHamburPerfumeriaFarmacia
    menuHamburPerfumeriaJabones: MenuHamburPerfumeriaJabones
    menuHamburPerfumeriaProteccionFemenina: MenuHamburPerfumeriaProteccionFemenina
    menuHamburPerfumeriaProteccionAdultos: MenuHamburPerfumeriaProteccionAdultos
    menuHamburOfertasVerTodos: MenuHamburOfertasVerTodos

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

    // MAXI - HEADER
    headerIngresarAlSitio: async ({ page, context }, use) => {
        await use(new HeaderIngresarAlSitio(page, context, environment))
    },
    headerFolletos: async ({ page, context }, use) => {
        await use(new HeaderFolletos(page, context, environment))
    },
    headerSucursales: async ({ page, context }, use) => {
        await use(new HeaderSucursales(page, context, environment))
    },

    // navigateMaxiCarrefour: async ({ page, context }, use) => {
    //     await use(new NavigateMaxiCarrefour(page, context, environment))
    // },
    // maxiHeaderFolletosButton: async ({ page, context }, use) => {
    //     await use(new MaxiHeaderFolletosButton(page, context, environment))
    // },
    // maxiHeaderSucursalesButton: async ({ page, context }, use) => {
    //     await use(new MaxiHeaderSucursalesButton(page, context, environment))
    // },
    // maxiHeaderQuieroFolletoButton: async ({ page, context }, use) => {
    //     await use(new MaxiHeaderQuieroFolletoButton(page, context, environment))
    // },
    // maxiHeaderQuieroTerminalCobroButton: async ({ page, context }, use) => {
    //     await use(new MaxiHeaderQuieroTerminalCobroButton(page, context, environment))
    // },
    // maxiHeaderCompraOnlineButton: async ({ page, context }, use) => {
    //     await use(new MaxiHeaderCompraOnlineButton(page, context, environment))
    // },

    // HEADER - HEADER BUTTONS FOLLETOS & SUCURSALES
    headerHBFSFolletosButton: async ({ page, context }, use) => {
        await use(new HeaderHBFSFolletosButton(page, context, environment))
    },
    headerHBFSSucursalesButton: async ({ page, context }, use) => {
        await use(new HeaderHBFSSucursalesButton(page, context, environment))
    },
    headerHBFSQuieroFolletoButton: async ({ page, context }, use) => {
        await use(new HeaderHBFSQuieroFolletoButton(page, context, environment))
    },
    headerHBFSQuieroTerminalCobroButton: async ({ page, context }, use) => {
        await use(new HeaderHBFSQuieroTerminalCobroButton(page, context, environment))
    },
    headerHBFSCompraOnlineButton: async ({ page, context }, use) => {
        await use(new HeaderHBFSCompraOnlineButton(page, context, environment))
    },

    // FOLLETOS
    folletosSelectProvinciaLocalidad: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidad(page, context, environment))
    },
    folletosSelectProvinciaLocalidadAvellaneda: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadAvellaneda(page, context, environment))
    },
    folletosSelectProvinciaLocalidadBurzaco: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadBurzaco(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEscobar: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEscobar(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEzpeleta: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEzpeleta(page, context, environment))
    },
    folletosSelectProvinciaLocalidadItuzaingo: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadItuzaingo(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJoseCPaz: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJoseCPaz(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJoseLeonSuarez: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJoseLeonSuarez(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLaferrere: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLaferrere(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLomaHermosa: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLomaHermosa(page, context, environment))
    },
    folletosSelectProvinciaLocalidadLomasDeZamora: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadLomasDeZamora(page, context, environment))
    },
    folletosSelectProvinciaLocalidadMoreno: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadMoreno(page, context, environment))
    },
    folletosSelectProvinciaLocalidadPilar: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadPilar(page, context, environment))
    },
    folletosSelectProvinciaLocalidadSanVicente: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadSanVicente(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTandil: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTandil(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTemperley: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTemperley(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTigre: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTigre(page, context, environment))
    },
    folletosSelectProvinciaLocalidadTortuguitas: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadTortuguitas(page, context, environment))
    },
    folletosSelectProvinciaLocalidadCatamarca: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadCatamarca(page, context, environment))
    },
    folletosSelectProvinciaLocalidadChaco: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadChaco(page, context, environment))
    },
    folletosSelectProvinciaLocalidadCordoba: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadCordoba(page, context, environment))
    },
    folletosSelectProvinciaLocalidadMendoza: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadMendoza(page, context, environment))
    },
    folletosSelectProvinciaLocalidadEntreRios: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadEntreRios(page, context, environment))
    },
    folletosSelectProvinciaLocalidadJujuy: async ({ page, context }, use) => {
        await use(new FolletosSelectProvinciaLocalidadJujuy(page, context, environment))
    },


    // MENU HAMBURGUESA
    menuHamburguesa: async ({ page, context }, use) => {
        await use(new MenuHamburguesa(page, context, environment))
    },
    menuHamburOfertas: async ({ page, context }, use) => {
        await use(new MenuHamburOfertas(page, context, environment))
    },
    menuHamburAlmacen: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacen(page, context, environment))
    },
    menuHamburBazarTextil: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextil(page, context, environment))
    },
    menuHamburBebidas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidas(page, context, environment))
    },
    menuHamburDesayunoMerienda: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMerienda(page, context, environment))
    },
    menuHamburLacteosProdsFrescos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescos(page, context, environment))
    },
    menuHamburLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpieza(page, context, environment))
    },
    menuHamburMascotas: async ({ page, context }, use) => {
        await use(new MenuHamburMascotas(page, context, environment))
    },
    menuHamburMundoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebe(page, context, environment))
    },
    menuHamburPanaderia: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderia(page, context, environment))
    },
    menuHamburPerfumeria: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeria(page, context, environment))
    },


    // MENU HAMBURGUESA - OFERTAS
    menuHamburOfertasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburOfertasVerTodos(page, context, environment))
    },

    // MENU HAMBURGUESA - ALMACEN
    menuHamburAlmacenVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenVerTodo(page, context, environment))
    },
    menuHamburAlmacenArrozLegumbres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenArrozLegumbres(page, context, environment))
    },
    menuHamburAlmacenCaldosSopasPure: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenCaldosSopasPure(page, context, environment))
    },
    menuHamburAlmacenEnlatadosConservas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenEnlatadosConservas(page, context, environment))
    },
    menuHamburAlmacenGolosinasChocolates: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenGolosinasChocolates(page, context, environment))
    },
    menuHamburAlmacenHarinas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenHarinas(page, context, environment))
    },
    menuHamburAlmacenPastasSecas: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenPastasSecas(page, context, environment))
    },
    menuHamburAlmacenReposteriaPostres: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenReposteriaPostres(page, context, environment))
    },
    menuHamburAlmacenSalAderezosSaborizadores: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSalAderezosSaborizadores(page, context, environment))
    },
    menuHamburAlmacenSnacks: async ({ page, context }, use) => {
        await use(new MenuHamburAlmacenSnacks(page, context, environment))
    },
    menuHamburguesaAlmacenAceitesVinagres: async ({ page, context }, use) => {
        await use(new MenuHamburguesaAlmacenAceitesVinagres(page, context, environment))
    },

    // MENU HAMBURGUESA - BAZAR Y TEXTIL
    menuHamburBazarTextilVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilVerTodo(page, context, environment))
    },
    menuHamburBazarTextilAutomotor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilAutomotor(page, context, environment))
    },
    menuHamburBazarTextilCocinaComedor: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilCocinaComedor(page, context, environment))
    },
    menuHamburBazarTextilDecoOrganizacion: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilDecoOrganizacion(page, context, environment))
    },
    menuHamburBazarTextilFerreteriaPintura: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilFerreteriaPintura(page, context, environment))
    },
    menuHamburBazarTextilLibreria: async ({ page, context }, use) => {
        await use(new MenuHamburBazarTextilLibreria(page, context, environment))
    },

    // MENU HAMBURGUESA - BEBIDAS
    menuHamburBebidasVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVerTodo(page, context, environment))
    },
    menuHamburBebidasAguas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasAguas(page, context, environment))
    },
    menuHamburBebidasBebidasBlancas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasBlancas(page, context, environment))
    },
    menuHamburBebidasBebidasEnergizantes: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasEnergizantes(page, context, environment))
    },
    menuHamburBebidasBebidasIsotonicas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasBebidasIsotonicas(page, context, environment))
    },
    menuHamburguesaBebidasCervezas: async ({ page, context }, use) => {
        await use(new MenuHamburguesaBebidasCervezas(page, context, environment))
    },
    menuHamburBebidasEspumantesSidras: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasEspumantesSidras(page, context, environment))
    },
    menuHamburBebidasFernetAperitivos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasFernetAperitivos(page, context, environment))
    },
    menuHamburBebidasGaseosas: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasGaseosas(page, context, environment))
    },
    menuHamburBebidasJugos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasJugos(page, context, environment))
    },
    menuHamburBebidasVinos: async ({ page, context }, use) => {
        await use(new MenuHamburBebidasVinos(page, context, environment))
    },

    // MENU HAMBURGUESA - DESAYUNO Y MERIENDA
    menuHamburDesayunoMeriendaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaVerTodo(page, context, environment))
    },
    menuHamburDesayunoMeriendaAzucarEndulzantes: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaAzucarEndulzantes(page, context, environment))
    },
    menuHamburDesayunoMeriendaBudinesMagdalenas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaBudinesMagdalenas(page, context, environment))
    },
    menuHamburDesayunoMeriendaCafe: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCafe(page, context, environment))
    },
    menuHamburDesayunoMeriendaCerealesBarritas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaCerealesBarritas(page, context, environment))
    },
    menuHamburDesayunoMeriendaGalletitasBizcochitosTostadas: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaGalletitasBizcochitosTostadas(page, context, environment))
    },
    menuHamburDesayunoMeriendaInfusiones: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaInfusiones(page, context, environment))
    },
    menuHamburDesayunoMeriendaMermeladasOtrosDulces: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaMermeladasOtrosDulces(page, context, environment))
    },
    menuHamburDesayunoMeriendaYerba: async ({ page, context }, use) => {
        await use(new MenuHamburDesayunoMeriendaYerba(page, context, environment))
    },

    // MENU HAMBURGUESA - LACTEOS Y PRODUCTOS FRESCOS
    menuHamburLacteosProdsFrescosVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosVerTodo(page, context, environment))
    },
    menuHamburLacteosProdsFrescosDulceDeLeche: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosDulceDeLeche(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLeches: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLeches(page, context, environment))
    },
    menuHamburLacteosProdsFrescosLechesPolvoYLargaVida: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosLechesPolvoYLargaVida(page, context, environment))
    },
    menuHamburLacteosProdsFrescosPAS: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosPAS(page, context, environment))
    },
    menuHamburLacteosProdsFrescosQuesos: async ({ page, context }, use) => {
        await use(new MenuHamburLacteosProdsFrescosQuesos(page, context, environment))
    },

    // MENU HAMBURGUESA - LIMPIEZA
    menuHamburLimpiezaVerTodo: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaVerTodo(page, context, environment))
    },
    menuHamburLimpiezaArticulosLimpieza: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaArticulosLimpieza(page, context, environment))
    },
    menuHamburLimpiezaDesodorantesAmbiente: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaDesodorantesAmbiente(page, context, environment))
    },
    menuHamburLimpiezaInsecticidas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaInsecticidas(page, context, environment))
    },
    menuHamburLimpiezaLavandinas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLavandinas(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaBanio: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaBanio(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaCocina: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaCocina(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaPisosMuebles: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaPisosMuebles(page, context, environment))
    },
    menuHamburLimpiezaLimpiezaRopa: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaLimpiezaRopa(page, context, environment))
    },
    menuHamburLimpiezaPapelesHigienicos: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaPapelesHigienicos(page, context, environment))
    },
    menuHamburLimpiezaRollosCocinaServilletas: async ({ page, context }, use) => {
        await use(new MenuHamburLimpiezaRollosCocinaServilletas(page, context, environment))
    },

    // MENU HAMBURGUESA - MASCOTAS
    menuHamburMascotasVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasVerTodos(page, context, environment))
    },
    menuHamburMascotasAlimentosGatos: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasAlimentosGatos(page, context, environment))
    },
    menuHamburMascotasAlimentosSnacksPerros: async ({ page, context }, use) => {
        await use(new MenuHamburMascotasAlimentosSnacksPerros(page, context, environment))
    },

    // MENU HAMBURGUESA - MUNDO BEBE
    menuHamburMundoBebeVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeVerTodos(page, context, environment))
    },
    menuHamburMundoBebeAlimentoBebe: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeAlimentoBebe(page, context, environment))
    },
    menuHamburMundoBebeDespuesBanio: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeDespuesBanio(page, context, environment))
    },
    menuHamburMundoBebePaniales: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebePaniales(page, context, environment))
    },
    menuHamburMundoBebeParaElBanio: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeParaElBanio(page, context, environment))
    },
    menuHamburMundoBebeToallitasHumedas: async ({ page, context }, use) => {
        await use(new MenuHamburMundoBebeToallitasHumedas(page, context, environment))
    },

    // MENU HAMBURGUESA - PANADERIA
    menuHamburPanaderiaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaVerTodos(page, context, environment))
    },
    menuHamburPanaderiaPanRalladoRebozadores: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanRalladoRebozadores(page, context, environment))
    },
    menuHamburPanaderiaPanificados: async ({ page, context }, use) => {
        await use(new MenuHamburPanaderiaPanificados(page, context, environment))
    },

    // MENU HAMBURGUESA - PERFUMERIA
    menuHamburPerfumeriaVerTodos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaVerTodos(page, context, environment))
    },
    menuHamburPerfumeriaAlgodonesHisopos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaAlgodonesHisopos(page, context, environment))
    },
    menuHamburPerfumeriaAntitranspirantesDesodorantes: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaAntitranspirantesDesodorantes(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoCorporal: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoCorporal(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoPiel: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoPiel(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoDelCabello: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoDelCabello(page, context, environment))
    },
    menuHamburPerfumeriaCuidadoDental: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaCuidadoDental(page, context, environment))
    },
    menuHamburPerfumeriaFarmacia: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaFarmacia(page, context, environment))
    },
    menuHamburPerfumeriaJabones: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaJabones(page, context, environment))
    },
    menuHamburPerfumeriaProteccionFemenina: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaProteccionFemenina(page, context, environment))
    },
    menuHamburPerfumeriaProteccionAdultos: async ({ page, context }, use) => {
        await use(new MenuHamburPerfumeriaProteccionAdultos(page, context, environment))
    },


    // profilePage: async ({ page, context }, use) => {
    //     const profilePage = new ProfilePage(page, context, environment)
    //     await use(profilePage)
    // },
})

export default test
