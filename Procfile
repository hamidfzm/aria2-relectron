react: BROWSER=none yarn react
aria2: aria2c --enable-rpc --rpc-listen-all=true --rpc-allow-origin-all
electron: wait-on tcp:localhost:6800 http://localhost:5000 && ELECTRON_START_URL=http://localhost:5000 yarn electron
