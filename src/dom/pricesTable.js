
const TABLE = document.getElementById('assets-table');
const LAST_UPDATE = document.getElementById('last-update-box');

const lastUpdate = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 15 )
    const [, dateString] = now
        .toLocaleDateString(`es-ES`, { weekday: 'long', month: 'short', day: 'numeric' })
        .split(',');
    const hour = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
    LAST_UPDATE.innerHTML = `<p><b>Actualizado</b>: ${dateString} ${hour} </p>`;
};

const buildRow = (asset) => {
    if (asset) {
        return `
        <tr>
            <td class="table__top-left">${asset.asset_id}</td>
            <td class="table__top-right table__right">$ ${asset.price_usd?.toFixed(2) || '...'}
              <span class="trending-icon"></span>
            </td>
       </tr>
      `;
    }
};

const buildTable = (rows) => {
    TABLE.innerHTML = `
        <tbody>
            ${rows}
        </tbody>
    `;
};

export const drawPriceTable = (prices) => {
    if (prices) {
        console.log('pricew', prices);
        const rows = prices.map((asset, i) => buildRow(asset, i, prices.length)).join('');
        buildTable(rows);
        lastUpdate();
    }
};
