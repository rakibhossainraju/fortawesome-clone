export function debounce(func, delay, loadingSetter) {
  let timeoutId;

  return function (...args) {
    if (loadingSetter) loadingSetter(true);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
      if (loadingSetter) loadingSetter(false);
    }, delay);
  };
}
