FROM node:17.3.0

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY ./ ./

RUN npx @nestjs/cli build

CMD ["node", "dist/main.js"]