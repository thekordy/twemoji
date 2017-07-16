FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY app.js /usr/src/app/
COPY package.json /usr/src/app/

EXPOSE 3000