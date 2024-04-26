# syntax=docker/dockerfile:1

FROM ubuntu:jammy AS base

# Install required dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    wget \
    curl \
    build-essential \
    cmake \
    yasm \
    pkg-config \
    libprotobuf-dev \
    protobuf-compiler \
    libzmq3-dev \
    graphicsmagick \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.12.2 | bash -
RUN apt-get update && apt-get install -y nodejs npm

# Install ADB
RUN apt-get update && apt-get install -y android-tools-adb

# Install RethinkDB
RUN echo "deb https://download.rethinkdb.com/repository/ubuntu-jammy jammy main" | tee /etc/apt/sources.list.d/rethinkdb.list
RUN wget -qO- https://download.rethinkdb.com/repository/raw/pubkey.gpg | apt-key add -
RUN apt-get update && apt-get install -y rethinkdb

# Install stf
RUN npm install -g @devicefarmer/stf

WORKDIR /app

# Clone stf repo and install all other npm deps
RUN git clone https://github.com/DeviceFarmer/stf.git 

WORKDIR /app/stf
RUN npm install

# add script for entrypoint and create dir for data
WORKDIR /app
COPY run.sh run.sh
RUN chmod +x run.sh
RUN mkdir rethinkdb_data

WORKDIR /app

# should start the server on http://localhost:7100
ENTRYPOINT [ "./run.sh" ]