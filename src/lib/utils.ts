export type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean } | ClassValue[]

export function cn(...inputs: any[]) {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ')
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
