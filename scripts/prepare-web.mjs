// Copia index.html a www/ (carpeta que usan tanto Capacitor/Android como Electron/Windows).
import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'index.html');
if (!existsSync(src)) {
  console.error('No se encontró index.html en la raíz del repo.');
  process.exit(1);
}
mkdirSync(join(root, 'www'), { recursive: true });
copyFileSync(src, join(root, 'www', 'index.html'));
console.log('index.html -> www/index.html');
