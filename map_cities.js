
var cities = [
  { name: 'LA', temperature: 60.0},
  { name: 'Atl', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'NYC', temperature: 80.0 }
];
function bytemp(n) {
  return n.name;
}
var  new_arr = cities.map(bytemp);
console.log(new_arr);
