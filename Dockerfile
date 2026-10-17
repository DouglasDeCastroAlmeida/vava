# Stage 1: Build the React application with Vite for root domain
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies cleanly
COPY package*.json ./
RUN npm ci

# Copy source code and build for custom domain (root base '/')
COPY . .
RUN npm run build:hostinger

# Stage 2: Serve static files with Caddy (automatic SSL & gzip/zstd)
FROM caddy:alpine

COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /usr/share/caddy

EXPOSE 80 443 443/udp

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
