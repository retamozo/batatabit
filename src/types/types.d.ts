type Benefit = {
    iconPath: URL;
    title: string;
    body: string
}

type Subscription = {
    title: string;
    amount: string;
    saving_message: string;
    isRecommended?: boolean;
}

type Coins = 'BTC' | 'ETH' | 'BNB' | 'XRP' | 'DOGE' | 'ADA' | 'MATIC' | 'DOT';
