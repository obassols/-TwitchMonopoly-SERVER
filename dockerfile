FROM postgres:latest
ENV POSTGRES_PASSWORD=oriolbn20
COPY *.sql /docker-entrypoint-initdb.d/