import { Subscription, SUBSCRIPTIONS } from '../../services/const';
import { PLANS_CONTAINER } from './const';
import { observePlansScrollbar } from './highlightPlans';

function drawSection(data = SUBSCRIPTIONS) {
  if (data) {
    PLANS_CONTAINER.innerHTML = `${data.map((data, i) => buildCard(data, i)).join('')}`;
  }
}

const buildCard = (plan: Subscription, i: number) => {
  const cards = `
    <div class="card-container" tabindex=${i} >
    ${plan.isRecommended ? `<div class="highlight-box">Recomendado</div>` : ''}
    <div class="white-box">
      <div class="plan-card--price-box">
        <p class="plan-card--floating-symbol">$</p>
        <p class="plan-card--payment-type">${plan.title}</p>
        <p class="plan-card--price">${plan.amount}</p>
      </div>
      <p class="plan-card--info">${plan.saving_message}</p>
      <button class="plan-cta">Escoger este <span class="plan-cta--icon"></span></button>
    </div>
  </div>
</section>
    `;

  return cards;
};

function main() {
  drawSection()
  observePlansScrollbar()
}

export default main