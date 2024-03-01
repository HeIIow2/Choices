#!/bin/bash

rm -r "/home/fname/wwwroot/profairs/control/src/static/plugins/choices.js/public/assets/scripts"
mkdir "/home/fname/wwwroot/profairs/control/src/static/plugins/choices.js/public/assets/scripts"

npm run build

cp public/assets/scripts/*.js '/home/fname/wwwroot/profairs/control/src/static/plugins/choices.js/public/assets/scripts'
