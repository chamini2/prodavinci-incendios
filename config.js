var config = {
    style: 'mapbox://styles/prodavinci/cklvbe0xo3oz617opusv54hpq',
    accessToken: 'pk.eyJ1IjoicHJvZGF2aW5jaSIsImEiOiJja2x2NzdndzMwNmRxMnFqamhwZWVrcXVhIn0.pezTmI7vngVwKhSThtPc0w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Áreas Protegidas en fuego',
    subtitle: 'Dos décadas de incendios dentro de las Áreas Protegidas Naturales de Venezuela',
    byline: 'By a Digital Storyteller',
    // footer: "Creditos\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <p>Direccion general: <a>Este pana</a></p>\
    // <hr>\
    // <p class='fecha'>CARACAS, 19 DE MARZO DE 2021</p>",
    chapters: [
        {
          id: 'sumario',
          alignment: 'texto-simple',
          hidden: false,
          title: 'Storytelling',
          
          description: 
            " <p>Este es el intertitulo</p><p>Esto es algo&nbsp;</p>\
              <p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no se que mas poner asi que ni modo esto se queda asi&nbsp;</p>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
              layer: 'limiteraisg',
              opacity: 0.9999999,
              duration: 5000
              }
          ],
          onChapterExit: [
              {
              layer: 'limiteraisg',
              opacity: 0
              }
          ]
        },
        {
          id: 'sumario',
          alignment: 'sumario',
          hidden: false,
          description: 
            " <p>Este es el intertitulo</p><p>Esto es algo&nbsp;</p>\
              <p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no se que mas poner asi que ni modo esto se queda asi&nbsp;</p>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
              layer: 'limiteraisg',
              opacity: 0.9999999,
              duration: 5000
              }
          ],
          onChapterExit: [
              {
              layer: 'limiteraisg',
              opacity: 0
              }
          ]
        },
        {
          id: 'sumario',
          alignment: 'infografia',
          hidden: false,
          image: './vzla.jpg',
          description: 
              "Leyenda de la infografia",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
              layer: 'limiteraisg',
              opacity: 0.9999999,
              duration: 5000
              }
          ],
          onChapterExit: [
              {
              layer: 'limiteraisg',
              opacity: 0
              }
          ]
        },
        {
            id: 'pulitzer-example',
            alignment: 'infografia',
            hidden: false,
            image: './pulitzer-center-logo.png',
            description:
                "Leyenda del pulitzer",
            location: {
                center: [-66.55775, -0.36321],
                zoom: 3.48,
                pitch: 21.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'limiteraisg',
                opacity: 0.9999999,
                duration: 5000
                }
            ],
            onChapterExit: [
                {
                layer: 'limiteraisg',
                opacity: 0
                }
            ]
          },
        {
          id: 'sumario',
          alignment: 'texto-avanzado',
          hidden: false,
          image: './pulitzer-center-logo.png',
          description: 
              " <br><hr><br><h3>Este es el autor</h3><br><hr>\
              <br><p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no se que mas poner asi que ni modo esto se queda asi&nbsp;</p>\
                <br><p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no se que mas poner asi que ni modo esto se queda asi&nbsp;</p>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
              layer: 'limiteraisg',
              opacity: 0.9999999,
              duration: 5000
              }
          ],
          onChapterExit: [
              {
              layer: 'limiteraisg',
              opacity: 0
              }
          ]
        },
        {
          id: 'sumario',
          alignment: 'texto-mapa',
          hidden: false,
          title: 'Storytelling',
          
          description: 
            " <p>Este es el intertitulo</p><p>Esto es algo&nbsp;</p>\
              <p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no\
              se que mas poner asi que ni modo esto se queda asi&nbsp;</p>\
              <img src='./vzla.jpg'>\
              <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
              {
              layer: 'limiteraisg',
              opacity: 0.9999999,
              duration: 5000
              }
          ],
          onChapterExit: [
              {
              layer: 'limiteraisg',
              opacity: 0
              }
          ]
        },
        // {
        //     id: 'sumario',
        //     alignment: 'footer',
        //     title: 'Creditos',
        //     description: 
        //         "<p class='creditos'><a>Creditos</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <p>Direccion general: <a>Este pana</a></p>\
        //         <hr>\
        //         <p class='fecha'>CARACAS, 19 DE MARZO DE 2021</p>",
        //   },
    ]
};
