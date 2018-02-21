# React start-app

Et enkelt skall for å kjøre opp en React-app

## Dette må du installere for å bygge og kjøre:
- Node.js

## Installer alle avhengigheter
- Installer avhengigheter ved å stå i rotmappa og skrive `mvn install` i terminalen

## For å kjøre frontend
- Kjør `npm start` fra rotmappa/samme sted som webpack.config.js ligger for å kjøre opp webpack-dev-server, for kontinuerlig bygging ved hver lagring og for oppsett av config.

Åpne applikasjonen på: http://localhost:8080/webpack-dev-server/

- Sett opp eslint-plugin i din IDE for ekstra hjelp med å holde javascripten din ren og pen. Sett opp eslint-plugin i din favoritt-IDE med vedlagt eslint-konfigurasjon.
  - Gå inn på Settings -> Languages & Framworks -> JavaScript -> Code Quality Tools -> ESLint
  - Huk av `Enable`. 
  - Sett `ESLint package` til å peke på estlint-mappa i node_modules `<sti til node_modules>/eslint/`
  - Sett `Configuration file` til å peke på vedlagt eslint-konfigurasjon `<sti prosjekt-mappa>/.eslintrc`

