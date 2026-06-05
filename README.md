# Családi App Kezelő Rendszer - Felhasználói Felület (Frontend)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/Node-%3E%3D18.0.0-blue.svg)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-19.2.6-brightgreen.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/Vite-8.0.12-purple.svg)](https://vitejs.dev/)

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

## Alkalmazott technológiák

### Kliensoldali technológiák
- **React 19** (Deklaratív, komponensalapú UI könyvtár)
- **Vite 8** (Gyors és modern frontend build eszköz)
- **Vanilla CSS** (Egyedi dizájn és animációk külső frameworkök nélkül)

### Hálózati kommunikáció és API
- **Fetch API** (Böngészőbe épített aszinkron HTTP kérések kezelésére)
- **Vite Development Server Proxy** (Proxy-zás a Spring Boot backend felé)

---

## Projekt struktúra

A kliensoldali kód felépítése a következőképpen alakul:

```
csaladi_app_kezelo_rendszer_frontend/
├── public/                  # Statikus eszközök (képek, ikonok)
├── src/
│   ├── api/                 # A backend REST API-jával kommunikáló Fetch modulok
│   │   ├── applicationApi.js
│   │   ├── backgroundApi.js
│   │   ├── iconApi.js
│   │   ├── menuApi.js
│   │   ├── themeApi.js
│   │   └── userApi.js
│   ├── components/          # Reusable UI komponensek
│   │   ├── dashBoard.jsx    # Felhasználók mentése/törlése, téma és háttérkép hozzárendelése
│   │   ├── phoneSimulator.jsx # Telefon mockup, ikonok indítása és Settings modul
│   │   └── userList.jsx     # Új felhasználók regisztrálása és hátterek hozzáadása
│   ├── App.css              # Fő alkalmazás szintű CSS stílusok (elrendezés, rácsok)
│   ├── App.jsx              # Központi React komponens (állapotkezelés és API-k inicializálása)
│   ├── index.css            # Alapvető CSS formázások és reszetek
│   └── main.jsx             # React belépési pont
├── eslint.config.js         # ESLint statikus kódanalizáló beállítások
├── index.html               # Fő HTML oldal
├── package.json             # Függőségek és npm scriptek listája
└── vite.config.js           # Vite konfiguráció (portok és proxy beállítások)
```

---

## Telepítés és helyi futtatás

### Előfeltételek
- **Node.js** v18.0.0 vagy újabb verzió
- Egy futó **Családi App Kezelő Rendszer Backend** példány (alapértelmezetten a `http://localhost:8080` porton)

### Lépések

1. **Lépj be a frontend könyvtárba:**
   ```bash
   cd csaladi_app_kezelo_rendszer_frontend
   ```

2. **Telepítsd a függőségeket:**
   ```bash
   npm install
   ```

3. **Indítsd el a fejlesztői szervert:**
   ```bash
   npm run dev
   ```
   Az alkalmazás elindul, és alapértelmezetten a `http://localhost:5173` címen érhető el a böngészőben.

4. **Kliensoldal buildelése (Production ready):**
   Ha készen állsz a termelési verzió futtatására:
   ```bash
   npm run build
   ```
   A statikus kimenet a `dist/` mappában fog elkészülni.

---

## API Integráció és Proxy

A frontend zökkenőmentesen integrálódik a backend REST API-jával. A CORS problémák elkerülése érdekében és a fejlesztés megkönnyítésére a Vite konfigurációs fájl (`vite.config.js`) tartalmaz egy proxy szabályt:

```javascript
server: {
  proxy: {
    '/manager': {
      target: "http://localhost:8080/",
      changeOrigin: true
    }
  }
}
```

Minden `/manager` végpontra irányuló hívást a Vite fejlesztői szerver automatikusan továbbít a backend felé, így nincs szükség a teljes URL-címek manuális megadására a kliensoldali kódokban (pl. `fetch("/manager/user")`).

---

## Dizájn és Esztétika

A webalkalmazás modern, "glassmorphism" dizájnt követ tiszta Vanilla CSS használatával.

- **Dinamikus Témák és Hátterek:** A telefon szimulátor háttérképe és a stílusvilága (téma színei) automatikusan frissülnek a kiválasztott felhasználó profilbeállításai alapján.
- **Kétpaneles Nézet:** Bal oldalon található a Dashboard és a felhasználók kezelése, jobb oldalon pedig az interaktív telefon szimulátor.
- **Finom Interakciók:** Hover effektek és gomb transitionök teszik prémium érzetűvé a használatot.

---

## Licenc

Ez a projekt az **MIT Licenc** alatt érhető el. Részletekért lásd a backend gyökérkönyvtárában található `LICENSE` fájlt.
