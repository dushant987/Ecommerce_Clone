import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const Signup = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", address: "" });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Full name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
        if (!form.password) e.password = "Password is required";
        else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
        if (!form.confirm) e.confirm = "Please confirm your password";
        else if (form.confirm !== form.password) e.confirm = "Passwords do not match";
        if (!form.address.trim()) e.address = "Address is required";
        return e;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setLoading(true);
        setServerError("");
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: form.name, email: form.email, password: form.password, address: form.address }),
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
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 py-10">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

                {/* Logo / Title */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-blue-700">Best Buy</h1>
                    <p className="text-gray-500 mt-1 text-sm">Create your account</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

                    {serverError && (
                        <div className="bg-red-50 border border-red-300 text-red-600 text-sm px-4 py-3 rounded-lg">
                            {serverError}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full name</label>
                        <input type="text" placeholder="John Doe" value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.name ? "border-red-400 bg-red-50" : "border-gray-300"}`} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email address</label>
                        <input type="email" placeholder="you@email.com" value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? "border-red-400 bg-red-50" : "border-gray-300"}`} />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
                        <input type="password" placeholder="Min. 6 characters" value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.password ? "border-red-400 bg-red-50" : "border-gray-300"}`} />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm password</label>
                        <input type="password" placeholder="••••••••" value={form.confirm}
                            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.confirm ? "border-red-400 bg-red-50" : "border-gray-300"}`} />
                        {errors.confirm && <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
                        <input type="text" placeholder="123 Main St, City, State" value={form.address}
                            onChange={(e) => setForm({ ...form, address: e.target.value })}
                            className={`w-full border rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.address ? "border-red-400 bg-red-50" : "border-gray-300"}`} />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-yellow-400 text-black font-black py-3 rounded-full hover:bg-yellow-300 transition-colors mt-1 shadow disabled:opacity-60"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-700 font-semibold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
