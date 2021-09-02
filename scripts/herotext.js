window.onscroll = () => {
    const hero1 = document.querySelector('#hero1');
    if(this.scrollY <= 10) {
      hero1.className = '' ;
    }
    else {
      hero1.className = 'scroll2';
    }
  };
  