window.onload = function() {
  const options = {
    strings: ["\u00A0Data Scientist 📊 | Python Developer 🐍 | ML/AI 🤖\u00A0"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    startDelay: 2000,
    preStringTyped: function() {
      document.getElementById('typed-text').innerHTML = document.getElementById('typed-text').innerHTML.slice(1);
    },
    onLastStringBackspaced: function() {
      document.getElementById('typed-text').innerHTML = document.getElementById('typed-text').innerHTML + "\u00A0";
    }
  };

  const typed = new Typed('#typed-text', options);
};