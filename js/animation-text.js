const options = {
  strings: ["\u00A0Data Scientist | Data Analyst | Python Developer\u00A0"], // agregamos espacios en blanco al inicio y al final
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
  startDelay: 2000,
  preStringTyped: function() {
    // removemos el primer espacio en blanco antes de empezar a escribir
    document.getElementById('typed-text').innerHTML = document.getElementById('typed-text').innerHTML.slice(1);
  },
  onLastStringBackspaced: function() {
    // agregamos un espacio en blanco al final después de borrar la última palabra
    document.getElementById('typed-text').innerHTML = document.getElementById('typed-text').innerHTML + "\u00A0";
  }
};

const typed = new Typed('#typed-text', options);
