function colorbox(options) {
  let boxes = document.querySelectorAll("");

  width = options.boxWidth;

  height = options.boxHeight;

  color = options.boxColor;

  box.forEach((box) => {
    box.style.width = width;
    box.style.height = height;
    box.style.backgroundColor = color;
  });
}

module.exports.colorbox = colorbox;
