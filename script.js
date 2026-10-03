
```javascript
const CONFIG = {
  nome: "Bryan Gabriel",
  instagram: "bryangabriel.ads",
  whatsapp: "554299254728",   
  foto: "foto-bryan.jpg",      // coloque a foto na mesma pasta do arquivo
    cases: [
    // {numero:"00", legenda:"conversas em 30 dias na Academia X"}
  ]
};
 
(function(){
  var c = CONFIG, $ = function(i){return document.getElementById(i)};
  function wa(m){return 'https://wa.me/'+c.whatsapp+'?text='+encodeURIComponent(m)}
  $('y').textContent = new Date().getFullYear();
  $('ig').textContent = '@'+c.instagram;
  $('ig').href = 'https://instagram.com/'+c.instagram;
  $('sticky').href = wa('Olá Bryan! Vi sua página e quero conversar sobre tráfego pago para o meu negócio.');
 
  var img = $('foto'); img.src = c.foto;
  img.onerror = function(){ img.style.display='none'; $('mono').style.display='flex'; };
 
  if(c.cases && c.cases.length){
    $('casesSec').style.display='block';
    $('cases').innerHTML = c.cases.map(function(k){
      var a=document.createElement('div'); a.textContent=k.numero; var n=a.innerHTML;
      a.textContent=k.legenda; var l=a.innerHTML;
      return '<div class="case"><strong>'+n+'</strong><span>'+l+'</span></div>';
    }).join('');
  }
 
  $('f').addEventListener('submit', function(e){
    e.preventDefault();
    var t = document.querySelector('input[name=t]:checked').value;
    // Se o Bryan instalar o Pixel da Meta, descomente a linha abaixo para contar o lead:
    // if(window.fbq) fbq('track','Lead');
    window.open(wa('Olá Bryan! Tenho uma '+t+' e vi sua página. Quero entender como você pode me ajudar a ter mais alunos.'),'_blank','noopener');
  });
})();
 
```