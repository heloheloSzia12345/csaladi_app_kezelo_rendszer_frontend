# Családi App Kezelő Rendszer - Felhasználói Felület (Frontend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/Node-%3E%3D18.0.0-blue.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-18.2.0-brightgreen.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-5.0.0-purple.svg)](https://vitejs.dev/)
Egy modern, reszponzív és prémium megjelenésű React (Vite) alapú kliensoldali felhasználói felület a családi okoseszközök és menük kezelésére. A felület zökkenőmentesen kommunikál a Spring Boot backenddel, és valós időben szimulálja a családtagok eszközeinek testreszabását.
---
## Tartalomjegyzék
1. [Főbb funkciók](#-főbb-funkciók)
2. [Alkalmazott technológiák](#-alkalmazott-technológiák)
3. [Projekt struktúra](#-projekt-struktúra)
4. [Telepítés és helyi futtatás](#-telepítés-és-helyi-futtatás)
5. [API Integráció és Proxy](#-api-integráció-és-proxy)
6. [Dizájn és Esztétika](#-dizájn-és-esztétika)
7. [Licenc](#-licenc)
---
## Főbb funkciók
- **Családtagok listája és profilkezelés:** Új családtagok regisztrálása, meglévő profilok átnevezése vagy törlése a bal oldali vezérlőpulton.
- **Arculat és Háttér testreszabása:** A felhasználóhoz tartozó vizuális téma (pl. Dark Cocoa, Warm Caramel) és háttérkép kiválasztása, valamint új háttérkép-nevek hozzáadása.
- **Interaktív Telefon Szimulátor:** A jobb oldali panelen egy fizikai okostelefon mockup jelenik meg, amely valós időben szinkronizálódik a kiválasztott felhasználó beállításaival.
- **Eszközön belüli Alkalmazáskezelés (⚙️ Settings):** A telefon szimulátoron belül futó speciális beállítások alkalmazás, amellyel a felhasználó közvetlenül a telefon kijelzőjén tud új ikonokat hozzáadni, meglévőket átnevezni vagy törölni.
- **Alkalmazások indítása:** Az ikonokra kattintva az adott mini-alkalmazás elindul a telefon kijelzőjén.
---
