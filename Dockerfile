FROM node:latest

WORKDIR /usr/DCrawler

COPY package.json tsconfig.json ./

RUN npm install

COPY src/ src/