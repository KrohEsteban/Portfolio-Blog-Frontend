FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install -g npm-check-updates && \
    npm install && \
    npm run build
EXPOSE 3000

FROM builder as dev
ENV NODE_ENV=developer
CMD npm run dev


FROM builder as prod
ENV NODE_ENV=production
CMD npm run start
