import { BENEFITS_DATA, EXAMPLE_MARKET, SUBSCRIPTIONS } from "../const.js";

export async function getBenefits() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(BENEFITS_DATA), 500);
  });
}

export async function getPrices() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(EXAMPLE_MARKET);
    }, 500);
  });
}

export async function getSubscriptions() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(SUBSCRIPTIONS), 500);
  });
}
