const http = require('http')
const express = require('express')

const port = process.env.PORT || 8000;

const server = http.createServer(app)

server.listen(port)
