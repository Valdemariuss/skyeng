class Modal {

  constructor() {
    const box = document.getElementById("modal") || null;
    if(!box){ return }
    this.box = box;
    this.contentBox = this.box.getElementsByClassName("modal__content")[0];
    this.closeBut = this.box.getElementsByClassName("modal__close")[0];
    this._init();
  }

  _init() {
    this.box.addEventListener("click", (e) => {
        e.target === this.box ? this.closeBut.click() : "";
    });

    if(this.contentBox.innerHTML.length < 10){
      this.closeBut.click();
    }
  }

  set(html = "") {
    if(!this.contentBox){ return }
    this.contentBox.innerHTML = html;
  }

}

document.addEventListener("DOMContentLoaded", () => {
    window.Modal = new Modal();
});