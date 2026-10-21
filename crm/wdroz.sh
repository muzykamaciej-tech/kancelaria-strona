#!/usr/bin/env bash
# Wdrożenie CRM do Google Apps Script (clasp 2.x).
# Pierwsze uruchomienie: logowanie do Google, nowy projekt „CRM Kancelarii”, pierwsze wdrożenie.
# Kolejne: wgrywa zmiany i aktualizuje TO SAMO wdrożenie, więc adres aplikacji się nie zmienia.
# Wymaga raz: https://script.google.com/home/usersettings → „Google Apps Script API: włączone”.
set -euo pipefail
cd "$(dirname "$0")"
CLASP="npx --yes @google/clasp@2.4.2"

node dev/test-server.mjs

[ -f "$HOME/.clasprc.json" ] || $CLASP login
[ -f .clasp.json ] || $CLASP create --type standalone --title "CRM Kancelarii" --rootDir src

$CLASP push -f

if [ -s .deployment-id ]; then
  $CLASP deploy -i "$(cat .deployment-id)" -d "$(date '+%Y-%m-%d %H:%M')"
else
  out=$($CLASP deploy -d "pierwsza wersja")
  echo "$out"
  echo "$out" | grep -oE 'AKfy[A-Za-z0-9_-]+' | head -1 > .deployment-id
fi
echo
echo "Aplikacja: https://script.google.com/macros/s/$(cat .deployment-id)/exec"
