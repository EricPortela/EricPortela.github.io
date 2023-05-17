var isDragging = false;
var startPosition = null;
var scrollLeft = null;

var myGradesDiv = document.getElementById("my_grades");

myGradesDiv.addEventListener("mousedown", startDrag);
myGradesDiv.addEventListener("mouseup", endDrag);
myGradesDiv.addEventListener("mousemove", drag);

function startDrag(event) {
  isDragging = true;
  startPosition = event.clientX;
  scrollLeft = myGradesDiv.scrollLeft;
}

function endDrag() {
  isDragging = false;
}

function drag(event) {
  if (!isDragging) return;

  var delta = event.clientX - startPosition;
  myGradesDiv.scrollLeft = scrollLeft - delta;
}
