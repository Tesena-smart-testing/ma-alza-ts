#!/bin/bash

echo "Node.js version:"
node --version

echo "NPM version:"
npm --version

echo "Switching to rethinkdb_data folder"
cd rethinkdb_data 

echo "Starting rethinkdb"
rethinkdb > /dev/stdout 2>&1 & 

echo "Starting adb server"
adb start-server > /dev/stdout 2>&1 &

echo "starting stf local"
stf local --public-ip 127.0.0.1