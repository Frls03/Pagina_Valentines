// ValentinesDay.js
import React, { useState} from 'react';
import './style.css'; 
/*import $ from 'jquery'; // Importar jQuery*/
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
import coverImage from './imgs/cover.jpg'; // Importa la imagen de portada






const images = [
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
  { src: img13, text: "Tu foto fav que no pude poner en horizontal porque si no todo se descuadraba :( tienes un lugar tan grande en mi corazón que siempre desborda amor hacia ti, y hacia las personas que me rodean, tienes una capacidad para alegrarme un día tan malo y por eso gracias." },
  { src: img14, text: "Tus besos me encantan, me hacen sentir que estoy volando y siempre que me despido de ti, ruego porque la semana se pase lo más rapido posible para volverte a ver." },
  { src: img15, text: "El tiempo que paso contigo se pasa tan rápido, 5 horas contigo se sienten como 10 minutos y siempre quiero un poco más, porque aunque todavía falte un poco, me muero de ganas por pasar todo el tiempo de mi vida contigo, no hay persona con quien quiera pasar mis mejores años que contigo." },   
  { src: img16, text: "El pequeño Luis siempre soñó con alguien como tu, alguien amorosa, atenta, detallista y hermosa, simplemente eres lo que siempre soñé y lo que siempre pedí" },
  { src: img17, text: "Nuestra primera cena por San Valentin, solo una foto nos tomamos de lo bien que nos la pasamos y creeme que quiero que todos los 14 de febrero que nos queden sean lindos, especiales y los mejores." },
  { src: img18, text: "La primera foto que nos tomamos después de un par de años sin siquiera comunicarnos, que lindo día, que linda noche, hiciste que subiera a 2 juegos de muy dudosa seguridad y comer unos churros con aceite de dudosa procedencia jajaja pero dejame decirte que desde ese día empezaste a volver mis días más lindos, me hcisite la vida más linda, y hoy, 5 meses después, puedo decirte que lograste que muchas cosas malas se fueran de mi vida y le diste paso a tantas cosas lindas y tantos sentimientos sinceros que no me alcanzaría la vida para agradecerte. Te amo mi vida ♥ feliz primer mes de tantos que nos quedan." },
];
const ValentinesDay = () => {
  const [showImages, setShowImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const handleCoverClick = () => {
    setShowImages(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=''> 
    <div className="valentines-day" onClick={handleCoverClick}>
      {!showImages && (
        <div className="cover">
          <img src={coverImage} alt="Portada del libro" />
        </div>
      )}

      {showImages && (
        <div className="image-container">
          <img src={images[currentImageIndex].src} alt={`Imagen ${currentImageIndex + 1}`} />
          <div className="text-overlay">
            <p>{images[currentImageIndex].text}</p>
          </div>
          <div className="arrow-left" onClick={handlePrev}>
            &#10094;
          </div>
          <div className="arrow-right" onClick={handleNext}>
            &#10095;
          </div>
        </div>
      )}
    </div>
    <footer>
        <iframe 
          title="spotify"
          src="https://open.spotify.com/embed/playlist/0aqMlz9eLYgXzeZ0wZNlOY?utm_source=generator" 
          width="95%" 
          height="100" 
          frameborder ="0" 
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy"
          style={{ borderRadius: '15px' }} // Establece el estilo de borde redondeado correctamente
        ></iframe>
      </footer>
    </div>
  );
};

export default ValentinesDay;