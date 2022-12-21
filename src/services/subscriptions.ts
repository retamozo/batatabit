import { SUBSCRIPTIONS } from "./const";

export async function getSubscriptions(): Promise<Subscription[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(SUBSCRIPTIONS), 500);
    });
}
