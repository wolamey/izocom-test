# --- Этап 1: Сборка ---
FROM node:20-alpine AS build

WORKDIR /app

# Копируем манифесты отдельно — для кэширования слоя с зависимостями
COPY package.json package-lock.json* ./

# Чистая установка зависимостей (быстрее и воспроизводимее, чем npm install)
RUN npm ci

# Копируем остальной код
COPY . .

# TypeScript-проверка + сборка (обычно vite build сам вызывает tsc -b)
RUN npm run build

# --- Этап 2: Раздача статики ---
FROM nginx:alpine

# Заменяем дефолтный конфиг на свой (для SPA-роутинга)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранные файлы
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]