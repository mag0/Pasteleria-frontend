import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export const AppLayout = () => {
    return (
        <div className="relative min-h-screen">

            {/* Fondo medieval FIXED */}
            <div
                className="fixed inset-0 -z-20 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsX29mZmljZV81NV9tZWRpZXZhbF9wZXJzaWFuX3BhaW50aW5nX2FydF9vZl9wZXJzaWFuX2Zsb180ZGY2MTQwOS1mMGViLTQzZmEtYWM4ZS00MGRlNGVmYTQxZDUuanBn.jpg')"
                }}
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