#!/bin/bash
set -x
nohup npm start &
sleep 1
echo $! > .pidfile
set +x
