export function formatUrl(string) {
  return string.replace(/[']/g, '').replace(/[ ]/g, '-').toLowerCase();
}

export function formatCakeUrl(string) {
  return `/cakes/${formatUrl(string)}`;
}

export function formatCakeTitle(title) {
  return `${title} in Sunderland`;
}
