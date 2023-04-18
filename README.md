# API

## Docker Desktop

Per poder usar l'api amb la base de dades primer necesites engegar el Docker Desktop.
També has de crear un fitxer `.env` que contigui les següents variables:
- `ACCESS_TOKEN_SECRET='secret'`
- `REFRESH_TOKEN_SECRET='secret'`
- `SERVER_PORT = 4000`

- `POSTGRES_DB=database`
- `POSTGRES_USER=username`
- `POSTGRES_PASSWD=password`
- `PGADMIN_EMAIL=email@email.com`
- `PGADMIN_PASSWD=password`
- `POSTGRES_HOST='127.0.0.1'`
- `POSTGRES_PORT=5432`

Seguidament has d'executar la comanda `docker-compose build` i `docker-compose up -d` i esperar a que s'engegin els containers.

Finalment ja podràs executar la comanda `npm start`.

## Accedir al pgadmin
Seguidament hauràs de crear la base de dades pel que et conectaràs al pgadmin del docker al link `http://localhost:5050/`
El nom d'usuari i la contrasenya depenen del fitxer `.env` que haguis creat a la carpeta docker.
Despres per afegir el servidor la connexio és `host.docker.internal`, el nom d'usuari i contrasenya que també estigui al fitxer `.env`
