const input = document.querySelectorAll('.controls input');
    const pitanje = document.documentElement;
    console.log(pitanje);
    function update () {
      console.log(this.id);
      const dodatak = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + dodatak); 
    }

    input.forEach(input => input.addEventListener('change', update));
    input.forEach(input => input.addEventListener('mousemove', update));
