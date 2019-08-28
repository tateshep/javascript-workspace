from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

from secrets import secret_key

url = 'https://pro-api.coinmarketcap.com/v1/exchange/quotes/latest?id=2,16&convert=USD,BTC,LTC,EUR'
parameters = {
    'start': '1',
    'limit': '100',
    'convert': 'USD'
}

headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': secret_key
}

session = Session()
session.headers.update(headers)

try:
    response = session.get(url, params=parameters)
    data = json.loads(response.text)
    print(data)
except (ConnectionError, Timeout, TooManyRedirects) as e:
    print(e)

# for item in data.keys():
#     print(item)