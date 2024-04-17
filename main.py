from fastapi import FastAPI

from http_client import RCHTTPClient

app = FastAPI()

rc_httpclient = RCHTTPClient(
    base_url="https://restcountries.com"
)


@app.get("/countries")
async def get_countries():
    return await rc_httpclient.get_all_countries()


@app.get("/countries/{country_name}")
async def get_country_by_name(country_name: str):
    return await rc_httpclient.get_country_by_name(country_name)
