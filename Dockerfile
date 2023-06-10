FROM node:16.17.0

WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY src /usr/app/src
COPY public /usr/app/public
COPY .babelrc /usr/app/.babelrc

RUN npm install -g npm@9.6.4
RUN npm install
RUN npm run build

RUN npm install --prefix /usr/app/public
RUN npm run build --prefix /usr/app/public