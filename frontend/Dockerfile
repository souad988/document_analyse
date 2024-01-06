FROM node:20.10-alpine

WORKDIR /app/frontend/

COPY package*.json ./

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . /app/frontend/

CMD ["npm", "start"]