@echo off
setlocal
cd /d "%~dp0"

echo Carta Raices
echo La pagina estara disponible en:
echo http://localhost:8080
echo.

python --version >nul 2>nul
if %errorlevel% equ 0 (
    python -m http.server 8080 --bind 0.0.0.0
    goto end
)

py -3 --version >nul 2>nul
if %errorlevel% equ 0 (
    py -3 -m http.server 8080 --bind 0.0.0.0
    goto end
)

echo No se ha encontrado Python instalado.
echo Instala Python desde https://www.python.org/ y vuelve a ejecutar este archivo.

:end
echo.
echo Pulsa una tecla para cerrar esta ventana.
pause >nul
