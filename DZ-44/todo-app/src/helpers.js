export function generateId() {
  return Math.floor(Math.random() * 100000) + new Date().getMilliseconds() + Math.floor(Math.random() * 1000);
}
