const posts = [
  {
    title: "¿Qué es [at] y [dot]?",
    category: "Informática",
    summary: [
      "Cuando compartimos nuestro e-mail por internet es muy importante hacerlo de manera segura. Usando una forma muy simple evitamos recibir spam y correos indeseados."
    ],
    key: "1",
    date: "Junio 02, 2019",
    content: `<h2>¿Cómo se interpreta?</h2>

      <p>Si observas en los avisos legales de una web o en la zona de contacto, muchas 
      veces verás correos electrónicos similares a este:</p>

      <p class='Citation'>hola[at]gmail[dot]com</p>

      <p>Realmente significa lo siguiente:</p>
      <p class='Citation'>hola@gmail.com</p>

      <h2>¿A qué dirección enviar el correo?</h2>
      
      <p>Por lo tanto, si un día tienes que enviar un mensaje a un email similar a este:</p>
      <p class='Citation'>hola[at]gmail[dot]com</p>

      <p>No lo envíes a esa dirección, debes hacerlo a esta:</p>
      <p class='Citation'>hola@gmail.com</p>
     `
  },
  {
    title: "Blog sobre ajedrez",
    category: "Ajedrez",
    summary: ["Bienvenida y objetivos."],
    key: "2",
    date: "Agosto 07, 2017 | Agosto 06, 2019",
    content: `<p>
    La razón de ser de este blog será publicar y comentar las partidas de ajedrez 
    que voy jugando a través de la plataforma de <a href='https://www.chess.com/' alt='Página web 
    de ajedrez' target='_blank'>chess.com</a>.</p>

    <h2>Historia del blog</h2>

    <p>En el verano de 2017, estaba aprendiendo programación para la web (<i>HTML y CSS</i>), y como tenía ganas de  
    compartir algo decidí que un blog sería una buena opción. Mi conocimiento en Web seguía siendo muy 
    escueto, por ello escogí la plataforma que ofrecía <b>blogger</b>.</p>

    <p>Lo primero que encontré para subir fue mi afición por el ajedrez; no perdí el tiempo y empecé a 
    grabar y comentar las partidas.</p> 

    <p>He mantenido todas las descripciones de las partidas lo menos alteradas posible, manteniendo 
    así la esencia de la historia. </p>

    <p>Podrás identificar las cuatro partidas que jugué en ese verano como <i>‘Primera, segunda, tercera y cuarta partida comentada’.</i> </p>

    <p>¡A disfrutar!</p>
     `
  },
  {
    title: "manuelalferez - Aswin2910",
    category: "Ajedrez",
    summary: ["Primera partida de ajedrez comentada."],
    key: "3",
    date: "Agosto 07, 2017",
    content: `<h2>Ficha técnica</h2>

      <ul>
        <li><b>Tipo de juego:</b> Blitz [10 min]</li>
        <li><b>Fecha:</b> 21 de Julio de 2017</li>
        <li><b>Resultado:</b> manuelalferez - Aswin2910 (1-0)</li>
      </ul>

      <h2>Información de la partida:</h2>
      <p>El negro come una imprecisión al enrocar y no atender a la amenaza, y en consecuencia pierde una pieza menor.</p>

      <iframe width="640" height="480"
      src="https://www.youtube.com/embed/QZO1PqpUbe8" allowfullscreen>
      </iframe>
     `
  },
  {
    title: "  angel39366 - manuelalferez",
    category: "Ajedrez",
    summary: ["Segunda partida de ajedrez comentada."],
    key: "4",
    date: "Agosto 08, 2017",
    content: `<h2>Ficha técnica</h2>
    
      <ul>
        <li><b>Tipo de juego:</b> Blitz [5 min]</li>
        <li><b>Fecha:</b> 8 de Agosto de 2017</li>
        <li><b>Resultado:</b> angel39366 - manuelalferez (0-1)</li>
      </ul>

      <h2>Información de la partida:</h2>
      <p>En la partida podemos ver como el blanco inicia un ataque por el flanco del Rey, creando
       hostilidades al situar el alfil en la gran diagonal de casillas blancas.</p>
      
      <p>Debido a que el blanco pica de <i>"comilón"</i> al capturar ese caballo de <i>f5</i> el negro obtiene la victoria.</p>
      
      <p>También podemos ver que el negro no ha realizado todo su desarrollo, con su alfil 
      negro en su lugar de origen al igual que la torre de </i>a1</i>.</p>
      
      <p>Durante el inicio del juego, el negro no ha puesto a su rey bajo protección realizando el enrroque, 
      a optado por iniciar un rápido ataque: mostrando así iniciativa. </p>
      
      <p>Como veremos, esto no es una buena práctica, ya que si el rival hubiese repelido el ataque
       con éxito, la partida hubiera tenido otro color. </p>
      
      <p class='Citation'>La partida fue grabada en directo, motivo por el que no aparece comentada por voz.</p>

      <iframe width="640" height="480"
      src="https://www.youtube.com/embed/MLvNe7p3Kp0" allowfullscreen>
      </iframe>
     `
  },
  {
    title: "maksmc - manuelalferez",
    category: "Ajedrez",
    summary: ["Tercera partida de ajedrez comentada."],
    key: "5",
    date: "Agosto 09, 2017",
    content: `<h2>Ficha técnica</h2>
    
      <ul>
        <li><b>Tipo de juego:</b> Blitz [5 min]</li>
        <li><b>Fecha:</b> 8 de Agosto de 2017</li>
        <li><b>Resultado:</b> maksmc - manuelalferez (0-1)</li>
      </ul>

      <h2>Información de la partida:</h2>
      <p>El blanco se rinde al perder la torre, pensaba que podría obtener ventaja al capturar 
      el peón: cayendo en una trampa.</p>


      <p>Al inicio de la partida el negro pierde calidad y más tarde la 
      recupera al encerrar la torre blanca.</p>

      <iframe width="640" height="480"
      src="https://www.youtube.com/embed/PypjHGohAHY" allowfullscreen>
      </iframe>
     `
  },
  {
    title: "aflaguy63 - manuelalferez",
    category: "Ajedrez",
    summary: ["Cuarta partida de ajedrez comentada."],
    key: "6",
    date: "Agosto 09, 2017",
    content: `<h2>Ficha técnica</h2>
    
      <ul>
        <li><b>Tipo de juego:</b> Blitz [15 min]</li>
        <li><b>Fecha:</b> 18 de Julio de 2017</li>
        <li><b>Resultado:</b> aflaguy63 - manuelalferez (0.5-0.5)</li>
      </ul>

      <h2>Información de la partida:</h2>
      <p>Ambos adversarios tuvieron tiempo suficiente para pensar ya que la partida fue de 15 min.</p>
      </p>Es por ello por lo que fue tan reñida y se obtuvo tablas al no poder avanzar el juego.</p>

      <iframe width="640" height="480"
      src="https://www.youtube.com/embed/PypjHGohAHY" allowfullscreen>
      </iframe>
     `
  },
  {
    title: "La curiosidad rompe el ciclo",
    category: "Reflexiones",
    summary: [
      "El primer impulso cuando no tenemos mucho que hacer es hacer una actividad conocida. ¿Por qué?"
    ],
    key: "7",
    date: "Agosto 11, 2019",
    content: `<p>
    El primer impulso cuando no tenemos mucho que hacer es hacer una actividad conocida. Creo que ese 
    comportamiento es interesante prestarle atención.</p>

    <p>Cuando haces una tarea a la que estás habituado/a, el estrés y el esfuerzo que se realiza es 
    mínimo: el cuerpo tiende a ese estado de desinterés en el tiempo que no hay motivación para hacer 
    una actividad más ardua. Además de la disminución de esfuerzo, hay que añadir
    la dimensión del pensar, es decir, <b>cuando es necesario pensar qué hacer requiere plantearse mentalmente
    un conjunto de opciones</b>. Una vez tenemos en mente esas opciones, debemos simular qué opción es la 
    mejor, cuál requiere menos esfuerzo, cuál nos aporta más, etc. </p>

    <p class='Citation'>Pensar resulta una tarea ardua.</p> 

    <p>Por otro lado, <b>un panorama cierto es preferible a uno incierto</b>. Por naturaleza tendemos a huir 
    de la incertidumbre por instinto, ya que podría matarnos en el peor de los casos. Por esa razón, 
    cuando tenemos sobre la mesa dos opciones y una de ellas es conocida, en la mayoría de los casos 
    escogeremos la conocida. La pregunta que surge ahora es, </p>

    <h2>¿Bajo que razón elegimos la incertidumbre? </h2>

    <p>Si eres de las personas que son curiosas por naturaleza, lo conocido te resultará estimulante 
    al principio, después te aburrirá; conoces que A conduce a B, repetir el ciclo una y otra vez 
    es una completa agonía. La razón en este caso es la <b>curiosidad</b>. </p>

    <p>Una muchedumbre de nuevos estímulos son suficientes para mantener nuestro miedo, a lo desconocido, a raya… ¿o no?</p>

    <p>Podemos pensar que la curiosidad es innata, pero mirando a nuestro alrededor vemos a personas que no la tienen. </p>
   
    <h2>La causa que inicia la curiosidad</h2>

    <p>Hay una razón por la que nos levantarnos todos los días de la cama. Al igual que hay una razón por la que nos 
    alimentamos, aunque ésta sea demasiado obvia.</br> 
    Ya que hay un sin fin de causas para cada persona, resulta imposible describirlas todas; por ello nos centraremos en la raíz. </p>

    <p>Para describir la causa madre, me gustaría partir de una premisa: <b>no estamos aislados</b>.</p>

    <p>En el momento en el que nos aproximamos a la incertidumbre, crecemos como persona. <b>Todo lo que 
    crezcamos carece de sentido si no lo compartimos</b>. </p>

    <p>Por ejemplo, imaginemos que estamos aprendiendo a escribir cartas de manera formal. Lo primero 
    que hacemos es preguntar a nuestros contactos. </br>
    No hemos encontrado respuesta y buscamos en internet 
    y ¡Bingo!; hemos encontrado un sitio web donde nos explican paso a paso cómo hacerlo.</p>

    <p>Éste/a gran samaritano/a que ha compartido su conocimiento, tal vez tuvo que hacer el esfuerzo 
    de aprenderlo desde cero. Ahora lo comparte, minimizando el tiempo que tiene que invertir otra persona
    en aprenderlo. </p>

    <p>Retomando la premisa: sabiendo que formamos una <b>red</b> de contactos, (entre los que se hayan 
    familiares, amigos, conocidos y personas con las que rara vez hablamos) al mantener nuestro 
    crecimiento latente y compartiéndolo en nuestra red, ayudamos a construir una red más fuerte. </p>
     `
  }
];

export default posts;
