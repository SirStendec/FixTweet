export const sanitizeText = (text: string) => {
  return text
    .replace(/"/g, '&#34;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

export const unescapeText = (text: string) => {
  return text
    .replace(/&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
};

export const truncateWithEllipsis = (str: string, maxLength: number): string =>
  str.length > maxLength ? str.substring(0, maxLength - 1) + '…' : str;

const numberFormat = new Intl.NumberFormat('en-US');

export const formatNumber = (num: number) => numberFormat.format(num);
