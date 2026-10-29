В папке `backend` находится API на FastAPI с PostgreSQL,
SQLAlchemy async и Alembic.

Инструкция запуска и проверки: Из папки backend:
1. Создать .env по образцу .env.example.
2. Выполнить docker compose -f compose.yaml up -d --build --wait.
3. Убедиться, что db и api имеют статус Healthy.
4. Проверить /docs и /health/live.
5. Проверить /health/ready — 200 при работающей базе.
6. Остановить db — /health/ready возвращает 503.
7. Запустить db — /health/ready снова возвращает 200.
8. Проверить список товаров, поиск, пагинацию и карточки.
9. Проверить неизвестный slug — 404, page=0 — 422.
10. Выполнить:
    docker compose -f compose.yaml exec api python -m alembic current.

Текущий GitHub Actions workflow проверяет и разворачивает фронтенд.
Бэкенд запускается отдельно по инструкции.
