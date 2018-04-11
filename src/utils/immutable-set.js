export function set(object, key, value) {
  return {
    ...object,
    [key]: value
  };
};

export function setIn(object, path, value) {
  if(path.length === 1) {
    return set(object, path[0], value);
  }

  return {
    ...object,
    [path[0]]: setIn(object[path[0]], path.slice(1), value)
  };
};