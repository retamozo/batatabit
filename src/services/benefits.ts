import { BENEFITS_DATA } from './const';

export async function getBenefits(): Promise<Benefit[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(BENEFITS_DATA), 500);
  });
}
