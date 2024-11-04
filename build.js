const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const fse = require('fs-extra');  // Importar fs-extra para copiar carpetas completas

const inputFilePath = path.join(__dirname, 'src', 'views', 'other', 'home.ejs');
const outputDir = path.join(__dirname, 'dist');
const publicDir = path.join(__dirname, 'public');

// Asegúrate de que el directorio de salida (dist) exista
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Renderiza home.ejs a index.html
ejs.renderFile(inputFilePath, {}, (err, html) => {
    if (err) {
        console.error('Error al renderizar home.ejs:', err);
        return;
    }
    fs.writeFileSync(path.join(outputDir, 'index.html'), html);
    console.log('home.ejs se ha renderizado como index.html en la carpeta dist');
});

// Copiar el contenido de la carpeta public a dist/public
fse.copy(publicDir, outputDir, (err) => {
    if (err) {
        console.error('Error al copiar la carpeta public:', err);
        return;
    }
    console.log('La carpeta public se ha copiado exitosamente a dist');
});