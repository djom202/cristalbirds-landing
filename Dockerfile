FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app ./

ENV NODE_ENV=production
EXPOSE 5173

CMD ["npm", "start"]
