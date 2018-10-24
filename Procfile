react: BROWSER=none yarn react
aria2: touch tmp/session && aria2c --enable-rpc --pause=true --rpc-listen-all=true --rpc-allow-origin-all --save-session=tmp/session --input-file=tmp/session --force-save --file-allocation=none
electron: wait-on tcp:localhost:6800 http://localhost:5000 && ELECTRON_START_URL=http://localhost:5000 ELECTRON_DISABLE_SECURITY_WARNINGS=1 yarn electron
