import {
  getPrices,
  getBenefits,
  getSubscriptions,
} from "../src/services/index.js";
import { drawPriceTable } from "./dom/pricesTable.js";
import { drawBenefitsSection } from "./dom/benefits.js";
import drawSubscriptionSection from "./dom/subscriptionsSection.js";

import { EXAMPLE_MARKET } from "./const.js";

window.addEventListener("load", async () => {
  await Promise.all([
    getPrices().then(drawPriceTable),
    getBenefits().then(drawBenefitsSection),
    getSubscriptions().then(drawSubscriptionSection),
  ]).catch(console.log);
});
