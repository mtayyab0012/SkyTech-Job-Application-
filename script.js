const cnicInput = document.getElementById('cnic');

cnicInput.addEventListener('input', function(e){

  let value = e.target.value.replace(/\D/g,'');

  if(value.length > 5 && value.length <= 12){
    value = value.slice(0,5) + '-' + value.slice(5);
  }

  if(value.length > 13){
    value = value.slice(0,13) + '-' + value.slice(13,14);
  }

  e.target.value = value;
});
