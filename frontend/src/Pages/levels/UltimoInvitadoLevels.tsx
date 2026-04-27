import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

const UltimoInvitadoLevels = () => {
  const [niveles, setNiveles] = useState(null)

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const userId = localStorage.getItem('userId')
        const respuesta = await axios.get(`${import.meta.env.VITE_API_URL}/niveles/estado/${userId}`)
        setNiveles(respuesta.data)

      } catch (error) {
        toast.error('Error al cargar los niveles')
      }
    }
    cargarDatos()
  }, [])
  return (
    <>
      <div className="bg-[#1a120f] w-full min-h-screen font-ancient">
        {/* Header */}
        <header className="w-full bg-[#1a120f] p-5 flex flex-row justify-between mb-5 md:mb-12 text-lg md:text-2xl">
          <h1 className="text-2xl md:text-4xl font-semibold text-yellow-500">Escape Room</h1>
          <nav className="flex flex-row justify-center items-center">
            <ul className="flex flex-row justify-center items-center gap-3">
              <li><Link to={'/main'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Home</Link></li>
              <li><Link to={'/misiones'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Misiones</Link></li>
            </ul>
          </nav>
        </header>
        {/* Main */}
        <main className="w-full xl:w-3/4 m-auto grid grid-cols-1 xl:grid-cols-2 gap-5 p-5">
          {/* Columna izquierda */}
          <div className="w-full order-2 xl:order-1">
            <h2 className="text-white text-4xl md:text-6xl lg:text-8xl w-full">El Último Invitado</h2>
            <div className="w-full grid grid-cols-1 gap-3">
              <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-3">
                {/* Nivel 01 */}
                <div className="w-full bg-[#3d2b1f] p-5 xl:p-3 flex flex-col gap-5 xl:gap-3 border-l-4 border-l-yellow-500">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-2xl text-white font-bold">Escenario del crimen</h3>
                    <span className="text-4xl font-bold text-yellow-800">01</span>
                  </div>
                  <p className="text-white/80">La cena ha terminado, pero las pruebas siguen en la mesa. Inspecciona la escena y recupera las tres evidencias clave que la policía pasó por alto. Tu kit de detective debe estar completo para abrir el expediente.</p>
                  <Link to={'/ultimoInvitado/escenarioCrimen'} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Analizar escena</Link>
                </div>
                {/* Nivel 02 */}
                <div className="w-full bg-[#3d2b1f] p-5 xl:p-3 flex flex-col gap-5 xl:gap-3 border-l-4 border-l-yellow-500 relative">
                  <div className="flex flex-row justify-between">
                    <h3 className="text-2xl text-white font-bold">La coartada</h3>
                    <span className="text-4xl font-bold text-yellow-800">02</span>
                  </div>
                  <p className="text-white/80">Accede a los registros de cámaras y chats privados de los sospechosos. Contrasta las horas, detecta la mentira y señala la coartada que no se sostiene. Un solo error de cálculo del culpable será su perdición.</p>
                  <Link to={'/ultimoInvitado/coartada'} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Analizar coartada</Link>
                  {/* Bloqueo */}
                  {niveles?.escenaCrimen === false && (
                    <div className="w-full h-full bg-black/60 flex flex-row justify-center items-center absolute inset-0 z-10">
                      <div className="w-20 h-20">
                        <img src="/imagesUltimoInvitado/candadoGris.svg" alt="Bloqueado" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Nivel 03 */}
              <div className="w-full bg-[#3d2b1f] p-5 xl:p-3 flex flex-col gap-5 xl:gap-3 border-l-4 border-l-yellow-500 relative">
                <div className="flex flex-row justify-between">
                  <h3 className="text-2xl text-white font-bold">Desbloqueo final</h3>
                  <span className="text-4xl font-bold text-yellow-800">03</span>
                </div>
                <p className="text-white/80">Fuerza la caja fuerte del Chef antes de que el sistema se bloquee. Descifra la clave oculta en su última receta y accede a los documentos clasificados. La verdad está a solo cuatro dígitos de distancia.</p>
                <Link to={'/ultimoInvitado/desbloqueoFinal'} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Analizar código</Link>
                {/* Bloqueo */}
                {niveles?.coartada === false && (
                  <div className="w-full h-full bg-black/60 flex flex-row justify-center items-center absolute inset-0 z-10">
                    <div className="w-20 h-20">
                      <img src="/imagesUltimoInvitado/candadoGris.svg" alt="Bloqueado" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Columna derecha */}
          <div className="bg-red-900 flex flex-col gap-4 p-5 order-1 xl:order-2">
            {/* Parte superior */}
            <div className="w-full flex flex-row justify-between items-center">
              <div className="w-16 h-16 bg-red-400 p-2">
                <img src="/imagesUltimoInvitado/danger.svg" alt="Urgente" />
              </div>
              <span className="text-red-400 text-2xl">Urgente</span>
            </div>
            {/* Parte inferior */}
            <h3 className="text-red-400 font-bold text-4xl">Explicación</h3>
            <div className="bg-gradient-to-br from-[#865a1d] via-[#f3d382] to-[#6b4a15] h-auto md:h-3/4 flex flex-row justify-center items-center p-4">
              <p className="text-red-900 text-base md:text-2xl md:leading-10">Un prestigioso chef ha caído en su propio restaurante tras una cena a puerta cerrada. Cuatro sospechosos, una mesa llena de secretos y una verdad que solo tú puedes extraer de las sombras. Investiga el escenario, desmantela las coartadas y hackea la caja fuerte para descubrir qué se servía realmente en esa última cena. El tiempo es un ingrediente que no tienes a tu favor.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default UltimoInvitadoLevels