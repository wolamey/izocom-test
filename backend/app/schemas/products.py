from pydantic import BaseModel


class ProductRead(BaseModel):
    id:str
    title:str
    slug:str

class ProductResponse(BaseModel):
    data:ProductRead

class PaginationMeta(BaseModel):
    total:int
    page:int
    limit:int

class ProductListResponse(BaseModel):
    data: list[ProductRead]
    meta:PaginationMeta
