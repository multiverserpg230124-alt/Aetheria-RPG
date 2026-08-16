/**
 * Foroactivo (c) 2018
 * Enlace al tutorial: https://asistencia.foroactivo.com/t151453-anadir-un-modo-nocturno-a-nuestro-foro
 */

/* ZONA EDITABLE */
const versionForo = 'phpBB3';
const posicionBotonModoNoche = 'flotando'; // Admite toolbar y flotando
const css = ' 
  
body, body.chatbox, #frame_chatbox {
    --to1: 255,255,255;
    --to2: #e6e6e6;
    --to3: #111;
    --to4: #222;
    --to5: #000;
    --to6: #1a3b57;
    --to7: #8e2a61;
    --to8: #cf933a;
    --to9: #fff;
    --to10: #eee;
}
.Cbar a {
  color: var(--to9);
  text-shadow: 1px 1px var(--to3);
}
.Cbar.iconomono a {
  color: var(--to4);
  text-shadow: none;
}
#ulte time, #ulte ulte a, .busquedas bsq i, .noticias note fcb, dercha nme, dercha linksrs a, izquirda stadis, .bro h25, .cred h25, .dir h25, .vip h25, .forlin a, .count resp, .count vist, bots a, .navtop nub a, .navbottom red a, contes, linkesos a, button.rep-button.fa_liked, button.rep-button.fa_like, button.rep-button, input.button2, input.button1, .navbottom pag, .pder tope, #tabs li, .Members botte, .Members botte a, a#modoscolores {
  color: var(--to2);
  text-shadow: none;
}
#ulte ulte a:hover,dercha linksrs a:hover,.forlin a:hover,bots a:hover, .navtop nub a:hover, .navbottom red a:hover, linkesos a:hover, .Members botte a:hover, a#modoscolores:hover {
  color: var(--to8);
}
.pder tope name span strong, .pder tope rang {
    color: var(--to2)!important;
}
#s-m-t-tooltip{
 background:rgba(var(--to1),0.5);
 background:rgba(255,255,255,0.7);
 color:var(--to4);
}
  ';
/* FIN ZONA EDITABLE */

if (modoNocturnoActivado()) {
  $('head').append('<style>' + css + '</style>');
}
document.addEventListener('DOMContentLoaded', function() {
  if (posicionBotonModoNoche == 'toolbar' && _userdata['session_logged_in'] === 1) {
    document.getElementById('fa_menulist').innerHTML += '<li class="fa_separator"></li><li><a href="#" id="activar-modo-nocturno">' + textos() + '</a></li>';
  } else if (posicionBotonModoNoche == 'flotando' || _userdata['session_logged_in'] === 0) {
    switch (versionForo.toUpperCase()) {
      case 'PHPBB3':
      case 'MODERNBB':
        var contenedor_boton = document.getElementById('wrap');
        break;
      case 'PUNBB':
      case 'INVISION':
        var contenedor_boton = document.getElementsByClassName('container_IE')[0];
        break;
      case 'PHPBB2':
        var contenedor_boton = document.getElementsByClassName('bodylinewidth')[0];
        break;
      default:
        console.error('Versión de foro incorrecta. Solo se admiten: phpBB3, phpBB2, punBB, Invision y ModernBB');
    }

    let boton_flotante_element = document.createElement('div');
    boton_flotante_element.innerHTML = '<a href="#" id="modoscolores">' + textos() + '</a>';
    contenedor_boton.appendChild(boton_flotante_element);
  } else {
    console.error('Valor erroneo para posicionBotonModoNoche');
  }
  document.getElementById('modoscolores').addEventListener('click', function() {
    document.cookie = modoNocturnoActivado() ? 'modoNoche=0; expires=Thu, 01 Jan 1970 00:00:00 UTC' : 'modoNoche=1';
    location.reload();
  });
});

function modoNocturnoActivado() {
  let name = 'modoNoche' + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return true;
    }
  }
  return false;
}

function textos() {
  return modoNocturnoActivado() ? '<i class="fal fa-star-christmas" title="Modo Común"></i>' : '<i class="fad fa-star-christmas" title="Modo user"></i>';
}
