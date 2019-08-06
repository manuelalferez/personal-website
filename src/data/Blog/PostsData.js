const posts = [
  {
    title: "¿Qué es [at] y [dot]?",
    category: "Computing",
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
];

export default posts;
