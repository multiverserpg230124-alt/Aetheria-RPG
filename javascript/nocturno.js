/**
 * Botón para alternar entre modo oscuro y modo claro.
 * El modo oscuro conserva las imágenes originales.
 * El modo claro usa colores crema, lila y azul, con imágenes alternativas.
 */

/* CONFIGURACIÓN */
const versionForo = 'phpBB3';
const posicionBotonModo = 'flotando';

/* CSS que se añade solamente cuando se activa el modo claro. */
const cssModoClaro = `
  body, body.chatbox, #frame_chatbox {
    /* Fondo crema, nunca blanco puro */
    --to1: 246, 241, 232;
    --to2: #eee7dc;
    --to3: #302a3a;
    --to4: #41394d;
    --to5: #665d70;

    /* Acentos azul y lila */
    --to6: #5a7fa8;
    --to7: #a371a9;
    --to8: #7b75b8;

    /* Paneles claros con calidez */
    --to9: #fdf9f1;
    --to10: #f6f0e7;
    --gr1: linear-gradient(225deg, #6688b4, #a575aa);
  }

  .Cbar a {
    color: var(--to9);
    text-shadow: 1px 1px var(--to3);
  }

  .Cbar.iconomono a {
    color: var(--to4);
    text-shadow: none;
  }

  #ulte time, #ulte ulte a, .busquedas bsq i, .noticias note fcb,
  dercha nme, dercha linksrs a, izquirda stadis, .bro h25, .cred h25,
  .dir h25, .vip h25, .forlin a, .count resp, .count vist, bots a,
  .navtop nub a, .navbottom red a, contes, linkesos a,
  button.rep-button.fa_liked, button.rep-button.fa_like,
  button.rep-button, input.button2, input.button1, .navbottom pag,
  .pder tope, #tabs li, .Members botte, .Members botte a,
  a#modoscolores {
    color: var(--to2);
    text-shadow: none;
  }

  #ulte ulte a:hover, dercha linksrs a:hover, .forlin a:hover,
  bots a:hover, .navtop nub a:hover, .navbottom red a:hover,
  linkesos a:hover, .Members botte a:hover, a#modoscolores:hover {
    color: var(--to8);
  }

  .pder tope name span strong,
  .pder tope rang {
    color: var(--to2) !important;
  }

  #s-m-t-tooltip {
    background: rgba(253, 249, 241, 0.92);
    color: var(--to4);
  }

  /* Imágenes exclusivas del modo claro */
  .cabecera {
    background-image:
      url("https://2img.net/i.imgur.com/RGdzz51.jpeg"),
      var(--gr1);
    background-blend-mode: soft-light;
  }

  .cabecera:before {
    mix-blend-mode: normal;
    opacity: 0.28;
  }

  .astronauta {
    background-image: url("https://2img.net/i.imgur.com/G3hvr86.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

/* Comprueba si la persona eligió el modo claro. */
function modoClaroActivado() {
  return document.cookie
    .split('; ')
    .some(function (cookie) {
      return cookie.indexOf('modoClaro=1') === 0;
    });
}

/* Muestra el icono correcto en la estrella. */
function iconoModo() {
  if (modoClaroActivado()) {
    return '<i class="fal fa-star-christmas" title="Cambiar a modo oscuro"></i>';
  }

  return '<i class="fad fa-star-christmas" title="Cambiar a modo claro"></i>';
}

/* Añade los colores e imágenes del modo claro. */
function aplicarModoClaro() {
  if (!modoClaroActivado()) {
    return;
  }

  const estiloAnterior = document.getElementById('estilo-modo-claro');

  if (estiloAnterior) {
    estiloAnterior.remove();
  }

  const estilo = document.createElement('style');
  estilo.id = 'estilo-modo-claro';
  estilo.textContent = cssModoClaro;
  document.head.appendChild(estilo);
}

/* Guarda o elimina la elección de modo. */
function cambiarModo(evento) {
  evento.preventDefault();

  if (modoClaroActivado()) {
    document.cookie =
      'modoClaro=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  } else {
    document.cookie =
      'modoClaro=1; path=/; max-age=31536000; SameSite=Lax';
  }

  window.location.reload();
}

/* Crea la estrella flotante. */
function crearBotonModo() {
  const botonAnterior = document.getElementById('modoscolores');

  if (botonAnterior) {
    return;
  }

  let contenedor;

  if (
    posicionBotonModo === 'toolbar' &&
    typeof _userdata !== 'undefined' &&
    _userdata.session_logged_in === 1
  ) {
    contenedor = document.getElementById('fa_menulist');
  } else {
    switch (versionForo.toUpperCase()) {
      case 'PHPBB3':
      case 'MODERNBB':
        contenedor = document.getElementById('wrap');
        break;

      case 'PUNBB':
      case 'INVISION':
        contenedor = document.getElementsByClassName('container_IE')[0];
        break;

      case 'PHPBB2':
        contenedor = document.getElementsByClassName('bodylinewidth')[0];
        break;
    }
  }

  /* Si Foroactivo cambia su estructura, usa el cuerpo como respaldo. */
  if (!contenedor) {
    contenedor = document.body;
  }

  const envoltura = document.createElement('div');
  envoltura.innerHTML =
    '<a href="#" id="modoscolores" aria-label="Cambiar modo de color">' +
    iconoModo() +
    '</a>';

  contenedor.appendChild(envoltura);

  document
    .getElementById('modoscolores')
    .addEventListener('click', cambiarModo);
}

/* Inicia el código incluso si Foroactivo lo carga tarde. */
function iniciarModoColor() {
  aplicarModoClaro();
  crearBotonModo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarModoColor);
} else {
  iniciarModoColor();
}
