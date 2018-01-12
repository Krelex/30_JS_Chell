   const panels = document.querySelectorAll('.panel');
    for (var i=0 ; i < panels.length ; i ++) {
    panels[i].addEventListener("click", toggle) ;
  }
    
    function toggle () {
      this.classList.toggle("open-active");
      this.classList.toggle("open");
    }