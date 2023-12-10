window.onload = function() {
  const options = {
    strings: ["\u00A0Data Scientist 📊︱Python Developer 🐍︱ML/AI 🤖\u00A0"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    startDelay: 2000,
    preStringTyped: function() {
      const typedText = document.getElementById('typed-text');
      typedText.innerHTML = typedText.innerHTML.slice(1);
      typedText.classList.add('bold-typed-text'); // Agrega la clase para negrita
    },
    onLastStringBackspaced: function() {
      const typedText = document.getElementById('typed-text');
      typedText.innerHTML = typedText.innerHTML + "\u00A0";
      typedText.classList.remove('bold-typed-text'); // Elimina la clase para negrita
    }
  };

  const typed = new Typed('#typed-text', options);
};