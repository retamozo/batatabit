const SECTION = document.getElementById('benefit-cards-container');

export async function drawBenefitsSection(data: Benefit[]) {
    if (data) {
        drawSection(data);
    }
}

const drawSection = (data: Benefit[]) => {
    console.log('data', data);
    SECTION.innerHTML = `
             ${data.map((card) => getBenefitCard(card)).join('')}
     `;
};

const getBenefitCard = ({ body, iconPath, title }: Benefit) => {
    const card = `
    <article class="benefit-card--container">
        <img src="${iconPath}" alt="${title}"/>
        <p class="benefit-card--title">${title}</p>
        <p class="benefit-card--body">${body}</p>
   </article>
    `;
    return card;
};
