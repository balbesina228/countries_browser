from aiohttp import ClientSession


class HTTPClient:
    def __init__(self, base_url: str, ):
        self._session = ClientSession(
            base_url=base_url,
        )


class RCHTTPClient(HTTPClient):
    async def get_all_countries(self):
        async with self._session.get("/v3.1/all") as resp:
            result = await resp.json()
            return result

    async def get_country_by_name(self, country_name: str):
        async with self._session.get(
            f"/v3.1/name/{country_name}"
        ) as resp:
            result = await resp.json()
            return result
