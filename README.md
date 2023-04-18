# API

## Docker Desktop

Per poder usar l'api amb la base de dades primer necesites engegar el Docker Desktop.
També has de crear un fitxer `.env` dins la carpeta docker que contigui les següents variables:
- `POSTGRES_DB=database`
- `POSTGRES_USER=username`
- `POSTGRES_PASSWD=password`
- `PGADMIN_EMAIL=email@email.com`
- `PGADMIN_PASSWD=password`

Finalment ja podràs executar la comanda `npm start`.

## Accedir al pgadmin
Seguidament hauràs de crear la base de dades pel que et conectaràs al pgadmin del docker al link `http://localhost:5050/`
El nom d'usuari i la contrasenya depenen del fitxer `.env` que haguis creat a la carpeta docker.
Despres per afegir el servidor la connexio és `host.docker.internal`, el nom d'usuari i contrasenya que també estigui al fitxer `.env`

## Crear les taules
Les taules es creen automaticament a partir dels fitxer dins la carpeta docker.
