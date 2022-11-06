FROM node:18.10.0-alpine3.15
WORKDIR /usr/app

COPY src ./src
COPY package.json .
COPY .babelrc .

RUN npm install 
RUN npm run build