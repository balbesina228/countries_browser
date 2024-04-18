from fastapi import FastAPI

from router import router as router_countries

app = FastAPI()

app.include_router(router_countries)
