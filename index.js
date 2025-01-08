// Importation du module http
const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Lecture du fichier HTML
    const fs = require('fs');
    const html = fs.readFileSync('index.html');

    // Envoi d'une réponse au client
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

});

// Démarrage du serveur
server.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});

// Arrêter le serveur après 5 secondes (pour GitHub Actions)
setTimeout(() => {
    console.log('Arrêt du serveur après 5 secondes');
    server.close();
}, 5000);