const app = "I don't do much."
var kittens = ["Milo","Otis","Garfield"];

function destructivelyPrependKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}