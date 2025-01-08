// Importation du module http
const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Envoi d'une réponse au client
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!\n');
});

// Démarrage du serveur
server.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});