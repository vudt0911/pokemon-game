export function filterObject(obj, predicate) {
  const newObj = Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

  return newObj;
}
