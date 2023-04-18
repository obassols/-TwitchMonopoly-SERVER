FROM postgres:latest
COPY /docker/*.sql /docker-entrypoint-initdb.d/