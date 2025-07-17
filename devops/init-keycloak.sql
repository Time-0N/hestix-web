CREATE USER keycloak WITH PASSWORD 'keycloakpassword';
CREATE DATABASE keycloak OWNER keycloak;
GRANT ALL PRIVILEGES ON DATABASE keycloak TO keycloak;
