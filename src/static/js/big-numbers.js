class BigNumbers {

  constructor() {
    this.first = "";
    this.second = "";
    this.step = 10;
  }

  sum() {
    const first = this.getArray(this.first),
      second = this.getArray(this.second);
    let res = [];

    for( let i=0, fL=first.length, sL=second.length; ((i < fL) || (i < sL)); i++ ) {
      const val = parseInt(first[i] || 0) + parseInt(second[i] || 0);
      res.push(val);
    }
    return res.join("");
  }

  cleanVal(val=""){
    return (val + "").replace(/\D+/g,"");
  }

  getArray(val="") {
    return this.cleanVal(val).split("");
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const firtsInp = document.getElementById("first-number"),
    secondInp = document.getElementById("second-number"),
    resBox = document.getElementById("numbers-result");
  if(!firtsInp || !secondInp || !resBox){ return; }
  let bigNumbers = new BigNumbers();

  function calc(){
    bigNumbers.first = firtsInp.value;
    bigNumbers.second = secondInp.value;
    resBox.innerHTML = bigNumbers.sum();
  };
  calc();

  [firtsInp, secondInp].forEach( (inp) => {
      inp.addEventListener("input", () => {
          calc();
          inp.value = bigNumbers.cleanVal(inp.value);
      });
  });
});
