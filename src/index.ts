import { drawBenefitsSection } from './dom/benefitsRow';
import { drawPriceTable } from './dom/pricesTable';
import drawSubscriptionSection from './dom/subscriptionSection/subscriptionsSection';
import { getBenefits } from './services/benefits';
import { getPrices } from './services/prices';
import { getSubscriptions } from './services/subscriptions';

const analytics = () => ({}); // todo

window.addEventListener('load', async () => {
  await Promise.allSettled([
    getPrices().then(drawPriceTable),
    getBenefits().then(drawBenefitsSection),
    getSubscriptions().then(drawSubscriptionSection),
  ])
    .catch(console.log)
    .finally(analytics);
});
