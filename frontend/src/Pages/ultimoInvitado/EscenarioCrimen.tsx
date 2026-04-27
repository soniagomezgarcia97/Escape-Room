/* Importaciones */
import { toast } from "sonner"
import api from "../../config/Axios"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function EscenarioCrimen() {
    const [objetosEncontrados, setObjetosEncontrados] = useState<string[]>([]);
    const handleObjectClick = async (objectName: string) => {
        try {
            const userId = localStorage.getItem('userId')
            await api.patch(`/ultimoInvitado/escenarioCrimen/${userId}`, {
                objeto: objectName
            })

            setObjetosEncontrados((prev) => [...prev, objectName]);

            toast.success(`${objectName} encontrado`)
        } catch (error) {
            toast.error(`Error al actualizar: ${error}`)
        }
    }

    return (
        <>
            <div className="w-full min-h-screen bg-[#1a120f] text-white font-ancient relative">
                <div className="game-content">
                    {/* Header */}
                    <header className="w-full bg-[#1a120f] px-3 py-2 lg:p-5 flex flex-row justify-between items-center mb-2 lg:mb-8">
                        <h1 className="text-lg sm:text-2xl lg:text-4xl font-semibold text-yellow-500 whitespace-nowrap">Escape Room</h1>
                        <nav className="flex flex-row justify-center items-center">
                            <ul className="flex flex-row justify-center items-center gap-2 lg:gap-3 text-sm sm:text-base lg:text-2xl">
                                <li><Link to={'/main'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Home</Link></li>
                                <li><Link to={'/misiones'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Misiones</Link></li>
                                <li><Link to={'/niveles/ultimoInvitado'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Niveles</Link></li>
                            </ul>
                        </nav>
                    </header>
                    {/* Main */}
                    <main className="w-full flex flex-col xl:flex-row xl:items-stretch xl:gap-4 xl:px-6 xl:h-[75vh]">
                        {/* Fotografia */}
                        <div className="w-full xl:flex-1 xl:h-full border-4 border-yellow-500 relative overflow-hidden" style={{aspectRatio: '16/9'}}>
                            <img src="/imagesUltimoInvitado/escenaCrimenMesa.png" alt="Escena del crimen" className="w-full h-full object-cover" />
                            {/* Objetos */}
                            <div>
                                {/* Platos comida */}
                                <button className="w-[4%] h-[7%] absolute top-[63%] left-[25%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/platoComidaEscenaCrimen.png" alt="Plato comida" className="w-full h-full object-contain" />
                                </button>
                                <button className="w-[4%] h-[7%] absolute top-[63%] left-[65%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/platoComidaEscenaCrimen.png" alt="Plato comida" className="w-full h-full object-contain" />
                                </button>
                                {/* Copas */}
                                <button className="w-[3%] h-[8%] absolute top-[55%] left-[35%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/copaEscenaCrimen.png" alt="Copa" className="w-full h-full object-contain" />
                                </button>
                                <button className={`w-[3%] h-[8%] absolute hover:scale-110 transition-opacity duration-500 ${objetosEncontrados.includes('copaSangre') ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{top: '55%', left: '58%'}} onClick={() => handleObjectClick('copaSangre')}>
                                    <img src="/imagesUltimoInvitado/copaSangreEscenaCrimen.png" alt="Copa con sangre" className="w-full h-full object-contain" />
                                </button>
                                {/* Cubiertos */}
                                <button className="w-[3%] h-[6%] absolute top-[64%] left-[45%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/cubiertosEscenaCrimen.png" alt="Cubiertos" className="w-full h-full object-contain" />
                                </button>
                                <button className={`w-[3%] h-[6%] absolute hover:scale-110 transition-opacity duration-500 ${objetosEncontrados.includes('cuchilloSangre') ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{top: '64%', left: '48%'}} onClick={() => handleObjectClick('cuchilloSangre')}>
                                    <img src="/imagesUltimoInvitado/cuchilloSangreEscenaCrimen.png" alt="Cuchillo sangre" className="w-full h-full object-contain" />
                                </button>
                                {/* Florero */}
                                <button className="w-[3%] h-[6%] absolute top-[52%] left-[25%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/floreroEscenaCrimen.png" alt="Florero" className="w-full h-full object-contain" />
                                </button>
                                {/* Candelabros */}
                                <button className={`w-[5%] h-[12%] absolute hover:scale-110 transition-opacity duration-500 ${objetosEncontrados.includes('candelabroSangre') ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{top: '40%', left: '75%'}} onClick={() => handleObjectClick('candelabroSangre')}>
                                    <img src="/imagesUltimoInvitado/candelabroSangreEscenaCrimen.png" alt="Candelabro sangre" className="w-full h-full object-contain" />
                                </button>
                                <button className="w-[5%] h-[12%] absolute top-[46%] left-[15%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/candelabroEscenaCrimen.png" alt="Candelabro" className="w-full h-full object-contain" />
                                </button>
                                {/* Pila platos */}
                                <button className="w-[5%] h-[12%] absolute top-[44%] left-[65%] hover:scale-110">
                                    <img src="/imagesUltimoInvitado/platosEscenaCrimen.png" alt="Pila platos" className="w-full h-full object-contain" />
                                </button>
                                {/* Guantes */}
                                <button className={`w-[5%] h-[12%] absolute hover:scale-110 transition-opacity duration-500 ${objetosEncontrados.includes('guantes') ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{top: '80%', left: '78%'}} onClick={() => handleObjectClick('guantes')}>
                                    <img src="/imagesUltimoInvitado/guantesEscenaCrimen.png" alt="Guantes" className="w-full h-full object-contain" />
                                </button>
                            </div>
                            {/* Ganador - encima de la foto */}
                            {objetosEncontrados.includes('copaSangre') && objetosEncontrados.includes('cuchilloSangre') && objetosEncontrados.includes('candelabroSangre') && objetosEncontrados.includes('guantes') && (
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#1a120f] bg-[url('/imagesUltimoInvitado/cuadro.png')] bg-no-repeat bg-[length:100%_100%] z-10">
                                    <h2 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-6 text-center px-6 whitespace-nowrap">¡Nivel completado!</h2>
                                    <div className="flex flex-row justify-center gap-4 lg:gap-16">
                                        <Link to={'/niveles/ultimoInvitado'} className="bg-yellow-500 text-[#1a120f] font-bold px-3 py-1 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base">Niveles</Link>
                                        <Link to={'/ultimoInvitado/coartada'} className="bg-yellow-500 text-[#1a120f] font-bold px-3 py-1 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base">Nivel 2</Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Inventario - grid 2x2 */}
                        <div className="w-full px-4 pt-3 grid grid-cols-2 gap-2 xl:w-80 xl:px-0 xl:pt-0 xl:grid-rows-2 xl:shrink-0 xl:h-full">
                            <div className="h-[22vw] xl:h-full xl:overflow-hidden border-2 border-yellow-800 bg-[#2a1f1a] flex items-center justify-center">
                                {objetosEncontrados.includes('copaSangre')
                                    ? <img src="/imagesUltimoInvitado/copaSangreEscenaCrimen.png" alt="Copa con sangre" className="h-full object-contain" />
                                    : <span className="text-yellow-800 text-3xl">?</span>
                                }
                            </div>
                            <div className="h-[22vw] xl:h-full xl:overflow-hidden border-2 border-yellow-800 bg-[#2a1f1a] flex items-center justify-center">
                                {objetosEncontrados.includes('cuchilloSangre')
                                    ? <img src="/imagesUltimoInvitado/cuchilloSangreEscenaCrimen.png" alt="Cuchillo sangre" className="h-full object-contain" />
                                    : <span className="text-yellow-800 text-3xl">?</span>
                                }
                            </div>
                            <div className="h-[22vw] xl:h-full xl:overflow-hidden border-2 border-yellow-800 bg-[#2a1f1a] flex items-center justify-center">
                                {objetosEncontrados.includes('candelabroSangre')
                                    ? <img src="/imagesUltimoInvitado/candelabroSangreEscenaCrimen.png" alt="Candelabro sangre" className="h-full object-contain" />
                                    : <span className="text-yellow-800 text-3xl">?</span>
                                }
                            </div>
                            <div className="h-[22vw] xl:h-full xl:overflow-hidden border-2 border-yellow-800 bg-[#2a1f1a] flex items-center justify-center">
                                {objetosEncontrados.includes('guantes')
                                    ? <img src="/imagesUltimoInvitado/guantesEscenaCrimen.png" alt="Guantes" className="h-full object-contain" />
                                    : <span className="text-yellow-800 text-3xl">?</span>
                                }
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </>
    )
}
