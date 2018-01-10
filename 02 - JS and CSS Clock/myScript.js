    const secPointer = document.querySelector('.second-hand');
    const minPointer = document.querySelector('.min-hand');
    const hPointer = document.querySelector('.hour-hand');

    function setDate (){ 

      const time = new Date ();
      const sec = time.getSeconds();
      const min = time.getMinutes();
      const hour = time.getHours();

      const secDeg = (sec / 60) * 360 + 90;
      const minDeg = (min / 60) * 360 + 90;
      const hDeg = (hour / 12) * 360 + 215 ;
    
      secPointer.style.transform = `rotate(${secDeg}deg)`;
      minPointer.style.transform = `rotate(${minDeg}deg)`;
      hPointer.style.transform = `rotate(${hDeg}deg)`;
      
    }

    setInterval(setDate, 1000);

