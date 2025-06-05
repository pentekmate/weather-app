# Időjárás jelentő applikáció
Kiválasztott településen vissza adja a várható időjárást.
## Tartalom  
- [Főbb funkciók](#főbb-funkciók)  
- [Telepítés](#telepítés)  
- [‼️Fontos](#️fontos)  
- [Fájlszerkezet](#fájszerkezet)  

## Főbb funkciók
- Város kereső (Open-Meteo Geocoding API)
- Korábban keresett város mentése böngészőben.
- Jelenlegi időjárás mutatása.
- Heti időjárás előrejelzés
- Kisebb grafikon maximum hőmérsékletekkel.

## Telepítés

```
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
```

## ‼️Fontos
.env fájl létrehozása gyökérben az alábbi paraméterekkel:
```
VITE_FORECAST_URL=https://api.open-meteo.com/v1/forecast
VITE_FETCHCITYURL=https://geocoding-api.open-meteo.com/v1/search?name
``` 

## Fájlszerkezet
```
src/
├── UI/                  # Újrahasználható felhasználói felület (komponensek)
├── Contexts/            # Globális állapotkezelés (React Context API segítségével)
├── HelperFunctions/     # Segédfüggvények (pl. ikonfordítás, nap nevek lekérése)
├── App.tsx              # Fő alkalmazáskomponens
├── main.tsx             # Belépési pont az alkalmazáshoz
```