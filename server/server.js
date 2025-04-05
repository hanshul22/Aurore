const express = require("express")
const path = require("path")
const apiRoutes = require("./routes/api")

// Server middlewares are added here.

export function addMiddlewares(app) {
    // Serve favicon
    app.use("/favicon.ico", express.static(path.join(__dirname, "../public/favicon.ico")))
    
    // Parse JSON request bodies
    app.use(express.json())
    
    // Parse URL-encoded request bodies
    app.use(express.urlencoded({ extended: true }))
    
    // Enable CORS if needed
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        if (req.method === 'OPTIONS') {
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
            return res.status(200).json({})
        }
        next()
    })
    
    // API routes
    app.use("/api", apiRoutes)
    
    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).json({ error: 'Something went wrong!' })
    })
}
