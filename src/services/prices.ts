const { API_KEY, BASE_URL } = process.env;

const defaultCoins: Coins[] = ['BTC', 'ETH', 'BNB', 'XRP', 'DOGE', 'ADA', 'MATIC', 'DOT'];

export async function getPrices(coins = defaultCoins) {
    try {
        return fetch(`${BASE_URL}/quotes/latest?limit=${coins.length}&filter_asset_id=[${coins}]`, {
            headers: {
                'X-CoinAPI-Key': API_KEY,
            },
        }).then((res) => res.json());
    } catch (e) {
        console.error(e.message);
    }
}
