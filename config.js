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
            id: 'sumario-example',
            alignment: 'sumario',
            hidden: false,
            description: 
              " <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\
              essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum \
              passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>",
            location: {
                center: [-66.55775, -0.36321],
                zoom: 3.48,
                pitch: 21.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
          },  
        {
          id: 'text-simple-example',
          alignment: 'texto-simple',
          hidden: false,
          title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
          
          description: 
            " <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui \
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <a href='https://google.com'>sed quia non \
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</a>. Ut enim ad \
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'infografia-example',
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
          callback: ''
        },
        {
            id: 'pulitzer-example',
            alignment: 'infografia',
            hidden: false,
            image: './pulitzer-center-logo.png',
            description:
                "Leyenda del pulitzer",
            location: {
                center: [-60.55775, -0.36321],
                zoom: 3.48,
                pitch: 21.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: ''
          },
        {
          id: 'texto-avanzado-example',
          alignment: 'texto-avanzado',
          hidden: false,
          image: './pulitzer-center-logo.png',
          description: 
            `
                <br><hr><br><h3>Este es el autor</h3><br><hr>
                <br><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui \
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <a href='https://google.com'>sed quia non \
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</a>. Ut enim ad \
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
                consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\
            `,
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-example',
          alignment: 'texto-mapa',
          hidden: false,
          title: 'Storytelling',
          
          description: 
            " <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta\
              sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia\
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui \
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, <a href='https://google.com'>sed quia non \
              numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</a>. Ut enim ad \
              minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi\
              consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae \
              consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>\
              <img src='./vzla.jpg'>\
              <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>",
          location: {
              center: [-36.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        }
    ]
};
