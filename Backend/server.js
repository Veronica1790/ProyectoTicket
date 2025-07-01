const express = require('express');
const app = express();
// Middleware para interpretar datos en formato JSON
app.use(express.json());
app.post('/datos', (req, res) => {
// Ahora req.body contendrá los datos enviados
console.log(req.body);
res.send('Datos recibidos correctamente');
});
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

const mysql = require('mysql2');
// Configuración de conexión
const db = mysql.createConnection({
host: 'localhost', // Servidor de la base de datos
user: 'root', // Usuario de MySQL
password: '', // Contraseña (dejar vacío si no tiene)
database: 'proyectoticket' // Nombre de la base de datos. modoficar y poner el nombre de la base de dato de ustedes
});
// Conectar a la base de datos
db.connect(err => {
if (err) {
console.error('Error de conexión a MySQL:', err);
} else {
console.log('Conectado a MySQL ✅');
}
});
module.exports = db;