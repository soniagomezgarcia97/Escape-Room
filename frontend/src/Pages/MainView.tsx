import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

export default function MainView() {
  const navigate = useNavigate()
  const { userId, logout } = useAuth()
  /* Eliminar user */
  const handleBorrarCuenta = async () => {
    if (!userId) {
      return
    }

    try {
      const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/auth/account/${userId}`, { method: 'DELETE' })

      const data = await respuesta.json()
      if (!respuesta.ok) throw new Error(data.error)

      logout()
      toast.success('Cuenta eliminada')
      navigate('/auth/login')
    } catch (error) {
      toast.error('Error al eliminar la cuenta')
    }
  }
  return (
    <>
      <div className='w-full min-h-dvh font-ancient'>
        {/* HEADER */}
        <header className="w-full bg-neutral-900 flex flex-row justify-between items-center px-5 md:px-10 py-3 fixed top-0 left-0 z-10 text-lg md:text-2xl">
          <h1 className="text-2xl font-semibold text-yellow-500">Escape Room</h1>
          <nav className="hidden md:flex flex-row justify-center items-center gap-3">
            <a href='#principal' className="text-orange-100 border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Principal</a>
            <a href='#misiones' className="text-orange-100 border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Misiones</a>
            <a href='#contacto' className="text-orange-100 border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Contacto</a>
          </nav>
          <button onClick={handleBorrarCuenta} className="text-xs lg:text-lg px-2 text-neutral-900 bg-yellow-500">Eliminar cuenta</button>
        </header>

        {/* MAIN */}
        <main className="bg-[#1a120f] w-full h-screen grid grid-cols-1">
          {/* Principal */}
          <article id="principal" className="w-full relative">
            {/* Back image */}
            <div className="w-full h-screen bg-[url('/backImageMain.png')] bg-no-repeat bg-[length:100%_100%] opacity-30"></div>
            {/* Informacion */}
            <div className="w-full h-screen absolute top-0 left-0 flex flex-col justify-center items-start px-5 md:px-20 gap-2">
              <span className="uppercase text-yellow-500 bg-[#3d2f27]/80 p-3 rounded-sm border border-white/10">Clasificación: Secreta</span>
              <h2 className="w-full md:w-[50%] text-5xl md:text-7xl lg:text-9xl text-white font-bold">Escape the <span className="text-yellow-500">room</span>!</h2>
              <ul className="flex flex-col gap-2 text-white text-2xl md:text-5xl">
                <li>Investiga</li>
                <li>Resuelve</li>
                <li>Escapa.</li>
              </ul>
            </div>
          </article>
          {/* Misiones */}
          <article id="misiones" className="w-full h-auto xl:h-screen bg-[#1a120f] p-5 xl:p-16 flex flex-col gap-8 xl:gap-16">
            <h2 className="text-white text-4xl font-bold">Algunas misiones</h2>
            <div className="w-full h-full grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-16">
              {/* Mision Asesinato */}
              <div className="w-full h-64 md:h-80 lg:h-96 xl:h-full col-span-1 xl:col-span-2 bg-[url('/imagesUltimoInvitado/misionAsesinato.png')] bg-no-repeat bg-[length:100%_100%]">
                <div className="w-full h-full bg-black/60 flex flex-col justify-end items-start p-5 xl:p-16 xl:pb-20 gap-4 xl:gap-9">
                  <h3 className="text-white text-2xl xl:text-5xl font-bold">El Último Invitado</h3>
                  <p className="text-sm xl:text-2xl text-white/80 w-2/3">Una baja de alto perfil en un reservado exclusivo. La tinta aún está fresca en la lista de sospechosos.</p>
                  <Link to={'/misiones'} className="bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Resolver</Link>
                </div>
              </div>
              {/* Mision Hospital */}
              <div className="w-full h-64 md:h-80 lg:h-96 xl:h-full col-span-1 bg-[url('/ImagesHospital/misionHospital.png')] bg-no-repeat bg-[length:100%_100%]">
                <div className="w-full h-full bg-black/60 flex flex-col justify-end items-start p-5 xl:p-16 xl:pb-20 gap-4 xl:gap-9">
                  <h3 className="text-white text-2xl xl:text-5xl font-bold">El Último Invitado</h3>
                  <p className="text-sm xl:text-2xl text-white/80 w-2/3">Una brecha de seguridad en el ala este. No todos los residentes de la Unidad 4 han sido evacuados.</p>
                  <Link to={'/misiones'} className="bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Resolver</Link>
                </div>
              </div>
            </div>
          </article>
          {/* Contacto */}
          <article id="contacto" className="w-full h-auto md:h-screen bg-neutral-950 flex flex-col justify-center items-center p-10 md:p-20 py-16 gap-10 md:gap-20">
            <h1 className="text-3xl md:text-6xl font-semibold text-yellow-500">Escape Room</h1>
            <span className="text-white/80 text-lg md:text-2xl text-center">Resuelve los acertijos, y conseguirás escapar.</span>
            <ul className="flex flex-row gap-12">
              <li className="flex flex-row justify-center items-center">
                <a href="mailto:soniagomezgarcia97@gmail.com" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" target="_blanck">
                  <img src="/gmail.svg" alt="gmail" />
                </a>
              </li>
              <li className="flex flex-row justify-center items-center">
                <a href="https://www.linkedin.com/in/sonia-gómez-garcía-2a364b329?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" target="_blanck">
                  <img src="/linkedin.svg" alt="linkedin" /></a>
              </li>
            </ul>
          </article>
        </main>
      </div>
    </>
  )
}
