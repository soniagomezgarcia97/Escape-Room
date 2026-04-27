/* Importaciones */
import { useState } from "react"
import api from "../../config/Axios"
import { toast } from "sonner"
import { Link } from "react-router-dom"

export default function DesbloqueoFinal() {
  const [answer, setAnswer] = useState('')
  const [misionCumplida, setMisionCumplida] = useState(false)

  const handleCodigo = async (codigo: string) => {
    try {
      const userId = localStorage.getItem('userId')
      const { data } = await api.patch(`/ultimoInvitado/desbloqueoFinal/${userId}`, { codigo: codigo })
      if (data.correcto) {
        toast.success('Código correcto')
        setMisionCumplida(true)
        const { data: misiondata } = await api.patch(`/niveles/ultimoInvitado/${userId}`)
        if (misiondata.correcto) {
          toast.success('Misión completada')
        }
      } else {
        toast.error('Código incorrecto')
      }
    } catch (error) {
      toast.error('Error al enviar respuesta')
    }
  }

  return (
    <>
      <div className="w-full min-h-screen xl:h-screen xl:flex xl:flex-col xl:pb-8 font-ancient bg-[#1a120f] relative">

        {/* Header */}
        <header className="w-full bg-[#1a120f] px-3 py-2 lg:p-5 flex flex-row justify-between items-center mb-2 lg:mb-5 xl:shrink-0">
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
        <main className="w-full xl:flex-1 grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-1 gap-5 p-3 lg:p-5 bg-[#1a120f]">

          {/* Carta chef */}
          <div className="w-full xl:h-full xl:overflow-auto">
            <div className="w-full h-full xl:w-[85%] m-auto bg-[url('/imagesUltimoInvitado/cartaChef.png')] bg-no-repeat bg-[length:100%_100%] p-6 sm:p-8 xl:p-10 xl:px-16 flex flex-col gap-3 xl:gap-6 text-[#1a120f] overflow-auto">
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-center">Carta del chef</h2>
              <div className="text-sm sm:text-base xl:text-lg flex flex-col gap-2 xl:gap-3">
                <p className="leading-6 sm:leading-7">Esta noche, el menú debe ser inolvidable. El orden de los factores sí altera el producto final... y la vida misma. Prestad atención a los detalles, es donde reside mi verdadero legado.</p>
                <p className="leading-6 sm:leading-7">Paso I: Asegurar la base. Utilizar solo tres ramitas de enebro fresco, ni una más. Si el sabor es sutil, el efecto es eterno.</p>
                <p className="leading-6 sm:leading-7">Paso II: La reducción es clave. Hervir el caldo lentamente. Debe quedar exactamente uno de cada cuatro litros originales. La paciencia es una virtud mortal.</p>
                <p className="leading-6 sm:leading-7">Paso III: El toque de gracia. Añadir siete gotas de extracto de adelfa destilada en la copa principal. El invitado no debe sospechar nada hasta el final.</p>
                <p className="leading-6 sm:leading-7">Paso IV: Emplatar con precisión. Coronar con ocho láminas finas de trufa negra. El lujo es el mejor disfraz para la traición.</p>
                <p className="leading-6 sm:leading-7">"Presiona el botón con la misma precisión que un cirujano. El tiempo se agota."</p>
              </div>
            </div>
          </div>

          {/* Caja fuerte */}
          <div className="w-full h-[80vw] sm:h-[60vw] xl:h-full">
            <div className="w-full h-full bg-[url('/imagesUltimoInvitado/cajaFuerte.png')] bg-no-repeat bg-[length:100%_100%] relative">
              <input
                type="number"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Código"
                className="absolute bottom-[35%] left-[50%] -translate-x-1/2 bg-[#1a1d1a] border-2 border-[#3d3d3d]
                text-yellow-500 text-sm sm:text-lg xl:text-2xl text-center tracking-[0.3em] xl:tracking-[0.5em]
                rounded-sm shadow-[inset_0_2px_10px_rgba(0,0,0,1)]
                focus:outline-none focus:ring-1 focus:ring-yellow-500/50
                placeholder:opacity-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                [&::-webkit-inner-spin-button]:appearance-none w-28 sm:w-40 xl:w-60 mb-2"
              />
              <button
                className="absolute bottom-[27%] left-[50%] -translate-x-1/2 text-sm sm:text-lg xl:text-2xl bg-gradient-to-b from-[#555] via-[#333] to-[#222] border border-black/40 rounded-sm
                shadow-[0_2px_0_0_rgba(20,20,20,0.8),0_4px_10px_rgba(0,0,0,0.3)] hover:from-[#666] hover:via-[#444] hover:to-[#333]
                active:shadow-[0_2px_0_0_rgba(20,20,20,1)] active:translate-y-[3px]
                transition-all duration-75 ease-out py-1 sm:py-2 px-5 sm:px-7 xl:px-9 font-bold"
                onClick={() => handleCodigo(answer)}
              >Abrir</button>
            </div>
          </div>

        </main>

        {/* Panel misión cumplida */}
        {misionCumplida && (
          <div className="w-[90%] sm:w-3/4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-[#1a120f] bg-[url('/imagesUltimoInvitado/cuadro.png')] bg-no-repeat bg-[length:100%_100%] z-10 py-12 sm:py-16">
            <h2 className="text-white text-3xl sm:text-5xl xl:text-6xl font-bold mb-6 text-center px-6">¡Misión cumplida!</h2>
            <div className="flex flex-row justify-center gap-8 sm:gap-16 xl:gap-28">
              <Link to={'/main'} className="bg-yellow-500 text-[#1a120f] font-bold px-4 py-2 sm:px-5 sm:py-3">Home</Link>
              <Link to={'/misiones'} className="bg-yellow-500 text-[#1a120f] font-bold px-4 py-2 sm:px-5 sm:py-3">Otra misión</Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
