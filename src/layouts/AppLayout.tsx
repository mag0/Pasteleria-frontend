import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div className="relative min-h-screen">

            <div
                className="fixed inset-0 -z-20 bg-cover bg-center imagen-fondo"
            />

            {/* Overlay violeta */}
            <div className="fixed inset-0 -z-10 bg-[#9E3A66]/50"></div>

            <div className="relative flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};