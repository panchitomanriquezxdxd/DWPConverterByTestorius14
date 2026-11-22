# Wav a DWP (Android / Windows)

Convierte un audio (.wav con markers de Slicex, .mp3, .ogg, .flac…) en un programa de DirectWave (`.dwp`). Todo se procesa en el dispositivo.

`index.html` es la app completa. El workflow `.github/workflows/build.yml` la empaqueta:

- **Android**: Capacitor → `WavADWP-android.apk` (debug, se instala directo).
- **Windows**: Electron → instalador `.exe` (NSIS) y versión portable.

## Cómo compilar

1. Subí los cambios a `main`, o andá a **Actions → Compilar Android y Windows → Run workflow**.
2. Al terminar, bajá los archivos desde **Artifacts** de esa ejecución.
3. Para publicar un release con los archivos adjuntos: `git tag v1.0.0 && git push --tags`.

## Local (opcional)

```
npm install
npm start            # abre la app en Windows/Linux/macOS con Electron
npm run build:win    # instalador en dist-win/ (conviene hacerlo en Windows)
```

## Notas

- En Android, "Descargar .dwp" abre el menú Compartir/Guardar (el WebView no descarga archivos directamente).
- Las fuentes se cargan desde Google Fonts; sin internet se usan las del sistema. Para que sean 100 % offline, descargalas a una carpeta `fonts/` y referenciálas con `@font-face`.
- El APK es *debug*. Para publicarlo en Play Store hace falta firmarlo (keystore) y compilar `bundleRelease`.
