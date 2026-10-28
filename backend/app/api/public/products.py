from fastapi import APIRouter,HTTPException,Query

from app.schemas.products import (
    ProductListResponse,
    ProductResponse,
)

router=APIRouter(
    prefix="/api/v1/public/products",
    tags=["Продукция"],
)

products=[
    {
        "id":"pipe-1",
        "title":"Труба",
        "slug":"pipe-1",
    },
    {
        "id":"fitting-1",
        "title":"Фитинг",
        "slug":"fitting-1",
    },
    {
        "id":"pipe-2",
        "title":"Трубки",
        "slug":"pipe-2",
    }
]

@router.get("",
    response_model=ProductListResponse,)
def get_products(
    page:int=Query(default=1,ge=1),
    limit:int=Query(default=10,ge=1,le=100),
    q:str = Query(default="",max_length=200),
):
    query=q.strip().casefold()

    filtered_products=[
        product
        for product in products
        if query in product["title"].casefold()
    ]
    start=(page-1)*limit
    end=start+limit
    return{
        "data":filtered_products[start:end],
        "meta":{
            "total":len(filtered_products),
            "page":page,
            "limit":limit,
        },
    }
@router.get("/{slug}",
    response_model=ProductResponse,
    responses={
        404:{"description":"Товар не найден"},
    },
)
def get_product(slug: str):
    for product in products:
        if product["slug"]==slug:
            return{"data": product}

    raise HTTPException(
        status_code=404,
        detail="Товар не найден"
        )
