export function humanDate(date, options, lang) {
  if (!date) {
    return 'Invalid Date';
  }
  if (date === 'currently') {
    return date;
  }
  return new Date(date).toLocaleDateString(lang || 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  });
}
