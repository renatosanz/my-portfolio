window.addEventListener('load', function() {
  var loader = document.querySelector('.loader');
  if (loader) {
    loader.style.opacity = 0;
    async()=>{
      await new Promise(resolve => setTimeout(resolve, 2000)); // Espera durante 2 segundos
    }
    loader.style.display = 'none';
  }
});
