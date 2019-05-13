const http = require('http');
const port = 3000;


const requestHandler = (req, res) => {

    let url = require("url");
    let page = url.parse(req.url).pathname;
    

    if(page == '/')
        res.write('Bienvenue sur mon serveur !! :)');
    if(page =='/contact')
        res.write('Nous ne sommes pas joignables pour le moment ! ');
    if(page.includes('/display/')){
        const name = req.url.split('/')[2];
        res.write(`Vous tentez d afficher le profil de ${name}`);}

    console.log(page);

    res.end()
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err) {
        throw new Error ('something bad happened ...');
        
    }
    console.log(`server is listening on ${port}`);
})