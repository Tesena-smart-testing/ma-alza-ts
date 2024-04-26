#!/bin/bash

echo "Node.js version:"
node --version
echo "NPM version:"
npm --version
echo "Switching to rethinkdb_data folder"
cd rethinkdb_data 
echo "Starting rethinkdb"
rethinkdb & 
echo "Starting adb server"
adb start-server & 
echo "starting stf local"
stf local --public-ip 127.0.0.1