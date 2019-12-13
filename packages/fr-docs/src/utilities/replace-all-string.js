export default (value, source) => {
  const from = new RegExp(source.from, 'g');
  const { to } = source;

  return value.replace(from, to);
};
