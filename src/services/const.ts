// TODO: Investigate why this refusese to work
// const getImgUrl = (assetName: string) => {
//     return new URL(`/src/public/static/icons/${assetName}.svg`, import.meta.url);

// }

export const BENEFITS_DATA: Benefit[] = [
    {
        iconPath: new URL(`/src/public/static/icons/clock.svg`, import.meta.url),
        title: "Tiempo real",
        body: "Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento."
    },
    {
        iconPath: new URL("../public/static/icons/eye.svg", import.meta.url),// getIcon("eye.svg"),
        title: "No hay tasas escondidas",
        body: "Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo."
    },
    {
        iconPath: new URL("../public/static/icons/dollar-sign.svg", import.meta.url),// getIcon("dollar-sign.svg"),
        title: "Compara monedas",
        body: "No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual."
    },
    {
        iconPath: new URL("../public/static/icons/check-circle.svg", import.meta.url),// getIcon("check-circle.svg"),
        title: "Información confiable",
        body: "Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan."
    }
]

export const EXAMPLE_MARKET = [
    {
        asset_id: 'ETH',
        name: 'ETH',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:29.8637020Z',
        data_quote_end: '2022-06-22T15:31:02.4670000Z',
        data_trade_start: '2021-11-04T16:34:30.1457420Z',
        data_trade_end: '2022-06-22T15:25:45.4930000Z',
        data_symbols_count: 8085,
        volume_1hrs_usd: 121967153.98,
        volume_1day_usd: 3021493100435.78,
        volume_1mth_usd: 220118158545857.56,
        price_usd: 1274.9869764227174,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
    {
        asset_id: 'BNB',
        name: 'BNB',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:30.6110000Z',
        data_quote_end: '2022-06-22T15:30:34.7990000Z',
        data_trade_start: '2021-11-04T16:34:30.5460000Z',
        data_trade_end: '2022-06-22T15:26:19.5180000Z',
        data_symbols_count: 20,
        volume_1hrs_usd: 480.67,
        volume_1day_usd: 372614.79,
        volume_1mth_usd: 13657224.19,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
    {
        asset_id: 'DOGE',
        name: 'DOGE',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:29.9257500Z',
        data_quote_end: '2022-06-22T15:30:15.9017988Z',
        data_trade_start: '2021-11-04T16:34:29.9257500Z',
        data_trade_end: '2022-06-22T15:21:53.5948340Z',
        data_symbols_count: 19,
        volume_1hrs_usd: 1189106.38,
        volume_1day_usd: 52676616.15,
        volume_1mth_usd: 1285936599.98,
        price_usd: 0.086195,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
    {
        asset_id: 'ADA',
        name: 'ADA',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:29.7692950Z',
        data_quote_end: '2022-06-22T15:30:15.7046748Z',
        data_trade_start: '2021-11-04T16:34:31.0038830Z',
        data_trade_end: '2022-06-22T15:27:02.5070000Z',
        data_symbols_count: 30,
        volume_1hrs_usd: 534465.04,
        volume_1day_usd: 26614224.7,
        volume_1mth_usd: 505300164.84,
        price_usd: 0.3018492414138685,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
    {
        asset_id: 'XRP',
        name: 'XRP',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:30.3520000Z',
        data_quote_end: '2022-06-22T15:29:40.4814089Z',
        data_trade_start: '2021-11-04T16:44:06.0100000Z',
        data_trade_end: '2022-06-22T15:26:38.0610000Z',
        data_symbols_count: 35,
        volume_1hrs_usd: 302909.34,
        volume_1day_usd: 6222230.39,
        volume_1mth_usd: 176761160.26,
        price_usd: 0.117612348,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
    {
        asset_id: 'MATIC',
        name: 'MATIC',
        type_is_crypto: 1,
        data_quote_start: '2021-11-04T16:34:29.8784130Z',
        data_quote_end: '2022-06-22T15:26:38.2170520Z',
        data_trade_start: '2021-11-04T16:34:29.8784130Z',
        data_trade_end: '2022-06-22T15:13:03.1833020Z',
        data_symbols_count: 21,
        volume_1hrs_usd: 886353183.66,
        volume_1day_usd: 8891575114.71,
        volume_1mth_usd: 402232570238.5,
        price_usd: 0.8853545939158859,
        data_start: '2021-11-04',
        data_end: '2022-06-22',
    },
];

export const SUBSCRIPTIONS: Subscription[] = [
    {
        title: "Pago Anual",
        amount: "5",
        saving_message: "Plan básico para mantenerte informado"
    },
    {
        isRecommended: true,
        title: "Pago Anual",
        amount: "49",
        saving_message: "*Ahorras $129 comparado al plan mensual."
    },
    {
        title: "Pago Anual",
        amount: "99",
        saving_message: "*Ahorras $999+ comparado al plan anual."
    },
    // {
    //     title: "Pago Anual",
    //     amount: "99",
    //     saving_message: "*Ahorras $999+ comparado al plan anual."
    // }, {
    //     title: "Pago Anual",
    //     amount: "99",
    //     saving_message: "*Ahorras $999+ comparado al plan anual."
    // }, {
    //     title: "Pago Anual",
    //     amount: "99",
    //     saving_message: "*Ahorras $999+ comparado al plan anual."
    // }, {
    //     title: "Pago Anual",
    //     amount: "99",
    //     saving_message: "*Ahorras $999+ comparado al plan anual."
    // },
]