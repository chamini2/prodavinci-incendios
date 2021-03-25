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
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'sumario',
            alignment: 'center',
            hidden: false,
            title: 'Storytelling',
            image: '',
            description: '<p>En 2020  fue el país amazónico con más incendios para su superficie. Tuvo casi el doble de densidad de focos que Brasil. Aunque Venezuela está al norte del continente y tiene incidencia solar directa todo el año, su vegetación es X y el clima X, es un número considerable de incendios.</p> <p>Ese año, Venezuela tuvo más incendios que Australia, Perú, Sudán y Tanzania, juntos.</p>',
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
                opacity: 1,
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
          id: 'aumentoduida',
          alignment: 'right',
          hidden: false,
          title: '',
          image: './path/to/image/source.png',
          description: 'Y al sur, en el estado Amazonas, los incendios dentro del Parque Nacional Duida Marahuaca aumentaron 77% en la segunda década del milenio.',
          location: {
              center: [-65.51547, 3.35576],
              zoom: 10.31,
              pitch: 60.00,
              bearing: -32.73
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'ap',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'ap',
            opacity: 0
          },
        ]
      },
        {
          id: 'sumario',
          alignment: 'texto-simple',
          hidden: false,
          title: 'Storytelling',
          
          description: 
            " <p>Este es el intertitulo</p><p>Esto es algo&nbsp;</p>\
              <p><img src=''></p>\
              <p>Y esto es otra cosa <a href='https://google.com'>con uns linea de hipervinculo</a>&nbsp;y no se que mas poner asi que ni modo esto se queda asi&nbsp;</p>",
          location: {
              center: [-66.55775, -0.36321],
              zoom: 3.48,
              pitch: 21.00,
              bearing: 0
          },
          image: './path/to/image/source.png',
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
          id: 'aumentoduida',
          alignment: 'right',
          hidden: false,
          title: '',
          image: './path/to/image/source.png',
          description: 'Y al sur, en el estado Amazonas, los incendios dentro del Parque Nacional Duida Marahuaca aumentaron 77% en la segunda década del milenio.',
          location: {
              center: [-65.51547, 3.35576],
              zoom: 10.31,
              pitch: 60.00,
              bearing: -32.73
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'ap',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'ap',
            opacity: 0
          },
        ]
      },
        {
          id: 'sumario',
          alignment: 'infografia',
          hidden: false,
          image: './pulitzer-center-logo.png',
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
          id: 'aumentoduida',
          alignment: 'right',
          hidden: false,
          title: '',
          image: './path/to/image/source.png',
          description: 'Y al sur, en el estado Amazonas, los incendios dentro del Parque Nacional Duida Marahuaca aumentaron 77% en la segunda década del milenio.',
          location: {
              center: [-65.51547, 3.35576],
              zoom: 10.31,
              pitch: 60.00,
              bearing: -32.73
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'ap',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'ap',
            opacity: 0
          },
        ]
      },
        {
          id: 'sumario',
          alignment: 'footer',
          hidden: false,
          description: 
              "<p class='creditos'><a>Creditos</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <p>Direccion general: <a>Este pana</a></p>\
              <hr>\
              <p class='fecha'>CARACAS, 19 DE MARZO DE 2021</p>",
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
          id: 'aumentoduida',
          alignment: 'right',
          hidden: false,
          title: '',
          image: './path/to/image/source.png',
          description: 'Y al sur, en el estado Amazonas, los incendios dentro del Parque Nacional Duida Marahuaca aumentaron 77% en la segunda década del milenio.',
          location: {
              center: [-65.51547, 3.35576],
              zoom: 10.31,
              pitch: 60.00,
              bearing: -32.73
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'ap',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'ap',
            opacity: 0
          },
        ]
      },
        {
          id: 'sumario',
          alignment: 'texto-avanzado',
          hidden: false,
          description: 
              " <img src='./pulitzer-center-logo.png'>\
                <hr><h3>Este es el autor</h3><hr>\
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
            id: 'biodiversidad',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<p>Aunque Venezuela tiene 0.6% de la superficie terrestre del planeta, está entre los 10 países con mayor diversidad biológica por densidad de especies en el mundo. Hay al menos unas 137.141 especies de organismos, agrupadas en 1.775 familias y más de 9.200 géneros, en el país. Solo en aves, Venezuela tiene unas 1.394 especies. En comparación, China tiene 1.288 especies, Estados Unidos 860 y Colombia, el país con más especies de aves del mundo, tiene 1.878, según la base de datos de Birdlife International. El 84% de los animales conocidos en el mundo, se encuentran en Venezuela.</p><p>Venezuela también es uno de los 17 países megadiversos, definidos como los países con mayor número de especies endémicas por Conservation International en 1998. Entre estos países megadiversos, Venezuela es el cuarto con mayor número de especies de anfibios, el sexto en aves, el octavo en mamíferos y el noveno en reptiles, según X.</p>',
            location: {
                center: [-67.11378, 6.54361],
                zoom: 5.48,
                pitch: 0.50,
                bearing: 0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'areasprotegidas',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<p><p>Para proteger el patrimonio natural, los países crean Áreas Protegidas (AP). Son herramientas jurídicas que restringen las actividades que se pueden hacer dentro del área, poniendo como prioridad la conservación de la biodiversidad y los paisajes. 9.6% de la superficie terrestre es considerada Área Protegida. </p><p>Hay seis “categorías de uso” definidas por la IUCN, que establecen niveles distintos de conservación y se traducen en medidas más o menos estrictas. Cada país, región, entidad privada o comunidad indígena, puede adaptar las categorías a sus leyes. Estas categorías son reconocidas por las Naciones Unidas como el estándar global. </p><p>La ley venezolana enmarca los distintos tipos de Áreas Protegidas dentro de las Áreas Bajo Régimen de Administración Especial, o “ABRAE”, por su acrónimo. </p> <p>Hay 20 (o 23?) categorías de ABRAE definidas en la Ley Orgánica de la Ordenación del Territorio (LOOT) de 1983. Cada categoría tiene un régimen de manejo diferente. Algunas definen espacios para la explotación minera, la actividad agrícola, la protección del patrimonio histórico, cultural o arqueológico, entre otros. Solo cinco de ellas —los Parques Nacionales, Monumentos Naturales, Refugios, Reservas y Santuarios de Fauna Silvestre —son consideradas Áreas Protegidas (AP), porque su objetivo primario es la conservación. </p>',
            location: {
                center: [-67.11378, 6.54361],
                zoom: 5.48,
                pitch: 0.50,
                bearing: 0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },

            ]
        },
        {
            id: 'decadas',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p><p>En Venezuela hay 80 Áreas Protegidas Naturales para la conservación, incluyendo 44 Parques Nacionales, 21 Monumentos Naturales, 7 Refugios de Fauna Silvestre, 7 Reservas de Fauna Silvestre y 1 Santuario de Fauna Silvestre. Estos territorios suman 220.581 kilómetros cuadrados; el 24% de la superficie de Venezuela. Es el equivalente a 274 veces el área de la Gran Caracas o a todo el territorio de los estados Amazonas y Anzoátegui, juntos. </p><p>Durante la segunda década del milenio, los incendios dentro de Áreas Protegidas para la conservación aumentaron 8% con respecto a la primera, según un análisis de datos MODIS del INPE. </p>',
            location: {
                center: [-66.16609, 7.99737],
                zoom: 5.99,
                pitch: 55.50,
                bearing: -1.25
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'aumentocatatumbo',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>Pero los aumentos de una década a la otra son desiguales. </p><p>En el Parque Nacional Ciénagas de Juan Manuel, en el estado Zulia, aumentaron 134% en la segunda década del milenio. </p>',
            location: {
                center: [-71.94444, 9.50852],
                zoom: 9.20,
                pitch: 60.00,
                bearing: -30.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'aumentoperija',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'En el Parque Nacional Sierra de Perijá, también en Zulia, aumentaron 74%.',
            location: {
                center: [-73.13399, 9.49001],
                zoom: 10.23,
                pitch: 60.00,
                bearing: 20.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'aumentosanluis',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Al este, en el Parque Nacional Sierra de San Luis, en el estado Falcón, aumentaron 83%.',
            location: {
                center: [-69.53169, 11.29586],
                zoom: 11.13,
                pitch: 60.00,
                bearing: -74.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'aumentoniquitao',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'En el Monumento Natural Teta de Niquitao, que protege la montaña más alta del estado Trujillo y parte de la Cordillera de los Andes, los incendios aumentaron 153% de una década a la otra.',
            location: {
                center: [-70.54364, 9.08760],
                zoom: 13.31,
                pitch: 60.00,
                bearing: -15.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
          ]
        },
        {
            id: 'aumentoduida',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'Y al sur, en el estado Amazonas, los incendios dentro del Parque Nacional Duida Marahuaca aumentaron 77% en la segunda década del milenio.',
            location: {
                center: [-65.51547, 3.35576],
                zoom: 10.31,
                pitch: 60.00,
                bearing: -32.73
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
          ]
        },
        {
            id: 'aumentosapsdecadas',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p>En mayor o menor medida, entre 2001 y 2020 los incendios aumentaron en X de las 80 Áreas Protegidas para la conservación— incluyendo X Parques Nacionales, X Monumentos Naturales, X Refugios de Fauna Silvestre, X Reservas de Fauna Silvestre y X Santuario de Fauna Silvestre —que hay en el país.</p>GRID de tendencias de cada AP + tendencia nacional<p>Pero si vemos sólo la segunda década, el panorama empeora. </p>',
            location: {
                center: [-65.82154, 6.90666],
                zoom: 5.31,
                pitch: 38.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },
            ]
        },
        {
            id: '2020',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p>Para el 45% de las Áreas Protegidas, el 2020 fue el peor año en los últimos 8 años. Es el peor año en registro desde que el sensor satelital VIIRS de la NASA, comenzó a monitorear focos de calor en 2012. </p>Viz 4: Boxplot - con dispersión mensual de densidad de focos por AP<p>Cuatro Áreas Protegidas quintuplicaron sus incendios en 2020 en comparación con su promedio de los últimos 8 años, siete los cuadruplicaron, once los triplicaron y diecinueve los duplicaron, según datos VIIRS. En 2020 los incendios dentro de Áreas Protegidas aumentaron 72%  con respecto al promedio anual de los últimos 8 años.</p>Viz Gráfico de masas: promedio vs aumento de esas APs</p>',
            location: {
              center: [-65.82154, 6.90666],
              zoom: 5.31,
              pitch: 38.50,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },
            ]
        },
        {
            id: 'fuego_fondoblanco',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>El fuego necesita tres ingredientes para existir: oxígeno, combustible e ignición.</p> <p>Cuando nació la tierra, la atmósfera era una combinación de gases venenosos. No había incendios porque no había oxígeno. Hace unos 2.3 mil millones de años comenzó a acumularse por fotosíntesis. Cianobacterias agarraban dióxido de carbono y liberaban oxígeno como producto de desecho.</p> <p>El oxígeno es tan importante para el fuego, que se pueden apagar asfixiandolos con arena. Extraer el oxígeno frena la combustión — una reacción química. Usar agua tiene dos efectos: reduce la cantidad de oxígeno a disposición del fuego, pero más importante, la energía en el calor pasa a evaporar el agua en vez de calentar el combustible que permite que la reacción de combustión continúe.</p> <p>Los primeros fuegos aparecieron con las plantas. Aunque el planeta tenía X mil millones de años orbitando el sol, las plantas medían apenas centímetros y su distribución era limitada; crecían en parches cerca del agua. El primero fue fue pequeño y ocurrió hace unos 400 millones de años. Por primera vez hubo algo para quemar: combustible.</p>  <p>Las plantas crecían por división celular en sus brotes —como los helechos, cuyas finas ramas brotan del tallo como dedos de una mano. Pero los tallos no podían ensancharse ni endurecerse, entonces no aguantaban grandes alturas. Millones de años después, cambió la composición. Evolucionaron. Antes eran solo de celulosa, ahora también de lignina, un polímero fuerte que les dio rigidez. Mezclando celulosa y lignina en sus tejidos internos, los tallos desarrollaron madera. Su dureza permitió crecer nuevas alturas. Se formaron los primeros árboles. Luego crecieron los bosques. Y como la lignina se descompone más lento, los árboles muertos se comenzaron a acumular en los suelos. Los incendios aumentaron. Había más combustible para quemar.</p> <p>Si la edad de la tierra —X— fuera un año de calendario, las cianobacterias aparecieran el X, las plantas el X y los bosques el X.</p> <p>Carbón fosilizado encontrado en sedimentos profundos sugiere que los primeros grandes incendios coincidieron con el nacimiento de los bosques, hace 370 millones de años. Los relámpagos o las erupciones volcánicas los comenzaban; eran la ignición. Este es el tercer ingrediente.</p> <p>Hay tres causas naturales de ignición. Los relámpagos, que a veces ocurren entre nube y nube, sin necesitar lluvia, los volcanes y la fricción entre piedras. Pero la gran mayoría de incendios que ocurren hoy son iniciados por humanos. Somos responsables de al menos el 84% de los incendios, según un estudio de la Universidad de Boulder, Colorado, en Estados Unidos. Aunque el porcentaje varía. En los trópicos, por ejemplo, hay pocos relámpagos: en Venezuela el número iniciado por humanos debe ser mayor. XXXX 96%</p> <p>La combinación de estas tres variables, especialmente el combustible y la ignición, explican dónde y cuándo hay incendios.</p>',
            location: {
                center: [-67.37177, 9.93491],
                zoom: 13.48,
                pitch: 59.00,
                bearing: -51.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },


            ]
        },
        {
            id: 'cordilleracosta',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>La Cordillera de la costa separa al Mar Caribe de las depresiones de Lara y Unare, y hace quinientos años estaba cubierta por distintos tipos de bosques con árboles de 60 metros. En las cumbres altas, los bosques producían nubes. La vegetación era húmeda, rara vez se quemaba.</p> <p>Después de la conquista, los pobladores comenzaron a quemar los valles de la cordillera para sembrar, construir y cazar. El fuego, con ayuda del viento y la vegetación seca, escaló poco a poco las laderas de las montañas. Quemó el bosque, y en su lugar, nacieron sabanas y arbustales. El paisaje marrón amarillento de esos valles, con hierbas afiladas que bailan con el viento, fue creado por el hombre. Son paisajes de fuego.</p>  <p>Esta cordillera es altamente diversa en especies. Hay unas 3.500 plantas superiores; son más especies que todo X (país y su total de plantas). También hay doce especies de aves, 21 anfibios y 11 reptiles son endémicos de la cordillera. Significa que no existen en ningún otro lugar del mundo.</p> <p>El eje centro-norte de Venezuela concentra la mayoría de la población y actividad industrial del país, y coincide con la Cordillera de la Costa y con seis Áreas Protegidas: Parque Nacional El Ávila, Parque Nacional Macarao, Parque Nacional Henri Pittier, Parque Nacional San Esteban, Monumento Natural Cueva Alfredo Jahn y Monumento Natural Pico Codazzi. Es la región con mayor densidad poblacional y mayor impacto sobre la biodiversidad.</p> ',
            location: {
                center: [-66.74039, 10.58888],
                zoom: 11.20,
                pitch: 60.00,
                bearing: -88.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'henripittier',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>El Parque Nacional Henri Pittier protege parte de esta cordillera. Creado en 1937, fue la primera Área Protegida de Venezuela. Los incendios de los últimos ocho años se concentran en las laderas colindantes con Maracay, la octava ciudad más poblada.</p> <p>La conducta del fuego está muy influenciada por la inflamabilidad del combustible que se queme. Dependiendo de qué especie de árbol, gramínea, arbusto o matorral, se queme, la intensidad de propagación, la velocidad y la temperatura del fuego va a ser diferente.</p>',
            location: {
                center: [-67.52885, 10.32045],
                zoom: 11.28,
                pitch: 60.00,
                bearing: -13.63
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'henripittierladeras',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>Hoy crecen gramíneas en estas laderas, que tienen vidas cortas. Sus hojas largas y finas tienen más superficie por volumen para entrar en contacto con el calor. Se secan rápido. Además son muy inflamables, haciéndolas buen combustible.</p> <p>Cuando llega la sequía, deja de llover y aumentan las temperaturas. Entonces la vegetación se seca y se genera combustible. Solo falta una chispa.</p> <p>La mayoría de incendios dentro de las Áreas Protegidas de Venezuela se concentran entre noviembre y mayo, con picos en marzo.</p> <div class="flourish-embed flourish-chart" data-src="visualisation/5490381"><script src="https://public.flourish.studio/resources/embed.js"></script></div> <p>Pero hay diferencias por región, marcadas por costumbres de quema. En la Cordillera de la Costa y sus Áreas Protegidas, las poblaciones urbanas comienzan a quemar X. </p> <p>En sequía nace un ciclo: más incendios llevan al crecimiento de más gramíneas, que a su vez llevan a más incendios y a más gramíneas. Al mismo tiempo, en las fronteras entre el bosque y las sabanas, la temperatura aumenta y la humedad baja. Los bordes de los bosques —que normalmente son demasiado húmedos para quemarse— se degradan. Árboles grandes que requieren mucha agua, mueren y caen. Los troncos se acumulan, pero crecen menos hongos porque hay menos humedad, entonces las hojas secas y los troncos muertos tardan más en descomponerse. Crece la cantidad de combustible, y el próximo incendio de sabana se adentra poco en el bosque. En esos pedazos de bosque crecen gramíneas. Y el ciclo se repite. El próximo incendio entrará más en el bosque, ayudado por las gramíneas que crecieron después del último incendio. </p> <p>La gramíneas, comunes en sabanas y herbazales, alimentan la mayoría de los incendios en el planeta. Son la vegetación que más se quema. </p> <p>El aumento en incendios dentro de las Áreas Protegidas visibiliza problemas de gestión y manejo. Aunque el clima, topografía y vegetación influyen en la intensidad, comportamiento y frecuencia del fuego en cada área, no explican la ignición. </p>',
            location: {
                center: [-67.52885, 10.32045],
                zoom: 11.28,
                pitch: 60.00,
                bearing: -13.63
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'regiones',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p>Entre 2012 y 2020, las Áreas Protegidas con máyor densidad de incendios están en la región de los Llanos, donde predominan las sabanas de gramíneas, y en el eje norte-costero, donde se concentra la población. </p> <p>De las quince áreas más afectadas, cuatro están en el estado Guárico, tres en Apure, dos en Portuguesa y dos en Miranda. </p>',
            location: {
                center: [-66.80547, 7.59797],
                zoom: 5.28,
                pitch: 1.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'aguaro',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p><p>El Parque Nacional Aguaro-Guariquito, en la región de los Llanos Centrales del estado Guárico, es el área protegida más extensa al norte del Orinoco y la que más sufre incendios en el país. Además es la tercera con mayor densidad de focos o incendios para su superficie, en los últimos ocho años.</p> <p>Es una planicie aluvial de arena, lima y arcilla, cubierta por distintos tipos de sabanas y bosques. La mayoría de los suelos son ácidos y pobres en nutrientes. Hay ríos de aguas claras, provenientes de manantiales o del lavado de morichales y sabanas. Es agua limpia, apta para el consumo doméstico. En las orillas de los ríos crecen bosques ribereños, corredores ecológicos que permiten el intercambio genético, ayudando a que los ecosistemas sean más diversos, y producen energía y nutrientes para peces, aves y mamíferos. Estos bosques son refugios para plantas y animales.</p> <p>Aunque hay bosques ribereños en 14 estados del país, todos los que están al norte del Orinoco se encuentran en peligro o en peligro crítico, según el Libro Rojo. Los incendios son una de las mayores amenazas. </p> <p>Dentro del parque hay unas 200 especies de flora y fauna. Al menos 6 de las plantas son endémicas. Entro los animales hay perro de agua, oso hormiguero, báquiro de collar (Tayassu tajacu), chigüire (Hydrochaeris hydrochaeris), picure (Dasyprocta leporina), danta (Tapirus terrestris), cunaguaro (Leopardus tigrinus), puma (Puma concolor), anaconda, mono araguato, mono araña y mono capuchino. También hay animales en peligro de extinción como la tonina o delfín de río (Inia geoffrensis), endémica de América del Sur, el manatí (Trichechus manatus), el jaguar (Panthera onca) y el caimán del Orinoco (Crocodylus intermedius), endémico de la cuenta del Orinoco. </p><p>El caimán del Orinoco puede ser tan largo como un minibus de 12 puestos. Sus poblaciones se extendían entre Colombia y Venezuela, en grandes ríos de aguas turbias. En Venezuela había millones de individuos en los llanos, sabanas inundables, áreas boscosas e incluso en zonas de piedemonte andino. Hoy quedan poblaciones pequeñas y aisladas. La UICN estima que hay menos de 250.000 individuos en el mundo. Está en peligro crítico de extinción, y es de las poblaciones de cocodrilos más amenazadas del mundo. En los años treinta lo cazaban para hacer zapatos, abrigos, carteras, botas y otros artículos de piel, pero hoy la mayor amenaza es la pérdida de su hábitat.</p><p>Se desconoce el estatus de las poblaciones de animales amenazados dentro de Aguaro-Guariquito.</p> ',
            location: {
              center: [-65.90672, 8.29121],
              zoom: 8.19,
              pitch: 10.00,
              bearing: -0.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            ]
        },
        {
            id: 'doce',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>La mayor concentración de incendios ocurren en la frontera suroeste del Parque Nacional, en los bosques ribereños amenazados. El 42% de los focos ocurrieron en el 11% del territorio, aproximadamente. </p> <p>Entre 1986 y 2016, los bosques ribereños —visibles en las imágenes con un verde frondoso—han casi desaparecido. Desliza el botón rojo para ver la diferencia entre la primera imagen tomada en 1986, y la segunda, en 2016</p> <div class="flourish-embed flourish-photo-slider" data-src="visualisation/5491007"><script src="https://public.flourish.studio/resources/embed.js"></script></div>',
            location: {
                center: [-66.83653, 8.12426],
                zoom: 10.96,
                pitch: 40.50,
                bearing: -10.45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'ganaderia',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>La ganadería extensiva, con un animal cada 10 hectáreas, también ha sustituido las sabanas naturales por pastizales de especies introducidas. Entre 1988 y 2010 se perdieron un tercio de las sabanas abiertas del país, según el Libro Rojo. El 95% de todas estas sabanas están intervenidas por el hombre.</p> <p>Los ganaderos queman para X, son prácticas comunes de décadas. Estas quemas anuales afectan las dinámicas de nutrientes en el sistema y favorecen el reemplazo de vegetación nativa por gramíneas y leguminosas para alimentar al ganado. Entre la vegetación para el ganado, hay especies invasoras altamente agresivas como la yaragúa (Hyparrhenia rufa).</p> <p>Esto es importante porque X. Además son gramíneas con un metabolismo fotosintético C4. referencia a Sabanas del Henri Pittier.</p>',
            location: {
                center: [-66.80297, 8.20035],
                zoom: 17.01,
                pitch: 31.50,
                bearing: -20.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'incendioganaderia',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: '<p>Este incendio afectó un área de 2.868 kilómetros cuadrados del Parque Nacional, equivalente a dos veces el estado Vargas.</p>',
            location: {
                center: [-66.74161, 8.25337],
                zoom: 14.98,
                pitch: 48.50,
                bearing: -10.45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'hola',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'El Monumento Natural Arístides Rojas, conocido como los Morros de San Juan, es el Área Protegida con más incendios para su tamaño en los últimos 8 años. Y están aumentando. El 2020 fue el peor año en incendios para los Morros de San Juan en los últimos veinte años. En ese año los incendios cubrieron el equivalente a un cuarto de todo el Monumento Natural, duplicando el número de focos con respecto al promedio de los últimos 8 años.',
            location: {
                center: [-67.37177, 9.93491],
                zoom: 13.48,
                pitch: 59.00,
                bearing: -51.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
           },

            ]
        },
        {
            id: 'como',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'De todos los incendios detectados de 2012 a 2020, la mitad están concentrados en la frontera con San Juan de los Morros, la ciudad con mayor densidad de población del estado Guárico.',
            location: {
              center: [-67.37177, 9.93491],
              zoom: 13.48,
              pitch: 59.00,
              bearing: -51.95
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'focosenaps',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },
            {
            layer: 'focosenaps',
            opacity: 0
          },

            ]
        },
        {
            id: 'estas',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'La población de San Juan ha crecido X% en los últimos X años. En X habían X habitantes, hoy hay X, según X. El crecimiento demográfico ha traído una expansión desorganizada de la ciudad, resultando en construcciones dentro del Monumento Natural.',
            location: {
              center: [-67.38694, 9.92199],
              zoom: 15.67,
              pitch: 49.50,
              bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },

            ]
        },
        {
            id: 'yo',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'A través de la revisión de imágenes satelitales detectamos al menos X invasiones ilegales. Cuando se creó el Monumento en los cuarentas no había poblaciones dentro del área, dice el decreto 318. Esto significa que las construcciones dentro del Monumento Natural ocurrieron luego de su creación. Son ilegales. La Ley Orgánica de la Ordenación del Territorio (LOOT) de 1983, que define las Áreas Protegidas en Venezuela dentro de las “Áreas Bajo Régimen de Administración Especial” o “ABRAE” por su acrónimo, prohíbe nuevos asentamientos humanos dentro de Monumentos Naturales.',
            location: {
              center: [-67.42390323777418, 9.93920417882319],
              zoom: 15.67,
              pitch: 49.50,
              bearing: -14.40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
            },

            ]
        },
        {
            id: 'bien',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'Calculamos que en 2021 alrededor del 4.5% del territorio del Monumento Nacional está intervenido. Son unos 11.3 kilómetros cuadrados de asentamientos y siembras agrícolas, el equivalente a la extensión del municipio Chacao en Caracas. Las invasiones se intensificaron en la última década, como lo muestran las imágenes.',
            location: {
              center: [-67.40713, 9.93569],
              zoom: 12.62,
              pitch: 17.00,
              bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              },
              {
              layer: 'invasionesmnar',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },
              {
              layer: 'invasionesmnar',
              opacity: 0
            },

            ]
        },
        {
            id: 'gracias',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'Hay siembras de diferentes escalas. La mayoría parecen de subsistencia, pero algunas siembras llaman la atención por su extensión. La siguiente imagen satelital de comienzos de 2021 muestra una parcela de 11 hectáreas —equivalente a 17 canchas de fútbol— dentro del Monumento, a tan solo 411 metros de los Morros.',
            location: {
              center: [-67.40154, 9.92742],
              zoom: 15.62,
              pitch: 54.00,
              bearing: 52.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'por',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'La expansión urbana también amenaza al Monumento Natural Loma de León, ubicado en el estado Lara bordeando la ciudad de Barquisimeto, la cuarta más poblada del país. En 2020, los incendios en Loma de León se sextuplicaron. Es el AP donde más aumentaron los incendios en 2020, en comparación con su promedio. Aumentaron casi 500% con respecto a su promedio anual de los últimos 8 años.',
            location: {
              center: [-69.36742, 10.05286],
              zoom: 12.61,
              pitch: 59.50,
              bearing: -146.24
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
             },
             {
             layer: 'focosenaps',
             opacity: 1,
             duration: 5000
            }
            ],
            onChapterExit: [
              {
              layer: 'focosenaps',
              opacity: 0
             },
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'nueveypico',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './path/to/image/source.png',
            description: 'Este monumento se creó en 1989 para proteger un cerro de 1.300 metros frente a la ciudad de Barquisimeto, de ecosistemas semiáridos. Es un área de transición entre la Cordillera de los Andes y la Cordillera de la Costa. Matorrales, espinares, bosques secos y sabanas, albergan 5 especies de vegetación endémicas de Lara y al menos otras 116 especies. En fauna, hay mamíferos como venados, cachicamos, báquiros, onzas (Herpailurus yagouaroundi), zorros y tigres (leopardus wiedii). El cerro también es un importante refugio para una de las especies más amenazadas del país, el cardenalito (Carduelis cucullata), y para otra especie endémica de Colombia y Venezuela que está en peligro crítico, la marmosa de desiertos.',
            location: {
              center: [-69.39798, 9.99009],
              zoom: 12.52,
              pitch: 60.00,
              bearing: -158.41
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
             },
             {
             layer: 'focosenaps',
             opacity: 1,
             duration: 5000
            }
            ],
            onChapterExit: [
              {
              layer: 'focosenaps',
              opacity: 0
             },
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'preguntar',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'En los últimos años, la ciudad ha entrado en Loma de León. Pero las autoridades responsables, nunca señalizaron la frontera entre el área protegida y la ciudad. Los límites del monumento no están definidos en el terreno. En el sector “El Martillo”, hay al menos cuatro comunidades asentadas ilegalmente dentro del monumento: Asoprado, Valle Verde I, Valle Verde II y La Batalla.',
            location: {
              center: [-69.45489, 10.02843],
              zoom: 14.67,
              pitch: 49.50,
              bearing: -144.64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'que',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Incluso, hay infraestructura industrial dentro del Monumento Natural. La Alcaldía del Municipio Iribarren y la Gobernación del Estado Lara construyeron servicios de agua, luz, cloaca, vialidad, escuelas y módulos de policía para estas comunidades, aunque están dentro de un área protegida estricta que lo prohíbe. La zona de “El Martillo” tenía importantes matorrales que servían de alimento para el cardenalito.',
            location: {
              center: [-69.45667, 10.02823],
              zoom: 17.58,
              pitch: 43.00,
              bearing: -132.81
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'tengas',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Para el año 2005 sólo había una persona encargada de la vigilancia, manejo y administración de esta área de 7.275 hectáreas. Su labor incluía emitir todos los expedientes de infracciones por invasión. Además, no había vehículos. Todas las Áreas Protegidas del estado Lara — cuatro Parques Nacionales y este Monumento Natural— debían compartir la misma camioneta. Los demás vehículos fueron robados, según reportes de ParksWatch. En 2021 nuestra investigación encontró que X',
            location: {
              center: [-69.50113, 10.08157],
              zoom: 9.57,
              pitch: 46.00,
              bearing: -77.61
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'feliz',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'El Parque Nacional Ciénagas del Catatumbo fue la segunda área protegida con mayor aumento de incendios en 2020. Los focos aumentaron 411% en comparación con su promedio de los últimos ocho años. La Reserva de Fauna Silvestre Ciénagas de Juan Manuel, que colinda con este Parque Nacional y protege la misma ciénaga, fue el doceavo con más aumento, de ochenta áreas protegidas analizadas.',
            location: {
              center: [-71.94811, 9.44522],
              zoom: 9.48,
              pitch: 60.00,
              bearing: -12.63
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
              }
            ],
            onChapterExit: [
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        },
        {
            id: 'tarde',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Un estudio que preparó el Consejo Zuliano de Planificación para la OEA, un año antes de la creación de la Reserva de Fauna Silvestre en 1975, menciona la presencia de ganaderos en los márgenes del río Santa Ana, agricultores en el borde occidental de la ciénaga y a lo largo del río Catatumbo, y una población flotante que caza y pesca para subsistir. La mayor concentración de focos de calor entre 2012 y 2020 bordea el río Santa Ana, al noroeste de la AP. También hay importantes focos en el borde occidental de la ciénaga, cerca del río Catatumbo. La quema se concentra posiblemente en las mismas zonas que en 1975, aunque hoy sean territorios protegidos.',
            location: {
              center: [-72.08122, 9.32573],
              zoom: 9.48,
              pitch: 26.00,
              bearing: -8.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
              layer: 'ap',
              opacity: 1,
              duration: 5000
             },
             {
               layer: 'focosenaps',
               opacity: 1,
               duration: 5000
             }
            ],
            onChapterExit: [
              {
              layer: 'focosenaps',
              opacity: 0
             },
              {
              layer: 'ap',
              opacity: 0
             },

            ]
        }

    ]
};
