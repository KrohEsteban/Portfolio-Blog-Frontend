FROM node:20 AS builder
WORKDIR /app/
COPY . .
RUN yarn global add npm-check-updates
RUN yarn install
RUN yarn run build
EXPOSE 3000

FROM builder as dev
ENV NODE_ENV=development
COPY --from=builder /app/ /app/
CMD yarn dev

FROM builder as prod
ENV NODE_ENV=production
COPY --from=builder /app/ /app/
CMD yarn start
