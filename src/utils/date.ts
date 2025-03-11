export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
}
