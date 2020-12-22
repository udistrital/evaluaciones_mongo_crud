FROM node:14 AS builder
WORKDIR /
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:14-alpine

WORKDIR /

COPY --from=builder ./node_modules ./node_modules
COPY --from=builder dist/ .

CMD [ "node",  "main" ]
