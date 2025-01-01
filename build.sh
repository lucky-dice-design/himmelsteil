#!/bin/bash

# Hugo-Projekt bauen
hugo --minify

# Generierten Ordner verschieben
rsync -av --delete public/ /var/www/vhosts/himmelsteil.com/httpdocs/

