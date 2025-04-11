FROM klakegg/hugo:latest

WORKDIR /src

# Kopiere die Hugo-Dateien in das Docker-Image
COPY . /src/

# Baue das Hugo-Projekt
RUN hugo -v

# Stelle den Server bereit, um die Dateien zu bedienen
CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "http://himmelsteil.com"]
