/* Importaciones */
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const titles: Record<string, string> = {
    '/auth/login': 'Iniciar Sesión',
    '/auth/register': 'Registrarse',
  }
  const paragraphs: Record<string, string> = {
    '/auth/login': 'Introduce la llave correcta para continuar la historia.',
    '/auth/register': 'Tu aventura comienza aquí. Inscríbete en el registro de exploradores.',
  }
  const { pathname } = useLocation()
  const title = titles[pathname] ?? ''
  const paragraph = paragraphs[pathname] ?? ''
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-ancient">
        <div className="relative w-full min-h-screen hidden md:block">
          <div className="w-full h-screen absolute inset-0 bg-[url('/backLogReg.png')] bg-no-repeat bg-cover"></div>
          <div className="w-full h-screen relative flex flex-col justify-center items-center bg-black/60">
            <div className="flex flex-col justify-center items-start gap-5 px-8">
              <div className="w-16 h-16">
                <img src="/imagesUltimoInvitado/candado.svg" alt="candado"/>
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold text-yellow-500">{title}</h1>
              <p className="text-white">{paragraph}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-screen mx-auto px-10 md:px-20 bg-[#140C08]">
          <Outlet />
        </div>
      </div>
    </>
  )
}
