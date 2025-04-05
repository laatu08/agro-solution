import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate=useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_no: "",
    password: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", form); // adjust this URL
      setMessage("Registration successful!");
      navigate("/login"); 
      setForm({
        name: "",
        email: "",
        phone_no: "",
        password: "",
        address: "",
      });

    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">
          Register
        </h2>

        {message && (
          <div className="text-center text-sm mb-4 text-red-600 font-medium">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
          <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <InputField label="Phone Number" name="phone_no" type="tel" value={form.phone_no} onChange={handleChange} />
          <InputField label="Password" name="password" type="password" value={form.password} onChange={handleChange} />
          <InputField label="Address" name="address" value={form.address} onChange={handleChange} />

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
}

function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full border px-3 py-2 rounded-md"
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
