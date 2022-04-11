const border = document.querySelector('.card-border');

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    border.style.backgroundColor = "#" + randomColor;
  }

  
  genNew.addEventListener("click", setBg);
