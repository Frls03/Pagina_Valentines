import React, { useEffect } from 'react';
import './style.css'; // Importar estilos CSS
import $ from 'jquery'; // Importar jQuery

function ValentinesDay() {
  useEffect(() => {
    $(document).ready(function() {
      $('.valentines-day').click(function() {
        // Animación de desvanecimiento de los elementos del sobre
        $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
        $('.envelope').fadeOut(800, function() {
          // Ocultar elementos dentro de .valentines-day
          $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

          // Hacer visible la carta con una animación ondulante
          $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
          $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1; // Calculamos la escala basada en la función seno
            $(this).css('transform', 'scale(' + scale + ')');
          }}); // Animación de ondulación
        });
      });
    });

  /*  (function(w,d,e,u,f,l,n) {
      w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);};
      l=d.createElement(e);
      l.async=1;
      l.src=u;
      n=d.getElementsByTagName(e)[0];
      n.parentNode.insertBefore(l,n);
    })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');

   ml('account', '736768');*/ 

  }, []);

  return (
    <div className="valentines-day">
      <div className="envelope"></div>
      <div className="heart"></div>
      <div className="text">Happy <br />Valentine's <br />Day!<br />Princess </div>
      <div className="front"></div>
      <div id="card">
        <div className="side one">
          <i className="fas fa-heart"></i>
        </div>
        <div className="side two">
        <p>Mi princesa hermosa ♥</p>
          <p>Conocerte fue como si hubiera escuchado por primera vez una canción sabiendo que desde ese momento iba a ser mi favorita, y eso eres tu para mi, mi canción favorita, mi obra de arte favorita, mi persona favorita </p>
          <p>Gracias porque llega otro mes y tu sigues a mi lado, no sabes lo agradecido que estoy con Dios y con la vida por la dicha que tengo de estar contigo, te adoro como no tienes idea </p>
          <h2>Att: Tu novio</h2>
        </div>
      </div>
    </div>
  );
}

export default ValentinesDay;
