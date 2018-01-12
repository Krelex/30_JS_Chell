 const panels = document.querySelectorAll('.panel');
    for (var i=0 ; i < panels.length ; i ++) {
    panels[i].addEventListener("mouseenter", open) ;
    panels[i].addEventListener("mouseleave", close) ;
  }
    const item = "open-active open";

    function open () {
      this.classList.add("open-active");
      this.classList.add("open");
    }

    function close () {
      this.classList.remove("open-active");
      this.classList.remove("open");
    }