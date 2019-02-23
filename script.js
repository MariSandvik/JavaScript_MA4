var button = document.getElementById('userClick');

button.addEventListener('click', function(e){
   alert('Button has been clicked');
   e.stopPropagation();
})