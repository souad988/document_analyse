FROM node:20.10-alpine

WORKDIR /app/frontend/

COPY package.json /app/frontend/

RUN npm install

COPY . /app/frontend/

CMD ["npm", "start"]