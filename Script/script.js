// var isDragging = false;
// var startPosition = null;
// var scrollLeft = null;

// const slider = document.getElementById("my_grades");
// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });




document.addEventListener('DOMContentLoaded', function() {
    // Get the elements with class="column"
    var cardView = document.getElementById('my_grades');
  
    var listBtn = document.getElementById('listButton');
    var gridBtn = document.getElementById('gridButton');

    var cells = document.getElementsByClassName('grade_cell');

    gridBtn.style.backgroundColor = 'transparent';
    gridBtn.style.color = '#6563FF';
    gridBtn.style.border = 'solid 2px #6563FF';

    // List View
    function listView() {
      cardView.style.flexWrap = 'wrap';
      cardView.style.rowGap = '2vw';
      cardView.style.justifyContent = 'center';
      cardView.style.flexDirection = 'column';

      //Change ListButton style
      listBtn.style.backgroundColor = 'transparent';
      listBtn.style.border = 'solid 2px #6563FF';
      listBtn.style.color = '#6563FF';

      //Change GridButton style
      gridBtn.style.backgroundColor = '#6563FF';
      gridBtn.style.border = 'none';
      gridBtn.style.color = 'white';

      for (let cell of cells) {
        cell.style.width = '80%'
        cell.style.flexDirection = 'row'
      }


    }
  
    // Grid View
    function gridView() {
      cardView.style.backgroundColor = ''; 
      cardView.style.flexWrap = 'nowrap';
      cardView.style.justifyContent = 'flex-start';
      cardView.style.rowGap = '';
      cardView.style.flexDirection = 'row';


      gridBtn.style.backgroundColor = 'transparent';
      gridBtn.style.border = 'solid 2px #6563FF';
      gridBtn.style.color = '#6563FF';

      listBtn.style.backgroundColor = '#6563FF';
      listBtn.style.border = 'none';
      listBtn.style.color = 'white';

      for (let cell of cells) {
        cell.style.width = '18vw'
        cell.style.flexDirection = 'column'
      }
    }
  
    // Get the toggle buttons
    var listButton = document.getElementById('listButton');
    var gridButton = document.getElementById('gridButton');
  
    // Attach event listeners to the buttons
    // listButton.addEventListener('click', function() { //FIX THIS!!!!!
    //   listView();
    // });
  
    gridButton.addEventListener('click', function() {
      gridView();
    });
  });
  
  
  
  