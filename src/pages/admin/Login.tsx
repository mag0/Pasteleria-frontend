import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../helper/auth";

const Login = () => {

    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {

        const success = loginAdmin(password);

        if (success) {
            navigate("/admin/productTable");
        } else {
            alert("Contraseña incorrecta");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FDF6F0] px-4">

            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">

                <h1 className="text-3xl font-serif text-center text-[#9E3A66] mb-6">
                    Admin
                </h1>

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-[#E7D7DF] rounded-lg px-4 py-3 outline-none focus:border-[#9E3A66]"
                />

                <button
                    onClick={handleLogin}
                    className="w-full mt-4 bg-[#9E3A66] text-white py-3 rounded-lg transition hover:opacity-90"
                >
                    Ingresar
                </button>

            </div>

        </div>
    );
};

export default Login;