window.onload = () => {
  // Remueve la clase .container del body cuando la página ha cargado
  // para iniciar las animaciones si están pausadas por defecto
  const c = setTimeout(() => {
    document.body.classList.remove("container");
    clearTimeout(c);
  }, 1000);
};
