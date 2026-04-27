/* Importaciones */
import { lazy, Suspense } from "react";
import { ROUTES } from "./const/routes"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import AuthLayout from "./layouts/AuthLayout";

/* Carga lazy de las vistas para optimizar el tiempo de carga inicial */
const LoginView = lazy(() => import("./Pages/LoginView"))
const RegisterView = lazy(() => import("./Pages/RegisterView"))
const MainView = lazy(() => import("./Pages/MainView"))
const EscenarioCrimen = lazy(() => import("./Pages/ultimoInvitado/EscenarioCrimen"))
const Coartada = lazy(() => import("./Pages/ultimoInvitado/Coartada"))
const DesbloqueoFinal = lazy(() => import("./Pages/ultimoInvitado/DesbloqueoFinal"))
const Misiones = lazy(() => import("./Pages/Misiones"))
const LevelsHospital = lazy(() => import("./Pages/levels/LevelsHospital"))
const LevelsTesoro = lazy(() => import("./Pages/levels/LevelsTesoro"))
const LevelsLaboratorio = lazy(() => import("./Pages/levels/LevelsLaboratorio"))
const UltimoInvitadoLevels = lazy(() => import("./Pages/levels/UltimoInvitadoLevels"))

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="w-full h-screen bg-[#1a120f] flex justify-center items-center text-yellow-500 text-2xl">Cargando...</div>}>
                <Routes>
                    {/* Main */}
                    <Route path="/" element={<Navigate to="/auth/login" replace />}></Route>
                    <Route path={ROUTES.HOME} element={<MainView />}></Route>
                    {/* Autenticacion */}
                    <Route element={<AuthLayout />}>
                        <Route path={ROUTES.LOGIN} element={<LoginView />}></Route>
                        <Route path={ROUTES.REGISTER} element={<RegisterView />}></Route>
                    </Route>
                    {/* Misiones */}
                    <Route>
                        <Route path={ROUTES.MISIONES} element={<Misiones />}></Route>
                    </Route>
                    {/* Niveles */}
                    <Route>
                        <Route path={ROUTES.ULTIMO_INVITADO} element={<UltimoInvitadoLevels />}></Route>
                        <Route path={ROUTES.HOSPITAL} element={<LevelsHospital />}></Route>
                        <Route path={ROUTES.TESORO} element={<LevelsTesoro />}></Route>
                        <Route path={ROUTES.LABORATORIO} element={<LevelsLaboratorio />}></Route>
                    </Route>
                    {/* Mision Ultimo Invitado */}
                    <Route>
                        <Route path={ROUTES.ESCENA_CRIMEN} element={<EscenarioCrimen />}></Route>
                        <Route path={ROUTES.COARTADA} element={<Coartada />}></Route>
                        <Route path={ROUTES.DESBLOQUEO_FINAL} element={<DesbloqueoFinal />}></Route>
                    </Route>
                </Routes>
            </Suspense>
            {/* Toaster */}
            <Toaster position="top-right"/>
        </BrowserRouter>
    )
}