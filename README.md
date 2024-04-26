# Countries Browser

## Description
Countries Browser is a web application that provides information about countries, including their capitals, currencies, and Google Maps links. When a country is clicked, it is cached with async_lru, resulting in faster loading times for subsequent visits.

![Example image](https://github.com/balbesina228/countries_browser/assets/109335756/5e3ce9dd-e918-435c-824b-ef2c80b710f6)


## Steps to launch
1. Clone this project (it has only one branch)
2. Open a terminal
3. Install the requirements: `pip install -r requirements.txt` for backend and `npm i` for frontend
4. Navigate to the backend directory: `cd .\backend\` and run: `uvicorn src.main:app`
5. Open another terminal
6. Navigate to the frontend directory: `cd .\frontend\` and run: `npm run dev`
7. Access the application at: [http://localhost:5173](http://localhost:5173)
8. Enjoy!

## Tech stack
### Backend
- fastApi
- pydantic
- async-lru
- aiohttp
### Frontend
- react
- vite
- axios
- tailwind
- antd

## Acknowledgements
Special thanks to [REST Countries](https://restcountries.com/) for providing the API.
