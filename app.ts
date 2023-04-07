import fs from 'fs';

interface PropPath {
  path: string;
}

const existeArchivoOCarpeta = ({ path }: PropPath) => {
  if (fs.existsSync(path)) {
    console.log('La carpeta existe en la ruta', path);
    return true;
  } else {
    console.log('La carpeta no existe en la ruta', path);
    return false;
  }
};

const crearCarpeta = async ({ path }: PropPath) => {
  const url = `${path}/store`;
  if (existeArchivoOCarpeta({ path: url })) return;
  try {
    fs.mkdirSync(url);
  } catch (error) {
    console.error(error);
  }
};

(() => {
  const path = './';

  try {
    crearCarpeta({ path });
  } catch (error) {
    console.error(error);
  }
})();
