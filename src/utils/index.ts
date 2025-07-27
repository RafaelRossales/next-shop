export function currencyFormatter(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function removeCurrencySymbol(value: string): string {
  return value.replace(/[^0-9.,]/g, "").replace(",", ".");
}

export function parsePriceToCents(price: string): number {
  const numeric = parseFloat(removeCurrencySymbol(price));
  return Math.round(numeric * 100);
}

export function addPrice(a: number, b: number): number {
  const resultInCents = Math.round(a * 100) + b;
  return resultInCents / 100;
}
