import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
        if (!form.password) e.password = "Password is required";
        return e;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setLoading(true);
        setServerError("");
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) { setServerError(data.message); return; }
            login(data.user, data.token);
            navigate("/");
        } catch {
            setServerError("Cannot connect to server. Is the backend running?");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

                {/* Logo / Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-blue-700">Best Buy</h1>
                    <p className="text-gray-500 mt-1 text-sm">Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                    {serverError && (
                        <div className="bg-red-50 border border-red-300 text-red-600 text-sm px-4 py-3 rounded-lg">
                            {serverError}
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${
                                errors.email ? "border-red-400 bg-red-50" : "border-gray-300"
                            }`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <button type="button" className="text-xs text-blue-600 hover:underline">
                                Forgot password?
                            </button>
                        </div>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${
                                errors.password ? "border-red-400 bg-red-50" : "border-gray-300"
                            }`}
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-blue-800 transition-colors mt-1 disabled:opacity-60"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-700 font-semibold hover:underline">
                        Create one
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
