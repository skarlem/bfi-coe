FROM node:17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

EXPOSE 4000

CMD ["npm", "start"]