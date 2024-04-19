from fastapi import APIRouter

from src.init import rc_httpclient

router = APIRouter(
    prefix="/countries"
)


@router.get("")
async def get_countries():
    return await rc_httpclient.get_all_countries()


@router.get("/{country_name}")
async def get_country_by_name(country_name: str):
    return await rc_httpclient.get_country_by_name(country_name)
