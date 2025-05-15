window.onscroll = () => {
  const y = window.scrollY;
  const limit = 300;
  const blend = Math.min(y / limit, 1);
  const shade = 255 - blend * 8;
  document.body.style.backgroundColor = `rgb(${shade},${shade},${shade})`;
};
