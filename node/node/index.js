const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url)

    res.write('<h1>Hello from nodeJS</h1>')
    res.write('<h2>Hello from nodeJS</h2>')
    res.write('<h3>Hello from nodeJS</h3>')
    res.end(`
        <div style='background: red; width: 200px; height: 200px;>
            <h1>test</h1>
        </div>
    `)
})

server.listen(3000, () => {
    console.log('server is runnin')
})