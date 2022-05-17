const env = process.env.NODE_ENV || 'development'
// Configure environment variables using .env* files
require('dotenv').config({ node_env: env })

export {}
