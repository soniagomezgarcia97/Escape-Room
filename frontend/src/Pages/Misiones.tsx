import { Link } from "react-router-dom"

const Misiones = () => {
  return (
    <>
      <div className="bg-[#1a120f] min-h-screen font-ancient">
        <header className="w-full bg-[#1a120f] p-5 flex flex-row justify-between mb-5">
          <h1 className="text-2xl md:text-4xl font-semibold text-yellow-500">Escape Room</h1>
          <nav className="flex flex-row justify-center items-center text-lg md:text-2xl">
            <Link to={'/main'} className="text-orange-100 font-bold border-b-2 border-transparent transition-all duration-500 ease-out hover:text-yellow-500">Home</Link>
          </nav>
        </header>
        <main className="w-full">
          <h2 className="text-5xl md:text-7xl lg:text-9xl text-white w-full flex flex-row justify-center items-center mb-5">Misiones</h2>
          <ul className="w-full md:w-11/12 m-auto px-5 md:px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 pb-10">
            <li className="bg-[#2b1c14] p-5 border-t-8 border-t-[#a3521e] relative hover:-translate-y-2 transition-all duration-200">
              <span className="bg-[#a3521e] p-2 absolute left-0 -top-4 text-[#e99a74] font-bold">Clasificado</span>
              <div className="w-full h-80 my-4">
                <img src="/imagesUltimoInvitado/misionAsesinato.png" alt="El último invitado" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <h3 className="text-2xl text-yellow-500 font-bold">El último invitado</h3>
                <p className="text-white mb-2">Una baja de alto perfil en un reservado exclusivo. La tinta aún está fresca en la lista de sospechosos.</p>
                <Link to={'/niveles/ultimoInvitado'} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">Resolver</Link>
              </div>
            </li>
            <li className="bg-[#2b1c14] p-5 border-t-8 border-t-[#c49a2d] relative hover:-translate-y-2 transition-all duration-200">
              <span className="bg-[#c49a2d] p-2 absolute left-0 -top-4 text-amber-950 font-bold">Alta prioridad</span>
              <div className="w-full h-80 my-4">
                <img src="/ImagesHospital/misionHospital.png" alt="El paciente olvidado" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <h3 className="text-2xl text-yellow-500 font-bold">El Paciente Olvidado</h3>
                <p className="text-white mb-2">Una brecha de seguridad en el ala este. No todos los residentes de la Unidad 4 han sido evacuados.</p>
                <Link to={''} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">{/* /niveles/hospital */}Resolver</Link>
              </div>
              <span className="text-yellow-500 text-2xl font-bold bg-black/60 p-2 border-4 border-yellow-500 absolute top-[30%] left-[20%] ">Coming soon</span>
            </li>
            <li className="bg-[#2b1c14] p-5 border-t-8 border-t-red-700 relative hover:-translate-y-2 transition-all duration-200">
              <span className="bg-red-700 p-2 absolute left-0 -top-4 text-white font-bold">Peligroso</span>
              <div className="w-full h-80 my-4">
                <img src="/ImagesTesoro/misionTesoro.png" alt="El eco del galeón" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <h3 className="text-2xl text-yellow-500 font-bold">El Eco del Galeón</h3>
                <p className="text-white mb-2">Una marea inusualmente baja y un secreto sumergido que se niega a permanecer en el olvido.</p>
                <Link to={''} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">{/* /niveles/tesoro */}Resolver</Link>
                <span className="text-yellow-500 text-2xl font-bold bg-black/60 p-2 border-4 border-yellow-500 absolute top-[30%] left-[20%] ">Coming soon</span>
              </div>
            </li>
            <li className="bg-[#2b1c14] p-5 border-t-8 border-t-[#5c5030] relative hover:-translate-y-2 transition-all duration-200">
              <span className="bg-[#5c5030] p-2 absolute left-0 -top-4 text-[#d9ceb2] font-bold">Alto riesgo</span>
              <div className="w-full h-80 my-4">
                <img src="/ImagesLaboratorio/misionLaboratorio.png" alt="El protocolo Aegis" className="w-full h-full object-cover" />
              </div>
              <div className="w-full flex flex-col justify-center gap-2">
                <h3 className="text-2xl text-yellow-500 font-bold">El Protocolo Aegis</h3>
                <p className="text-white mb-2">Silencio absoluto en el complejo subterráneo. El sistema de soporte vital ha iniciado la cuenta atrás.</p>
                <Link to={''} className="w-3/4 m-auto bg-yellow-500 text-[#1a120f] p-4 font-bold flex flex-row justify-center items-center">{/* /niveles/laboratorio */}Resolver</Link>
              </div>
              <span className="text-yellow-500 text-2xl font-bold bg-black/60 p-2 border-4 border-yellow-500 absolute top-[30%] left-[20%] ">Coming soon</span>
            </li>
          </ul>
        </main>
      </div>
    </>
  )
}

export default Misiones