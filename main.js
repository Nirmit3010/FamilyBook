var pictures= [
    "Gaurav Pic2.jpg",
    "IMG_4903.JPG",
    "Wedding.jpg"
  ];
var i= 0;
function slide(){
  document.getElementById("Pics").src=pictures[i];
  i++;
  if (i==3) {
    i=0;
  }
}