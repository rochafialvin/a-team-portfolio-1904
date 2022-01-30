class ABC {
  state = { first: "pertama" };

  intro() {
    console.log(this.state);
  }
}

const x = new ABC();
x.intro();
console.log(x.state);
