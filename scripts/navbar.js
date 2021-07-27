window.onscroll = () => {
  const nav = document.querySelector('#navbar');
  const b1 = document.querySelector('#b1');
  const b2 = document.querySelector('#b2');
  const b3 = document.querySelector('#b3');
  const b4 = document.querySelector('#b4');
  if(this.scrollY <= 10) {
    nav.className = '' ;
    b1.className = '';
    b2.className = '';
    b3.className = '';
    b4.className = '';
  }
  else if(this.scrollY <= 1400){
    nav.className = 'scroll';
    b1.className = 'scroll';
    b2.className = 'scroll';
    b3.className = 'scroll';
    b4.className = 'scroll';

  }
  else {
    nav.className = 'scroll';
    b1.className = 'scroll2';
    b2.className = 'scroll2';
    b3.className = 'scroll2';
    b4.className = 'scroll2';
  }
};
