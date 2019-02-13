import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

const app = express();
const  PORT = 3000;

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/*", (req, res) => {
    const data = renderToString(<App />);
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>SSR</title>
    </head>
    <body>
        <div id="root">${data}</div>
        <script src="./app.bundle.js"></script>
    </body>
    </html>
    `)
})

app.listen(PORT, console.log("LISTENING_ON_PORT",PORT));