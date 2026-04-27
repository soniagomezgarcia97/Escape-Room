import { toast } from "sonner"
import api from "../../config/Axios"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Coartada() {
  const [mostrarPantalla, setMostrarPantalla] = useState(false)
  const [mostrarPizarra, setMostrarPizarra] = useState(false)
  const [mostrarGanador, setMostrarGanador] = useState(false)

  const handleRespuesta = async (nombre: string) => {
    try {
      const userId = localStorage.getItem('userId')
      const { data } = await api.patch(`/ultimoInvitado/coartada/${userId}`, { respuesta: nombre })
      if (data.correcto) {
        toast.success('Respuesta correcta')
      } else {
        toast.error('Respuesta incorrecta')
      }
    } catch (error) {
      toast.error('Error al enviar respuesta')
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#1a120f] font-ancient relative">
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
        <main className="w-full flex flex-col xl:grid xl:grid-cols-4 xl:h-[85vh] xl:pr-6">

          {/* Pruebas - fila en móvil, columna en desktop */}
          <div className="w-full xl:col-span-1 flex flex-row xl:flex-col justify-center items-center gap-6 xl:gap-12 py-4 xl:py-0 xl:h-full">
            {/* Ordenador */}
            <button className="w-24 h-24 xl:w-48 xl:h-48 transition-all duration-150 hover:scale-110" onClick={() => setMostrarPantalla(true)}>
              <img src="/imagesUltimoInvitado/ordenador.svg" alt="Ordenador" />
            </button>
            {/* Carpeta */}
            <button className="w-24 h-24 xl:w-48 xl:h-48 transition-all duration-150 hover:scale-110" onClick={() => setMostrarPizarra(true)}>
              <img src="/imagesUltimoInvitado/carpeta.svg" alt="Carpeta" />
            </button>
          </div>

          {/* Tablero sospechosos */}
          <div className="w-full max-h-[80vh] xl:col-span-3 xl:h-full xl:max-h-full overflow-hidden relative" style={{aspectRatio: '4/3'}}>
            <img src="/imagesUltimoInvitado/tablaSospechosos.png" alt="Tablero sospechosos" className="w-full h-full object-fill" />
            {/* Título */}
            <h2 className="text-white text-[3vw] xl:text-3xl font-bold absolute top-[5%] left-[50%] -translate-x-1/2 whitespace-nowrap">¿Quién es el culpable?</h2>
            {/* Foto Alex */}
            <button onClick={() => handleRespuesta('alex')} className="w-[14%] absolute -translate-x-1/2 bg-[#dcd0b9] shadow-[4px_4px_15px_rgba(0,0,0,0.5)] border-t border-l border-b-2 border-r-2 border-black/30 grid grid-cols-1 gap-1 top-[15%] left-[39%] p-1 xl:p-2 transition-all duration-200 hover:scale-110">
              <img src="/imagesUltimoInvitado/alex.png" alt="Alex" />
              <h3 className="text-center font-bold text-[1.5vw] xl:text-base">Alex</h3>
            </button>
            {/* Foto Santi */}
            <button onClick={() => { handleRespuesta('santi'); setMostrarGanador(true) }} className="w-[14%] absolute -translate-x-1/2 bg-[#dcd0b9] shadow-[4px_4px_15px_rgba(0,0,0,0.5)] border-t border-l border-b-2 border-r-2 border-black/30 grid grid-cols-1 gap-1 top-[15%] left-[62%] p-1 xl:p-2 transition-all duration-200 hover:scale-110">
              <img src="/imagesUltimoInvitado/santi.png" alt="Santi" />
              <h3 className="text-center font-bold text-[1.5vw] xl:text-base">Santi</h3>
            </button>
            {/* Foto Lucia */}
            <button onClick={() => handleRespuesta('lucia')} className="w-[14%] absolute -translate-x-1/2 bg-[#dcd0b9] shadow-[4px_4px_15px_rgba(0,0,0,0.5)] border-t border-l border-b-2 border-r-2 border-black/30 grid grid-cols-1 gap-1 top-[60%] left-[39%] p-1 xl:p-2 transition-all duration-200 hover:scale-110">
              <img src="/imagesUltimoInvitado/lucia.png" alt="Lucia" />
              <h3 className="text-center font-bold text-[1.5vw] xl:text-base">Lucía</h3>
            </button>
            {/* Foto Marta */}
            <button onClick={() => handleRespuesta('marta')} className="w-[14%] absolute -translate-x-1/2 bg-[#dcd0b9] shadow-[4px_4px_15px_rgba(0,0,0,0.5)] border-t border-l border-b-2 border-r-2 border-black/30 grid grid-cols-1 gap-1 top-[60%] left-[62%] p-1 xl:p-2 transition-all duration-200 hover:scale-110">
              <img src="/imagesUltimoInvitado/marta.png" alt="Marta" />
              <h3 className="text-center font-bold text-[1.5vw] xl:text-base">Marta</h3>
            </button>

            {/* Ganador - encima del tablero */}
            {mostrarGanador && (
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-[#1a120f] bg-[url('/imagesUltimoInvitado/cuadro.png')] bg-no-repeat bg-[length:100%_100%] z-10">
                <h2 className="text-xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-6 text-center px-6 whitespace-nowrap text-white">¡Nivel completado!</h2>
                <div className="flex flex-row justify-center gap-4 lg:gap-16">
                  <Link to={'/niveles/ultimoInvitado'} className="bg-yellow-500 text-[#1a120f] font-bold px-3 py-1 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base">Niveles</Link>
                  <Link to={'/ultimoInvitado/desbloqueoFinal'} className="bg-yellow-500 text-[#1a120f] font-bold px-3 py-1 lg:px-5 lg:py-3 text-xs sm:text-sm lg:text-base">Nivel 3</Link>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Modal pantalla ordenador */}
        {mostrarPantalla && (
          <div className="w-full h-screen fixed bg-black/80 z-20 top-0 left-0 flex flex-row justify-center items-start overflow-y-auto px-4 pt-16 pb-8">
            <div className="w-full xl:w-[88%] h-[200vh] sm:h-[160vh] xl:h-[85vh] relative overflow-hidden xl:overflow-visible">
              <button className="w-10 h-10 xl:w-14 xl:h-14 absolute top-2 right-2 xl:-right-16 z-10" onClick={() => setMostrarPantalla(false)}>
                <img src="/imagesUltimoInvitado/cruzRoja.svg" alt="Cerrar pantalla" />
              </button>
              <div className="w-full h-full overflow-hidden bg-blue-400">
                <img src="/imagesUltimoInvitado/pantallaOrdenador.png" alt="Pantalla ordenador" className="w-full h-full object-fill" />
              </div>
              <ul className="w-[80%] h-[72%] absolute top-[10%] left-[10%] grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-2 xl:gap-4">
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/chatAlex.png" alt="Coartada Alex" className="w-full h-full object-fill" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/chatSanti.png" alt="Coartada Santi" className="w-full h-full object-fill" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/chatLucia.png" alt="Coartada Lucia" className="w-full h-full object-fill" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/chatMarta.png" alt="Coartada Marta" className="w-full h-full object-fill" /></li>
              </ul>
            </div>
          </div>
        )}

        {/* Modal pizarra */}
        {mostrarPizarra && (
          <div className="w-full h-screen fixed bg-black/80 z-20 top-0 left-0 flex flex-row justify-center items-start overflow-y-auto px-4 pt-16 pb-8">
            <div className="w-full xl:w-[88%] h-[160vh] sm:h-[130vh] xl:h-[85vh] relative overflow-hidden xl:overflow-visible">
              <button className="w-10 h-10 xl:w-14 xl:h-14 absolute top-2 right-2 xl:-right-16 z-10" onClick={() => setMostrarPizarra(false)}>
                <img src="/imagesUltimoInvitado/cruzRoja.svg" alt="Cerrar pizarra" />
              </button>
              <div className="w-full h-full overflow-hidden">
                <img src="/imagesUltimoInvitado/pizarra.png" alt="Pizarra" className="w-full h-full object-fill" />
              </div>
              <ul className="w-[85%] h-[82%] sm:h-[80%] xl:h-[65%] absolute top-[8%] sm:top-[8%] xl:top-[18%] left-[8%] grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-2 xl:gap-4">
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/alexCoartada.png" alt="Coartada Alex" className="w-full h-full object-contain transition-all duration-200 hover:scale-150" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/santiCoartada.png" alt="Coartada Santi" className="w-full h-full object-contain transition-all duration-200 hover:scale-150" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/luciaCoartada.png" alt="Coartada Lucia" className="w-full h-full object-contain transition-all duration-200 hover:scale-150" /></li>
                <li className="w-full h-full overflow-hidden"><img src="/imagesUltimoInvitado/martaCoartada.png" alt="Coartada Marta" className="w-full h-full object-contain transition-all duration-200 hover:scale-150" /></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
