# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Production
FROM node:18-alpine
LABEL maintainer="Karim Wael <kareemzwael@gmail.com>"
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "src/app.js"]