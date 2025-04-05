import React, { useState } from "react"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        
        // Clear errors when user types
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Simple validation
        const newErrors = {}
        if (!formData.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid"
        }
        
        if (!formData.password) {
            newErrors.password = "Password is required"
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        
        // TODO: Handle login submission to backend
        console.log("Form submitted:", formData)
        
        // Reset form after successful submission
        setFormData({
            email: "",
            password: ""
        })
    }
    
    return (
        <div className="flex justify-center items-center min-h-screen p-5 bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.email && <div className="mt-1 text-sm text-red-500">{errors.email}</div>}
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        {errors.password && <div className="mt-1 text-sm text-red-500">{errors.password}</div>}
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login 