"use server";

export async function getBnrRate() {
  try {
    const res = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json', { next: { revalidate: 86400 } });
    if (!res.ok) return 5.24;
    const json = await res.json();
    if (json && json.eur && json.eur.ron) {
      return json.eur.ron;
    }
    return 5.24;
  } catch (error) {
    return 5.24;
  }
}
