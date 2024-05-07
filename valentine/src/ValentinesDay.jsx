import React, { useState } from 'react';
import './style.css'; // Importa los estilos CSS
import spotify from './imgs/spotify.png';
import bouquet from './imgs/bouquet.jpeg';

import img1mes from './imgs/img1mes.jpg';
import img2mes from './imgs/img2mes.jpg';
import img1 from './imgs/img1.jpeg'; 
import img2 from './imgs/img2.jpeg'; 
import img3 from './imgs/img3.jpeg'; 
import img4 from './imgs/img4.jpeg'; 
import img5 from './imgs/img5.jpeg'; 
import img6 from './imgs/img6.jpeg'; 
import img7 from './imgs/img7.jpeg'; 
import img8 from './imgs/img8.jpeg'; 
import img9 from './imgs/img9.jpeg'; 
import img10 from './imgs/img10.jpeg'; 
import img11 from './imgs/img11.jpeg'; 
import img12 from './imgs/img12.jpeg'; 
import img13 from './imgs/img13.jpeg'; 
import img14 from './imgs/img14.jpeg'; 
import img15 from './imgs/img15.jpeg'; 
import img16 from './imgs/img16.jpeg'; 
import img17 from './imgs/img17.jpeg';
import img18 from './imgs/img18.jpeg'; 
import img19 from './imgs/img19.jpeg';
import img20 from './imgs/img20.jpeg';
import img21 from './imgs/img21.jpeg';
import img22 from './imgs/img22.jpeg';
import img23 from './imgs/img23.jpeg';
import img24 from './imgs/img24.jpeg';
import img25 from './imgs/img25.jpeg';
import img26 from './imgs/img26.jpeg';
import img3mes from './imgs/img3mes.png';
import img27 from './imgs/img27.jpeg';
import img28 from './imgs/img28.jpeg';
import img29 from './imgs/img29.jpeg';
import img30 from './imgs/img30.jpeg';
import img31 from './imgs/img31.jpeg';
import img32 from './imgs/img32.jpeg';
import img33 from './imgs/img33.jpeg';
import img34 from './imgs/img34.jpeg';
import img35 from './imgs/img35.jpeg';
import img36 from './imgs/img36.jpeg';
import img37 from './imgs/img37.jpeg';
const imagenes = [
  {src: img1mes, text: "Nuestro primer mes"},
  { src: img1, text: "Si alguna vez me preguntan si la suerte está de mi lado solo bastará con decir que encontré a mi mejor amiga y al amor de mi vida en una sola persona. Creeme cuando te digo que no puedo describirte lo emocionado que estoy por experimentar esta vida junto a ti, y esto es solo el inicio. " },
  { src: img2, text: "Hay veces que simplemente no me salen las palabras, en donde quisiera que estuvieras a mi lado para que con una mirada supieras cuanto te amo, porque eso he hecho siempre Beita, es un sentimiento que nunca desapareció y sin importar cuanto llevemos, creo que mis sentimientos hacia ti, nunca pudieron estar más claros" },
  { src: img3, text: "Desde que estás en mi vida, los días son un poco más brillantes, son menos estresantes, menos agobiantes, más lindos y más esperanzadores, tu haces que mis días sean más lindos, y por eso siempre estaré agradecido." },
  { src: img4, text: "Nunca me ha gustado tomarme fotos, pero contigo me tomaría 150 fotos en un día si es que quieres, porque quiero hacerte feliz todos los días de mi vida, y así poder un día sonreír viendo las fotos que nos tomamos, desde las más lindas hasta las más randoms" },
  { src: img5, text: "¿Sabías que los ojos no mienten? y los míos nunca lo hacen cuando te ven, porque puedo asegurarte que de lejos se nota el amor que te tengo, y si de algo no tengo duda es que te veré de la misma manera para siempre." },
  { src: img6, text: "Entonces te das cuenta que no es quien te mueve el piso, sino quien te centra. No es quien te roba el corazón, sino quien te hace sentir que lo tienes de vuelta - Mario Benedetti. Algo así es lo que me haces sentir, porque no alborotas mi mundo, le das orden y paz, y mi corazón no lo siento robado, siento que está seguro contigo ♥ ♥" },
  { src: img7, text: "Cuando estoy en tus brazos me siento amado, no te imaginas lo bonito que se siente cuando tu me das un abrazo, es como si todo en esta vida, se silenciara y solo existieramos tu y yo, pasa lo mismo cuando te veo, simplemente no existe otra persona más que tu ante mis ojos y eres a quien quiero ver toda mi vida." },
  { src: img8, text: "Me gustas, tal vez es tu sonrisa, tal vez son tus ojos, tal vez es tu mirada que parece droga por lo adictiva que es, tal vez es tu voz cuando me dices que me adoras o cuando me hablas bonito, o tal vez es todo junto, porque me tienes loco de amor, porque me tienes loco por ti" },
  { src: img9, text: "Tu, mi princesa, el amor de mi vida, amo tu sonrisa y tu mirada, esta foto fue tan improvisada que salió tan linda, definitivamente una de mis fotos favoritas, siempre que la veo viene a mi mente lo feliz que soy cuando estoy junto a ti y como es que no paro de contar los días para verte de nuevo." },
  { src: img10, text: "Por si todavía tienes dudas, quiero que sepas que yo haré todo, hasta lo imposible por verte feliz, por verte bien y porque te sientas amada, creeme que es lo unico que deseo, porque si tu estás bien, yo lo estaré." },
  { src: img11, text: "No me enamoré de ti porque me sentía solo, o porque te necesitaba para ser feliz, me enamoré de ti por 1000 razones diferentes, porque me hiciste sentir realmente valorado, me enamoré de ti porque me haces sentir seguro y en paz, porque me enseñas que el amor si puede ser recíproco, y siéndote honesto, me haces sentir como en una película, me enamoré de ti porque esa película la vuelves realidad. " },
  { src: img12, text: "Y todos los días mi amor hacia ti crece mucho más, nunca había conocido a alguien que tuviera su corazón igual de hermoso como su carita" },
  { src: img13, text: "Tu foto fav que al final si pude poner en horizontal aunque se mire raro jsjsjs, tienes un lugar tan grande en mi corazón que siempre desborda amor hacia ti, y hacia las personas que me rodean, tienes una capacidad para alegrarme un día tan malo y por eso gracias." },
  { src: img14, text: "Tus besos me encantan, me hacen sentir que estoy volando y siempre que me despido de ti, ruego porque la semana se pase lo más rapido posible para volverte a ver." },
  { src: img15, text: "El tiempo que paso contigo se pasa tan rápido, 5 horas contigo se sienten como 10 minutos y siempre quiero un poco más, porque aunque todavía falte un poco, me muero de ganas por pasar todo el tiempo de mi vida contigo, no hay persona con quien quiera pasar mis mejores años que contigo." },   
  { src: img16, text: "El pequeño Luis siempre soñó con alguien como tu, alguien amorosa, atenta, detallista y hermosa, simplemente eres lo que siempre soñé y lo que siempre pedí" },
  { src: img17, text: "Nuestra primera cena por San Valentin, solo una foto nos tomamos de lo bien que nos la pasamos y creeme que quiero que todos los 14 de febrero que nos queden sean lindos, especiales y los mejores." },
  { src: img18, text: "La primera foto que nos tomamos después de un par de años sin siquiera comunicarnos, que lindo día, que linda noche, hiciste que subiera a 2 juegos de muy dudosa seguridad y comer unos churros con aceite de dudosa procedencia jajaja pero dejame decirte que desde ese día empezaste a volver mis días más lindos, me hcisite la vida más linda, y hoy, 5 meses después, puedo decirte que lograste que muchas cosas malas se fueran de mi vida y le diste paso a tantas cosas lindas y tantos sentimientos sinceros que no me alcanzaría la vida para agradecerte. Te amo mi vida ♥ feliz primer mes de tantos que nos quedan." },
  { src: img2mes, text: "Nuestro segundo mes ♥ ♥" },
  { src: img19, text: "Tu amor es como una melodía que siempre quiero escuchar, llena de armonía y belleza." },
  { src: img20, text: "No hay nada que me haga más feliz que verte feliz, y si hay algo que me hace más feliz que eso, es saber que soy yo la razón de tu felicidad, porque no hay nada que me haga más feliz que verte sonreír, porque tu sonrisa es mi felicidad." },
  { src: img21, text: "Tú eres mi lugar favorito, donde quiero estar para toda la vida, porque no importa la hora, ni el día, ni la ubicación, porque cuando estás tu, todo es más bonito." },
  { src: img22, text: "En el vasto universo de la programación, eres mi función favorita, siempre devolviendo amor y felicidad." },
  { src: img23, text: "Es de mis fotos favoritas, no sabes lo bien que se siente verte, es como si todo alrededor se hiciera borroso y mi único enfoque eres tu, es la sensación más bonita de todas, junto con abrazarte, besarte y pasar mis días contigo. Amo pasar tiempo contigo, tomarme fotos, jugar, escuchar musica, molestar, caminar, ir a ''cayala'' juntos jajaja, amo hacer todo contigo, porque contigo todo es mejor." },
  { src: img24, text: "Eres mi faro en la tormenta, la luz que me guía a través de los mares turbulentos de la vida. Tu amor es como un puerto seguro, un lugar donde puedo descansar y recargar, sabiendo que siempre estaré seguro en tus brazos. Eres mi ancla, manteniéndome firme cuando las olas de la vida amenazan con arrastrarme." },
  { src: img25, text: "Con cada día que pasa, mi amor por ti solo se hace más fuerte.Eres como un libro que nunca quiero dejar de leer, lleno de misterio, aventura y amor. Cada página que paso contigo revela una nueva faceta de tu belleza y bondad, y no puedo esperar a ver lo que los próximos capítulos de nuestra vida juntos nos deparan." },
  { src: img26, text: "Eres mi razón de ser, mi inspiración y mi felicidad. Cada día a tu lado es un regalo que valoro y atesoro. Te amo más de lo que las palabras pueden expresar. Cuidaré de la niña tan linda que vive en ti, haré que te sientas amada toda la vida, porque créeme cuando te digo que el hacerte feliz a ti, es hacerme feliz a mi. Te amo mi reina, te amo con toda mi vida ♥ ♥ ♥ " },
  { src: img3mes, text: "Nuestro tercer mes ♥ ♥ ♥" },
  { src: img27, text: "Ya son 3 meses y quiero que sepas que ya hice de ti mi hogar, en como hueles, en como te sientes, en como irradias luz a tu alrededor, y cada vez que me preguntan donde es mi casa, siempre pienso en ti " },
  { src: img28, text: "Y cada vez que estamos juntos siento que el tiempo se queda corto para lo mucho que nos disfrutamos, siento que las palabras se quedan cortas para decirnos cuanto nos adoramos y esta vida se me queda corta para demostrarte lo mucho que te amo" },
  { src: img29, text: "Estar contigo es lo que quiero hacer toda mi vida, junto a ti siento que puedo hacerlo todo, siento que no hay nada que pueda vencerme y sobre todo siento una paz tan enorme que es dificil de explicar" },
  { src: img30, text: "Ya eres mi novia pero nunca dejaras de ser la niña que se robó mi corazón, mi crush, mi primer amor verdadero, la niña que siempre soñé y siempre pedi, la que me pone nervioso cuando me da un beso, la que causa tantas emociones en mi que hay veces que no sé como expresarlas, y la persona que nunca termina de enamorarme y de enseñarme que el amor es algo lindo si es verdadero" },
  { src: img31, text: "Tu cuando ya estas cansada de tu dia y llego yo a hacerte escenas bobas de celos jajajaja te amo tanto ♥ ♥" },
  { src: img32, text: "Eres mi mejor amiga, mi confidente, mi compañera de aventuras y mi amor verdadero. No puedo imaginar mi vida sin ti, porque eres mi todo, mi razón de ser, mi inspiración y mi felicidad. Gracias por ser tú, por ser tan especial y por hacerme sentir tan amado. Te amo más de lo que las palabras pueden expresar, y siempre lo haré."}, 
  { src: img33, text: "Gracias a ti, hoy quiero casarme cuanto antes, quiero tener hijos, quiero viajar por todo el mundo contigo, gracias a ti mi vida tomó otro sentido, gracias a ti dejé de ser tan egoísta, gracias  ti mi vida dio un giro de 180 grados, gracias a ti hoy estoy en un mejor lugar" },
  { src: img34, text: "Y me hablaste de tu dia y por un segundo pude ver mi futuro en tus ojos, y me dije a mi mismo que definitivamente puedo acostumbrarme a esto, a ti hablandome de tu dia y yo admirandote de todas las maneras posibles " },
  { src: img35, text: "Tu sonrisa es inigualable, es tan brillante, con tu sonrisa iluminas mis días y mi vida entera, y de la forma más egoista te quiero decir que quiero ser la única persona que te haga sonreir, que te bese y que te cuide por el resto de nuestra existencia" },
  { src: bouquet, text: "Conmigo nunca vas a ser expectadora" },
  { src: img36, text: "Eres tan gentil como una rosa al tacto, tan delicada como un tulipan, tan cálida y brillante como un girasol y sin duda alguna, más hermosa que cualquier flor" },
  { src: img37, text: "¿Alguna vez te has preguntado porqué me gustas? y la respuesta es fácil, me enamoré de ti por la manera en como tus labios se curvan cuando te hago sonreir, eso hace que me den ganas de besarte y tenerte conmigo por un ratote, me enamoré de ti por la manera en como arrugas tu nariz, me hace explotar de ternura y amor hacia ti, me enamoré de ti por la manera en que tus ojos brillan cada vez que hablas de algo que amas hacer y te apasiona y creeme que de verdad sé que eres un regalo de arriba, me enamoré del gran corazón que tienes, de lo empática y amorosa que eres y creeme que es de las primeras cosas que noté en ti desde el inicio, amo la manera en que se siente cuando me abrazas, porque porfin me encuentro seguro tan así que puedo dormir en completa paz, amo la manera en como no me juzgas aunque sea la persona más imperfecta, eso es más valioso que cualquier otra cosa, amo tu manera de ser porque irradias paz, amor y bondad y estas son unas pocas razones por las que me enamoré de ti y amor, dejame decirte que eres la persona que quiero besar por el resto de mi vida, eres la persona con la que me quiero casar, eres la persona con la que quiero tener hijos, eres la persona con la que quiero pasar el resto de mi vida, eres la persona con la que quiero despertar al lado, definitivamente eres la persona a la que amaré para toda la eternidad. Te amo ♥" },
];

const Carrusel = () => {  
  const [actual, setActual] = useState(0);


  const handleAtrasClick = () => {
    setActual(actual === 0 ? imagenes.length - 1 : actual - 1);
  };

  const handleAdelanteClick = () => {
    setActual(actual === imagenes.length - 1 ? 0 : actual + 1);
  };

  return (
    <div className="carrusel">
      <div className="atras" onClick={handleAtrasClick}>
        <img src="./imgs/angulo-izquierdo.png" alt="atras" loading="lazy" />
      </div>
      <div className="imagenes">
        <div id="img">
          <img src={imagenes[actual].src} alt={imagenes[actual].text} className="img" loading="lazy" />
        </div>
        <div id="texto" className="texto">
          <p>{imagenes[actual].text}</p>
        </div>
        <div id="music" className="music">
          <a href="https://open.spotify.com/playlist/0aqMlz9eLYgXzeZ0wZNlOY?si=0efdf4604fac47bc" target="_blank" rel="noreferrer">
            <img src={spotify} alt="spotify" loading="lazy" className="spotify-icon" />
          </a>
        </div>

      </div>
      <div className="adelante" onClick={handleAdelanteClick}>
        <img src="./imgs/angulo-derecho.png" alt="adelante" loading="lazy" />
      </div>
    </div>
  );
};

export default Carrusel;

