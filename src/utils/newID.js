function newID(date) {
  const array = date.split('');
  const spliced = array.splice(2, 10);
  const filtered = spliced.filter(e => e !== '-');
  const id = filtered.join('');
  return id + '-' + Math.floor(Math.random() * 1000);
}

export default newID;
