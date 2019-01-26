function popStack(length) {
  return this.splice(0, length);
}

export function heap(obj) {
  const pool = [];
  let size = 1;
  let lastChunk = popStack.call(obj, size);
  while (lastChunk.length) {
    pool.push(lastChunk);
    size *= 2;
    lastChunk = popStack.call(obj, size);
  }
  return pool;
}

const hyphenateRE = /([^-])([A-Z])/g;
export const hyphenate = function(str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase();
};
