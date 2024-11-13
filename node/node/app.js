const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write(`
        <html>
            <head>
                <title>COOL PAGE</title>
                <style>
                    body { font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; }
                    h1 { color: #ee71c3; }
                    h2 { color: #0000FF; }
                    h3 { color: #ee71c3; }
                    .box { background-color: #A020F0; width: 500px; height: 150px; margin: 20px auto; padding: 20px; border-radius: 10px; }
                    .image { width: 300px; height: auto; border-radius: 10px; }
                    .container { margin-top: 50px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>OOOOOH YOU GOT A COOL PAGE</h1>
                    <h2>THIS PAGE WAS MADE COOL WITH HELP OF CSS</h2>
                    <h3>WOOOOW JUST AMAZING</h3>
                    <div class="box">
                        <h3>OOOH its AWESOME BOX</h3>
                        <p>this box has COLORS and its AWESOME in general</p>
                        <p>also you can REFRESH this page and see DIFFRENT PICTURES EACH TIME DOWN THERE</p>
                    </div>
                    <img src="https://picsum.photos/200/300" alt="Image" class="image"/>
                </div>
            </body>
        </html>
    `);
    res.end();
})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})