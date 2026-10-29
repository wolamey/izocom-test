import asyncio

from fastapi import HTTPException
from sqlalchemy import text
from sqlalchemy.exc import SQLAlchemyError

from app.db.session import engine

from fastapi import FastAPI
from app.core.config import settings
from app.api.public.products import router as products_router
app=FastAPI(title=settings.app_name)
app.include_router(products_router)

@app.get("/health/live")
def health_live():
    return{"status": "ok",
        "service": "izocom-api"}
@app.get(
    "/health/ready",
    tags=["Health"],
    responses={
        503: {"description":"База данных недоступна"},
    },
)
async def health_ready():
    try:
        async with asyncio.timeout(5):
            async with engine.connect() as connection:
                await connection.execute(text("Select 1"))
    except (SQLAlchemyError,OSError,TimeoutError):
        raise HTTPException(
            status_code=503,
            detail="База данных недоступна",
        ) from None

    return{
        "status":"ok",
        "databse":"ok",
    }
