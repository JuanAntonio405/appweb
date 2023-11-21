//service worker

if('serviceWorker' in navigator){
console.log('Puedes usar los serviceworker del navegador');

navigator.serviceworker.register('./sw.js')
.then(res => console.log('serviceworker cargadp cprrectamente', res))
.catch(err => console.log('serviceworker no se a podido registrar', err))
}else{
console.log ('NO puedes usar los serviceworker del navegador');
}

//scroll suavisando
$ (document).ready(function(){

$("#menu a").click(function(){
e-preventDefault();

$(html, body). animate ({
scrollTop: $($(this).attr("href"))-offset().top
});
return false;
});

});