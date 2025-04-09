FROM node:lts

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN apt-get update && apt-get upgrade

RUN npm install -g pnpm

RUN pnpm install

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]

