# =========================
# Stage 1 - Backend (Node.js)
# =========================
FROM node:20 AS backend

WORKDIR /app
COPY back/package*.json ./
RUN npm install
COPY back/. .
EXPOSE 3000
CMD ["npm", "start"]

# =========================
# Stage 2 - Frontend (Nginx)
# =========================
FROM nginx:stable-alpine AS frontend

RUN rm -rf /usr/share/nginx/html/*
COPY front/. /usr/share/nginx/html
EXPOSE 80
