from fastapi import FastAPI
from app.core.config import settings
from app.api.public.products import router as products_router
app=FastAPI(title=settings.app_name)
app.include_router(products_router)

@app.get("/health/live")
def health_live():
    return{"status": "ok",
        "service": "izocom-api"}
