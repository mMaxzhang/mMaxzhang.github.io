
function openOnImageClick(){
 var img = document.createElement('img');
 img.setAttribute('src', 'green-hat.svg');
  img.setAttribute('width', '200');
   img.setAttribute('height', '150');
  document.getElementById("images").append(img);
}