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

export function log2(num) {
  return Math.log(num) / Math.log(2);
}

export function lineId(idx) {
  return Math.ceil(log2(idx + 2)) - 1;
}

export function idx2ab(idx) {
  const a = lineId(idx);
  const b = idx + 1 - Math.pow(2, a);
  return [a, b];
}

export function getParentId(idx) {
  return Math.floor((idx - 1) / 2);
}

export function getChildIds(idx) {
  return [1, 2].map((i) => idx * 2 + i);
}
