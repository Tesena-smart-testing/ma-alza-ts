#!/bin/bash

cd rethinkdb_data && rethinkdb & adb start-server & stf local --public-ip 127.0.0.1