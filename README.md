# izocom-test

Сайт на React, TypeScript и Vite. В production статическая сборка обслуживается Nginx.
Маршрутизация использует HashRouter (`/#/products`), поэтому серверный SPA fallback не нужен.

## Локальная разработка

```bash
npm ci
npm run dev
```

Проверки перед деплоем: `npm run typecheck` и `npm run build`.

## Запуск на сервере

Нужны Docker Engine и Docker Compose v2 с поддержкой `up --wait` и `--wait-timeout`.
Из корня репозитория:

```bash
cp .env.example .env
# Укажите нужные значения в .env перед запуском.
docker compose config --quiet
docker compose up --build --detach --wait --wait-timeout 120 --remove-orphans
docker compose ps
```

Сайт доступен на порту `3006` сервера. Healthcheck проверяет HTTP-ответ Nginx;
команда запуска завершается с ошибкой, если контейнер не становится healthy.
Имя Compose-проекта — `izocom-test`, сервиса — `frontend`, образа — `izocom-test:latest`.
Node.js нужен только на этапе сборки образа.

Порт и адрес привязки задаются в `.env`. Оба значения обязательны; пример:

```dotenv
APP_BIND_ADDRESS=127.0.0.1
APP_PORT=3006
```

В `.env.example` используется `0.0.0.0:3006`. Если reverse proxy находится на том же
сервере, можно привязать порт к `127.0.0.1` и направить домен на
`http://127.0.0.1:3006`. HTTPS настраивается на внешнем reverse proxy.

Просмотр логов: `docker compose logs --tail=100 frontend`.

## GitHub Actions

Workflow `.github/workflows/deploy.yml` устанавливает зависимости через `npm ci`,
проверяет TypeScript, собирает фронтенд и проверяет Compose-конфигурацию.
Проверки выполняются для pull request в `main`, push в `main` и ручного запуска.
После успешных проверок push в `main` и ручной запуск из `main` выполняют деплой.
Из других веток ручной запуск выполняет только проверки.
Деплои выполняются последовательно, текущий деплой не отменяется новым запуском.

Настройки приложения хранятся в `.env`, который исключён из Git и Docker build context.
Файл `.env.example` нужно закоммитить: CI использует его для проверки Compose.
GitHub Actions Variables и Secrets для конфигурации приложения не используются.

| Переменная в `.env` | Значение в примере | Назначение |
| --- | --- | --- |
| `APP_PORT` | `3006` | Свободный порт сервера |
| `APP_BIND_ADDRESS` | `0.0.0.0` | Адрес привязки порта |

Перед первым деплоем создайте на сервере `/etc/izocom-test/.env` по образцу
`.env.example`, задайте значения и предоставьте пользователю deploy runner права
чтения файла. Этот файл хранится вне рабочей копии, поэтому checkout его не удалит.
Workflow явно передаёт его через `docker compose --env-file /etc/izocom-test/.env`.
При отсутствии файла или обязательных значений деплой завершится с ошибкой.
Для ручного запуска на сервере также передавайте этот `--env-file` во все команды Compose
либо используйте локальный `.env` в корне репозитория.

Группы runner заданы в workflow: `build` для CI и `regiuslab-prod` для деплоя.
GitHub выбирает runner до запуска шагов и чтения `.env`, поэтому имена групп
задаются непосредственно в `runs-on.group`.
Группы должны существовать и разрешать запуск workflow этого репозитория.
Build runner должен иметь Docker CLI с Compose v2, Node.js устанавливается workflow.
Deploy runner должен находиться на целевом сервере и иметь доступ к Docker Engine
и Docker Compose v2. При нескольких runner в deploy-группе все они должны
использовать один целевой Docker Engine.
Для установки npm-пакетов, GitHub Actions и базовых Docker-образов нужен доступ в сеть.
CI/CD не требует секретов или SSH: команды деплоя выполняет runner на сервере.

Сейчас форма заявки имитирует успешную отправку на клиенте. Серверного обработчика
заявок в этом проекте нет; его подключение — отдельная задача.
