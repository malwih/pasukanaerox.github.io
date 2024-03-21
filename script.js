function nonFt() {document.getElementById('foto').style.display = "none";} function showFt() {document.getElementById('foto').style.display = "block";}
  function nonDiv() {document.getElementById('Content').style.display = "none";} function showDiv() {document.getElementById('Content').style.display = "block";}
  function nonKol() {document.getElementById('koteks').style.display = "none";} function showKol() {document.getElementById('koteks').style.display = "block";}
  function trm() {document.getElementById('trm').style.margin = "0";}
  function whs() {document.getElementById('whs').style.margin = "0";document.getElementById('trm').style.display = "none";}
  function fotoKt() {document.getElementById('ftKm').style.margin = "0 110px 0 0";document.getElementById('ftAk').style.opacity = "1";document.getElementById('ftAk').style.margin = "0 0 0 60px";
  var e1 = document.getElementById('ftKm');e1.classList.add("degdeg");var e2 = document.getElementById('ftAk');e2.classList.add("degdeg");}
  
  function ketik() {if(a<text.length){document.getElementById("text").innerHTML += text.charAt(a);a++;setTimeout(ketik,50);}if(a==text.length){ketikk();}}
  function ketikk() {if(i<text2.length){document.getElementById("text2").innerHTML += text2.charAt(i);i++;setTimeout(ketikk,150);}if(i==text2.length){ketikkk();}}
  function ketikkk() {if(u<text3.length){document.getElementById("text3").innerHTML += text3.charAt(u);u++;setTimeout(ketikkk,200);}if(u==text3.length){ketikkkk();}}
  function ketikkkk() {if(e<text4.length){document.getElementById("text4").innerHTML += text4.charAt(e);e++;setTimeout(ketikkkk,200);}if(e==text4.length){trm();}}
  function finish() {if(e==text4.length){document.getElementById('sp1').style.display = "none";document.getElementById('sp2').style.display = "block";}if(o<text5.length){document.getElementById("text5").innerHTML += text5.charAt(o);o++;setTimeout(finish,100);}if(o==text5.length){whs();nonKol();fotoKt();}}
