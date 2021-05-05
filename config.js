var config = {
    style: 'mapbox://styles/prodavinci/cklvbe0xo3oz617opusv54hpq',
    accessToken: 'pk.eyJ1IjoicHJvZGF2aW5jaSIsImEiOiJjajRrNzdnY2owZjZvMzNxc3BqMWVwemQ5In0.F1OID6olptUSxTyxnVfUyQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    // title: 'Áreas Protegidas en fuego',
    // subtitle: 'Dos décadas de incendios dentro de las Áreas Protegidas Naturales de Venezuela',
    // byline: 'By a Digital Storyteller',
    chapters: [
        {
          id: 'sumario',
          alignment: 'sumario',
          hidden: false,
          description: `
          En 2020, Venezuela fue el país de la región Amazónica con más incendios forestales por kilómetro cuadrado. Tuvo casi el doble que Brasil. Ese año las áreas protegidas del país, espacios naturales resguardados por su biodiversidad, sufrieron su peor año de incendios en registro. Cerca del 99% fueron provocados por la población. En los últimos veinte años los focos aumentaron en 63 de las 80 áreas protegidas del país.
          `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-1',
          alignment: 'texto-avanzado',
          hidden: false,
          showMap: true,
          image: './pulitzer-center-logo.png',
          description: `
            <br/><hr/><br/><h2>Por Helena Carpio</h2><br/><hr/><br/><br/>
            Una nube marrón y densa se estacionó sobre Caracas en marzo de 2020. Pasaron semanas y no se movía. Las laderas del Ávila sólo eran visibles de noche, cuando pequeños incendios, como finas corrientes de lava, revelaban la silueta de la cordillera. Pero estos fuegos no explicaban el humo. Lejos, algo grande ardía.
            <br/><br/>
            Costaba respirar, el pecho dolía. Por Twitter cientos de personas se quejaban, pero no había información sobre el origen del humo. Me asomé por el balcón tratando de detectar algún incendio o de entender la dirección del viento, pero el ardor me obligó a cerrar los ojos. Bajo la ventana de mi sala, montículos de cenizas se acumulaban en las esquinas. Mientras más caliente era el fuego, más liviano era su carbón. Suspendido en el viento, esos esqueletos de árboles podían haber viajado cientos de kilómetros, pero ¿desde dónde? ¿Cuántos incendios había en Venezuela en ese instante? ¿Qué los prendió y por qué?
            <br/><br/>
            Entré en el mapa Global Forest Watch, una plataforma web que publica alertas de incendios casi en tiempo real con datos de satélites de la NASA. Había puntos rojos, focos de calor, en todos los parques nacionales que rodean Caracas. En el extremo este de la cordillera de la Costa, Chuspa y Chirimena eran una sola mancha roja, aunque los separan 15 kilómetros de distancia. Busqué al sur y encontré lo mismo. Del Caribe hasta Amazonas, las áreas protegidas, delimitadas por los gobiernos como espacios estrictos para la conservación de su biodiversidad y paisajes, ardían.
            <br/><br/>
            No hay sistema público de monitoreo de incendios en Venezuela. Los datos satelitales eran la única forma de entender qué ocurría. Descargué los últimos veinte años de focos de calor registrados por dos sensores: el Espectrorradiómetro de imágenes de media resolución (MODIS) y el Radiómetro de Imágenes en el infrarrojo visible (VIIRS). Comencé a investigar.
            <br/><br/>
            En Venezuela hay 80 áreas protegidas (AP) que deberían tener sistemas de monitoreo y prevención de incendios, de vigilancia, investigación científica, educación y resguardo de su biodiversidad. Conocía menos de la mitad de las áreas.
          `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsTODAS_zoomout',
            opacity: 0.50,
            duration: 100
            }
          ]
        },
        {
          id: 'texto-mapa-1',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          44 parques nacionales,
                      `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsPN',
            opacity: 1,
            duration: 2000
            },
              ],
          onChapterExit: [
            {
            layer: 'APsPN',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-2',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          21 monumentos naturales*,
                      `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsMN',
            opacity: 1,
            duration: 2000
            },
              ],
          onChapterExit: [
            {
            layer: 'APsMN',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-3',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          7 refugios de fauna silvestre, 7 reservas de fauna silvestre y 1 santuario de fauna silvestre,
                      `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsRFS_RF_SFS',
            opacity: 1,
            duration: 2000
            },
              ],
          onChapterExit: [
            {
            layer: 'APsRFS',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-4',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          sumaban el 24% de la superficie del país: un área equivalente a 274 veces la Gran Caracas o al territorio de los estados Amazonas y Anzoátegui juntos. Era uno de los sistemas de AP más extensos del mundo. Pero la ley venezolana no las llama AP: son parte del sistema de Áreas Bajo Régimen de Administración Especial (ABRAE, por su acrónimo). Cada país adapta el concepto internacional de AP a sus leyes.
                      `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterExit: [
            {
            layer: 'APsTODAS_zoomout',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-2',
          alignment: 'texto-avanzado',
          hidden: false,
          showMap: true,
          image: '',
          description: `
            Busqué una herramienta que permitiera visualizar y explorar los datos. Necesitaba hacer zoom in y zoom out, alejar y acercar los incendios para ver su contexto: ¿qué había cerca?, ¿ocurrían en lugares remotos o cerca de poblados?, ¿eran recurrentes en una zona? Desde el espacio, la región de los Llanos o el sur del Orinoco parecen inhóspitos y salvajes, como si existiesen lejos de la humanidad. Pero al hacer zoom en el mapa y acercar, aparecen rastros de civilización. Carreteras que cortan cordilleras, hogares en las orillas de los ríos, siembras dentro de los bosques, cicatrices de fuego en cuadrados perfectos.
            <br/><br/>
            Hace 300 años los humanos se concentraban en el 5% de la superficie terrestre. La mitad del planeta era prácticamente virgen. Hoy más del 75% de la Tierra está intervenida. Apenas quedan pequeños refugios de naturaleza, remanentes, que solo se hacen evidentes al compararlos con la escala de nuestra ocupación. La mayoría del planeta ya no es natural, es humana; la naturaleza está sitiada por el hombre.
            <br/><br/>
            Mapee los incendios dentro de cada área protegida en Venezuela. El resultado me sorprendió. En algunos parques nacionales no había espacios libres de fuego; prácticamente todo parecía haberse quemado en los últimos ocho años. En otros monumentos naturales, los incendios ocurrían en los mismos lugares, y en algunos refugios y reservas solo aparecieron focos en los últimos años. Había incendios en casi todas las AP del país. ¿Qué podía causar tanto fuego? ¿Estas áreas no están protegidas?
            <br/><br/>
            Contacté a Edgard Yerena, profesor del Departamento de Estudios Ambientales de la Universidad Simón Bolívar, en Caracas, y exjefe de planificación de la Dirección de Parques Nacionales de INPARQUES. Los incendios naturales normalmente comienzan por relámpagos o erupciones volcánicas, me explicó. En Venezuela, los relámpagos suelen estar acompañados por lluvia y no hay volcanes. “Cerca del 99% de los incendios en el país los comienza la gente”, afirmó. Los venezolanos estaban quemando sus AP.
            <br/><br/>
            La nube sobre Caracas se disipó con las primeras lluvias de abril. Mucha gente, incluyéndome, tuvo tos por varios días. Las partículas y gases en el humo pueden generar asma, irritación e inflamación del sistema respiratorio; afectan el sistema inmunológico, especialmente en niños; aumentan el riesgo de infecciones respiratorias como pulmonía y de paros cardíacos en un 70%. Científicos todavía descubren efectos nuevos del humo en el cuerpo.
            <br/><br/>
            Los incendios pueden tener impactos trascendentales e irreversibles en espacios naturales. A finales de 2019, los incendios en Australia calcinaron más de mil millones de animales: incluyendo canguros, koalas y otras especies amenazadas con extinción. Además de herir o matar plantas y animales, el fuego puede cambiar hábitats, dejando especies sin alimento, espacios para anidar o para vivir. En esos incendios, los koalas perdieron el 30% de su hábitat en New South Wales, Australia. También puede contaminar cuencas de agua, cambiar los suelos, su estructura, microorganismos, nutrientes y capacidad para retener agua, afectar el microclima y desencadenar erosión.
            <br/><br/>
            Por seis meses analizamos los datos satelitales usando estadística y sistemas de información geográfica con ayuda de expertos. Esto fue lo que encontramos:
            <br/><br/>
            <h3>Desde 2001, los incendios aumentaron en 63 de las 80 áreas protegidas de Venezuela</h3>
            <br/><br/>
            En los últimos veinte años los incendios aumentaron en el único santuario de fauna silvestre, en 41 de los 44 parques nacionales, 5 de las 7 reservas de fauna silvestre, 12 de los 21 monumentos naturales y 3 de los 7 refugios de fauna silvestre.
            <br/><br/>
            Pero no todas las AP sufrieron por igual.
          `,
          location: {
            center: [-65.29482, 6.75303],
            zoom: 5.37,
            pitch: 0.50,
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
          id: 'texto-mapa-5',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En el Monumento Natural Teta de Niquitao que protege la montaña más alta del estado Trujillo, y que forma parte de la cordillera de los Andes, los incendios aumentaron 153% de una década a la otra. Es el área protegida con mayor incremento del 2001 al 2020.
                      `,
          location: {
            center: [-70.58647, 9.09152],
            zoom: 12.36,
            pitch: 60.00,
            bearing: 13.60
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
              ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-6',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          En el Parque Nacional Sierra de Perijá, en Zulia, aumentaron 74%.
                      `,
          location: {
            center: [-72.75493, 9.58242],
            zoom: 9.31,
            pitch: 60.00,
            bearing: 48.81
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-7',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Al este, en el estado Falcón, en el Parque Nacional Sierra de San Luis 83%.
                      `,
          location: {
            center: [-69.54957, 11.21112],
            zoom: 11.35,
            pitch: 60.00,
            bearing: -75.20
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
           }
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-8',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Y al sur, en el estado Amazonas, los incendios en el Parque Nacional Duida Marahuaca aumentaron 77%.
                      `,
          location: {
            center: [-65.56088, 3.26155],
            zoom: 10.24,
            pitch: 60.00,
            bearing: 36.81
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-3',
          alignment: 'texto-simple',
          hidden: false,
          showMap: false,
          description: `
          <h3>El 2020 fue el peor año en incendios dentro de las áreas protegidas en los últimos veinte años</h3>
          En 2020, Venezuela fue el país de la región Amazónica con mayor densidad de incendios forestales por superficie o más incendios por kilómetro cuadrado. Tuvo casi el doble que Brasil, según datos del Instituto Nacional de Investigaciones Espaciales de ese país. De 151 países en el mundo, Venezuela fue el 14 con mayor número de incendios. A pesar de abarcar menos del 1% de la superficie terrestre, tuvo más focos que Australia, Perú, Sudán y Tanzania juntos. Desde 2005, Venezuela está entre los primeros 3 países de la región Amazónica que más se queman por superficie.
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
          id: 'fotografia-racionamiento',
          alignment: 'infografia',
          hidden: false,
          showMap: false,
          description: `
            <picture>
              <source
                media="(max-width: 750px)"
                srcset="./rankingm.png">
              <img src="./rankingd.png" />
            </picture>
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
          id: 'texto-4',
          alignment: 'texto-simple',
          hidden: false,
          showMap: false,
          description: `
          Esto se reflejó dentro de las AP. El 2020 —que coincidió con la pandemia de covid-19— fue el peor año de incendios en los últimos veinte.
          <img src="modis.png" alt="">
          ¿Qué tanto peor había sido? ¿Cómo se comparan esos incendios con los de la última década? Cuatro AP en Venezuela quintuplicaron sus incendios en 2020, siete los cuadruplicaron, once los triplicaron y diecinueve los duplicaron.
          <br/><br/>
          Pero el 2019 fue similar y, antes de eso, el 2016, 2007 y 2003. Todos, menos el 2020, fueron años de El Niño, uno de los fenómenos climáticos más importantes del planeta. Cuando las corrientes marinas del Océano Pacífico se calientan, desencadenan sequías intensas en Venezuela, inundaciones en desiertos de Arizona y cambios en el clima mundial. El planeta es un sistema interconectado.
          <br/><br/>
          Aunque el 2020 fue el año con mayor número de focos en lo que va de siglo XXI, no era una excepción.
          <h3>Más incendios llevan a más incendios</h3>
          Edgar Yerena me preguntó si conocía Maracay. “¿Recuerdas los herbazales y sabanas que acompañan la carretera entre Caracas y Valencia?”. Pensé en los océanos de pasto, con hojas alargadas y puntiagudas como agujas, que bailan con el viento. “Esas sabanas no son naturales; son paisajes de fuego creados por el hombre”, dijo.
          <br/><br/>
          Los primeros grandes incendios ocurrieron hace 230 millones de años, cuando nacieron los bosques. Desde entonces, cada espacio del planeta se adaptó a un régimen natural de fuego. En algunos, se volvió indispensable. En otros, una rareza vista cada mil años. Su presencia o ausencia forjaron el planeta que conocemos. Pero cuando la humanidad aprendió a controlarlo alteró ese equilibrio.
          <br/><br/>
          Los valles de la Cordillera de la Costa estaban cubiertos por bosques hace más de quinientos años. Rara vez se quemaban. Eran demasiado húmedos. Pero la población quemó las tierras fértiles para sembrar, construir y cazar. Eliminaron el bosque, y en su lugar, nacieron sabanas.
          <br/><br/>
          Las gramíneas que cubren las sabanas son la vegetación que más se quema en el planeta. Su estructura las hace muy inflamables, crecen rápido y se secan rápido. En sequía, son el combustible perfecto. La especie de árbol, gramínea o arbusto que se queme, define la intensidad, velocidad y temperatura del fuego. Por eso los incendios avanzan rápido en sabanas y lento en bosques.
          <br/><br/>
          Dentro de las AP venezolanas, las sabanas abiertas y las sabanas arbustivas o arboladas fueron el tipo de vegetación que más se quemó durante los últimos ocho años; las siguen los bosques ribereños, que suelen estar rodeados de sabanas. Donde hay sabanas, hay fuego.
          <br/><br/>
          Cambios de vegetación también afectan el clima local. Los árboles absorben agua por las raíces y la transpiran a la atmósfera como vapor: sudan neblina. Al igual que para el cuerpo humano, sudar ayuda al bosque a enfriarse. Cuando desaparecen los bosques, baja la humedad y aumenta la temperatura en la zona. Los ríos cambian, aumenta la erosión y las tierras pierden fertilidad. Los climas secos producen más combustible.
          <br/><br/>
          Más incendios llevan a más incendios. El cambio climático está alterando patrones y generando eventos extremos: en algunas regiones se alargan e intensifican las sequías; en otras, hay inundaciones inéditas. Los ecosistemas no pueden adaptarse a estos cambios y se degradan o enferman, aumentando el riesgo de fuego. Cuando ocurren incendios, se libera dióxido de carbono, metano y otros gases invernadero, agravando el cambio climático. El sistema se retroalimenta.
          <br/><br/>
          “La interacción entre el clima, la vegetación y las actividades humanas definen dónde y cuándo hay incendios”, me explicó Roberto Rivera Lombardi, docente del Instituto de Geografía de la Universidad Central de Venezuela. Los humanos son el agente causal más importante. Influyen directamente al provocarlos, e indirectamente al cambiar el ambiente.
          <br/><br/>
          Esto ayudaba a explicar por qué a simple vista los datos revelaban más incendios en la cordillera de la Costa que al sur del Orinoco; pero había excepciones. Necesitaba identificar las AP más afectadas.
          <br/><br/>
          “Si sabes cuántos focos de calor hay por kilómetro cuadrado, tienes la densidad de focos de cada AP”, explicó Rivera. “Con ese ranking tendremos una idea de cuáles son las áreas con mayor intensidad de fuego”.
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
          id: 'fotografia-racionamiento',
          alignment: 'infografia',
          hidden: false,
          showMap: false,
          description: `
            <picture>
              <source
                media="(max-width: 750px)"
                srcset="./top20m.png">
              <img src="./top20d.png" />
            </picture>
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
          id: 'texto-4',
          alignment: 'texto-simple',
          hidden: false,
          showMap: false,
          description: `
          <h3>El eje centro-norte, la región más afectada: invaden y queman las áreas protegidas</h3>
          Ocho de las veinte AP más afectadas estaban en el norte del país. Esta región, entre la cordillera de la Costa y la Serranía del Interior, concentra la densidad poblacional más alta del país y la mayoría de la actividad industrial.
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
          id: 'tableau',
          alignment: 'embeded',
          description: `
          <div class='tableauPlaceholder' id='viz1619075860150'>
          <noscript>
          <a href='#'><img alt='RANK AMAZ D ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AP&#47;AP_16040359700150&#47;RANKAMAZD&#47;1_rss.png' style='border: none' /></a>
          </noscript>
          <object class='tableauViz'  style='display:none;'>
           <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
           <param name='embed_code_version' value='3' />
           <param name='site_root' value='' />
           <param name='name' value='AP_16040359700150&#47;RANKAMAZD' />
           <param name='tabs' value='no' />
           <param name='toolbar' value='yes' />
           <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;AP&#47;AP_16040359700150&#47;RANKAMAZD&#47;1.png' />
           <param name='animate_transition' value='yes' />
           <param name='display_static_image' value='yes' />
           <param name='display_spinner' value='yes' /><
           param name='display_overlay' value='yes' />
           <param name='display_count' value='yes' />
           <param name='language' value='es' />
          </object>
          </div>
          `,
          location: {
            center: [-64.64840, 7.24838],
            zoom: 14.46,
            pitch: 6.00,
            bearing: -8.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'tableau',
          alignment: 'embeded',
          description: `
            <div class='tableauPlaceholder' id='viz1617898442987'>
              <noscript>
                <a href='https:&#47;&#47;prodavinci.com&#47;el-populismo-macroeconomico-en-venezuela&#47;'><img alt='Duración de episodios populistas en América Latina ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ep&#47;EpisodiospopulistasenAmricaLatina&#47;Dashboard2&#47;1_rss.png' style='border: none' /></a>
              </noscript>
              <object class='tableauViz'  style='display:none;'>
                <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                <param name='embed_code_version' value='3' />
                <param name='site_root' value='' />
                <param name='name' value='EpisodiospopulistasenAmricaLatina&#47;Dashboard2' />
                <param name='tabs' value='no' />
                <param name='toolbar' value='yes' />
                <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ep&#47;EpisodiospopulistasenAmricaLatina&#47;Dashboard2&#47;1.png' />
                <param name='animate_transition' value='yes' />
                <param name='display_static_image' value='yes' />
                <param name='display_spinner' value='yes' />
                <param name='display_overlay' value='yes' />
                <param name='display_count' value='yes' />
                <param name='language' value='en' />
              </object>
            </div>
          `,
          location: {
            center: [-64.64840, 7.24838],
            zoom: 14.46,
            pitch: 6.00,
            bearing: -8.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-ejenorte',
          alignment: 'texto-simple',
          hidden: false,
          showMap: true,
          description: `
          Pero, ¿por qué la población provoca incendios? En enero de 2020, en plena sequía, los pobladores de Cagua, estado Aragua, quemaron una siembra de caña de azúcar. Quizás para limpiar la tierra después de la cosecha, abriendo espacio para la próxima siembra. Quizás para acorralar animales durante la caza. A las 3:00 p.m. se escucharon gritos. Había personas atrapadas en el fuego. Eran niños; los hijos, sobrinos, nietos de comunidades cercanas. Estaban cazando conejos. La dirección del viento cambió y el incendio avanzó sin tregua sobre la vegetación seca. Las llamas arrinconaron a 11 jóvenes que tenían entre 10 y 18 años. Todos murieron.
          <br/><br/>
          “Hay costumbres sociales, pero también hay razones socioeconómicas para usar el fuego en prácticas agropecuarias y de subsistencia”, dijo Roberto Rivera. La gente quema para celebrar un rito, por peleas, rivalidades o por querer ahuyentar a mosquitos. “También hay pirómanos, gente que quema por placer, niños traviesos, personas que lo hacen por diversión o para vandalizar”, agregó Edgar Yerena.
          <br/><br/>
          Hay muchas causas sociales, pero las motivaciones económicas son quizás las más frecuentes. Y cada región tiene una economía distinta.
          <br/><br/>
          En el eje centro-norte, la expansión urbana por crecimiento demográfico causa incendios, me explicó el Dr. Carlos Pacheco-Angulo, profesor titular de la Facultad Ciencias Forestales y Ambientales de la Universidad de los Andes. Es el área con mayor impacto sobre la biodiversidad.
          <br/><br/>
          Con eso en mente, superpuse los focos en AP con imágenes satelitales.  Con ayuda de expertos, revisé diferentes regiones comenzando por la más afectada.
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
          id: 'texto-mapa-9',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Al norte del estado Guárico, en la Serranía del Interior, se yerguen los Morros de San Juan, conocidos como el Monumento Natural Arístides Rojas, el área protegida con más incendios por kilómetro cuadrado del país.
                      `,
          location: {
            center: [-67.30996, 9.93908],
            zoom: 11.24,
            pitch: 60.00,
            bearing: -36.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-10',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Hace 80 millones de años, un mar cubría la región central de Venezuela. En la siguiente era de glaciación se congelaron los polos y se retiró el agua, dejando cerros de rocas calizas arrecifales, montañas de arrecifes de coral que hoy conocemos como los Morros. El monumento se declaró para protegerlos.
          <br/><br/>
          Esta área protegida lleva el nombre de un historiador, escritor, naturalista, médico y periodista venezolano que dedicó su vida a divulgar y registrar información científica. Gracias a él sabemos que la temperatura promedio en Caracas hace 200 años era de 21 grados centígrados. Hoy es de 26. Rojas, como tantos otros, nos enseña cómo hemos cambiado.
                      `,
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
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-11',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          De todos los incendios de 2012 a 2020, la mitad se concentró en la frontera con San Juan de los Morros, la ciudad con mayor densidad de población del estado Guárico.
                      `,
          location: {
            center: [-67.37253, 9.94441],
            zoom: 13.00,
            pitch: 44.00,
            bearing: -32.00
          },
          mapAnimation: 'easeTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
        ]
        },
        {
          id: 'texto-mapa-12',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En los últimos veinte años, la población de San Juan creció 49% según proyecciones del Instituto Nacional de Estadística. Esto trajo como consecuencia una expansión desorganizada de la ciudad, incluyendo construcciones dentro del monumento natural. La gente quema para eliminar vegetación de los terrenos y poder construir.
          <br><br/>
          Las fallas de servicios básicos también generan oportunidades para incendios. Para deshacerse de la basura, la gente quema. Sin gas doméstico, la población cocina con leña. A veces estos fuegos se salen de control y entran en áreas naturales.
                      `,
          location: {
            center: [-67.38694, 9.92199],
            zoom: 15.67,
            pitch: 49.50,
            bearing: -14.40
          },
          mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
            ]
        },
        {
          id: 'texto-mapa-13',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Detectamos al menos X invasiones ilegales. Cuando se creó el monumento en 1949 no había poblaciones dentro del área, según su decreto. Las construcciones ocurrieron luego. Son ilegales. La ley prohíbe nuevos asentamientos dentro de él.
                      `,
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
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-14',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En 2021 alrededor del 4,5% del territorio del monumento natural está intervenido. Es el equivalente a la extensión del municipio Chacao en Caracas. Las invasiones se intensificaron en las últimas décadas, como lo muestran las imágenes.
          <br></br>
          <iframe frameborder="0" class="juxtapose" width="100%" height="250" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6937a472-a763-11eb-84bf-df397a3ba76f"></iframe>
                      `,
          location: {
            center: [-67.41232, 9.92921],
            zoom: 13.00,
            pitch: 6.00,
            bearing: -30.40
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
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
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'invasionesmnar',
          opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-15',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Hay siembras de diferentes escalas. La mayoría parecen de subsistencia, pero algunas son llamativas por su extensión. A comienzos de 2021 hay una parcela de 11 hectáreas —equivalente a 17 canchas de fútbol— dentro del Monumento, a solo 411 metros de los Morros.
                      `,
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
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-16',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Arístides Rojas escribió en Orígenes Venezolanos que la cordillera de la Costa estaba tallada por sus antepasados. Desde Paria hasta Barquisimeto, hay petroglifos con rostros humanos, serpientes, ranas, tigres, manos e imágenes del sol y de la luna. También al sur, entre Caicara y las orillas del río Caura. Refiere Rojas que cuando Alexander Humboldt preguntó a los indígenas del Orinoco cómo habían tallado rocas de más de quince metros de altura, contestaron, sonriendo, que sus antepasados llegaron hasta las cimas en canoa. Los petroglifos “marcan el itinerario del pueblo caribe”, escribió. El fuego hace lo mismo. Los humanos forjaron el paisaje de la serranía. Estas sabanas son las huellas del hombre.
                      `,
          location: {
            center: [-67.37501, 9.96257],
            zoom: 11.25,
            pitch: 60.00,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-llanos',
          alignment: 'texto-simple',
          hidden: false,
          showMap: true,
          description: `
          <h3>Los Llanos: la quema sin control para ganadería dentro de las áreas protegidas</h3>

          Los Llanos son la segunda región más afectada por los incendios. Seis de las veinte AP con más fuego por superficie están allí. “Es un hotspot de incendios forestales,” dice Pacheco-Angulo. Es una región inflamable por su clima, vegetación y prácticas de quema. Se usa el fuego en la ganadería.
                      `,
          location: {
            center: [-65.66097, 7.65576],
            zoom: 6.03,
            pitch: 4.00,
            bearing: 8.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-17',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          El Parque Nacional Aguaro-Guariquito, en Los Llanos Centrales de Guárico, es la área protegida más grande al norte del Orinoco y la que sufre más incendios en el país. También es la tercera con más incendios por kilómetro cuadrado.
                      `,
          location: {
            center: [-66.91280, 8.35365],
            zoom: 9.00,
            pitch: 7.50,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
         ]
        },
        {
          id: 'texto-mapa-18',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Este parque protege un microcosmo de Los Llanos venezolanos. Es una planicie aluvial, cubierta por dunas, esteros, lagunas y caños con distintos tipos de sabanas y bosques. Dos ríos, el Aguaro y el Guariquito, lo atraviesan de norte a sur, desembocando en el Orinoco.
          <br/><br/>
          Dentro, vive una especie en peligro crítico de extinción que solo existe en Colombia y Venezuela: el caimán del Orinoco (Crocodylus intermedius). A comienzos del siglo pasado había millones entre los llanos, sabanas inundables, áreas boscosas e incluso en el piedemonte andino, pero los cazaron para hacer zapatos, abrigos, carteras, botas y otros artículos de piel. Hoy quedan menos de 250.000 individuos en el mundo, estima la Unión Internacional para la Conservación de la Naturaleza. Su mayor amenaza es la pérdida de hábitat. Una de las poblaciones más importantes está en Aguaro-Guariquito.
                      `,
          location: {
            center: [-66.63394, 8.43410],
            zoom: 11.00,
            pitch: 30.50,
            bearing: 1.08
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
        ]
        },
        {
          id: 'texto-mapa-19',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Desde la colonia, los ganaderos queman la sabana durante la sequía para eliminar gramíneas leñosas, duras y poco nutritivas para sus animales. El fuego favorece rebrotes más suaves y sabrosos para el ganado. Con sabanas de gramíneas inflamables y secas, los incendios crecen rápidamente.
          <br/><br/>
          Las quemas anuales descontroladas —que se hacen sin precaución, delimitación o planificación— destruyen la materia orgánica del suelo que nutre las plantas y que ya es escasa en los Llanos. Los suelos se degradan, desaparece la vegetación nativa y prosperan las plantas que sirven para alimentar al ganado, entre ellas, especies invasoras africanas.
          <br/><br/>
          La ganadería extensiva, con una res por 10 hectáreas, ha sustituido la vegetación original por pastizales. Entre 1988 y 2010 se perdió un tercio de las sabanas abiertas del país, según el Libro rojo de ecosistemas terrestres de Venezuela.
                      `,
          location: {
            center: [-66.64217, 8.33423],
            zoom: 15.82,
            pitch: 3.50,
            bearing: 0.54
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-20',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          La mayor concentración de incendios en Aguaro-Guariquito coincide con la frontera suroeste del parque nacional, en los bosques ribereños que crecen a orillas de los ríos. Casi la mitad de los focos entre 2012 y 2020 ocurrió, aproximadamente, en el 11% de su territorio.
                              `,
          location: {
            center: [-66.87315, 8.09074],
            zoom: 12.00,
            pitch: 1.00,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
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
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'focosenaps',
          opacity: 0
         },
          ]
        },
        {
          id: 'texto-mapa-21',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Los bosques ribereños son corredores ecológicos que permiten el intercambio genético entre poblaciones, ayudando a que los ecosistemas sean más diversos y resilientes. También producen energía y nutrientes para peces, aves, mamíferos y reptiles amenazados, como el caimán del Orinoco. Ayudan a regular el clima, mantienen la calidad del agua y previenen la erosión.
          <br/><br/>
          Entre 1986 y 2016, estos bosques —visibles en las imágenes con un verde frondoso— casi han desaparecido.
          <br><br/>
          <iframe frameborder="0" class="juxtapose" width="100%" height="300" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6c67d8b4-a764-11eb-84bf-df397a3ba76f"></iframe>
                              `,
          location: {
            center: [-66.84971, 8.01321],
            zoom: 14.82,
            pitch: 3.50,
            bearing: 0.54
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-22',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Aunque los bosques ribereños existen en 14 estados del país, al norte del Orinoco todos están en peligro o, peor aún, en peligro crítico de desaparecer, según el Libro Rojo.
          <br/><br/>
          La pérdida de hábitats es la primera causa de extinción de aves, insectos, mamíferos, peces, hongos y plantas en todo el planeta. Antes del hombre, se extinguían unas cinco especies al año por causas naturales. Hoy desaparecen al menos 100 veces más rápido. La velocidad de extinción supera la de aparición de nuevas especies.
                              `,
          location: {
            center: [-66.84971, 8.01321],
            zoom: 14.82,
            pitch: 3.50,
            bearing: 0.54
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
          id: 'texto-lagomaracaibo',
          alignment: 'texto-simple',
          hidden: false,
          showMap: true,
          description: `
          <h3>Cuenca del Lago de Maracaibo: agricultores queman para adentrarse en bosques protegidos</h3>
          En la cuenca del Lago de Maracaibo, en el estado Zulia, queman para sembrar. La frontera agrícola se está expandiendo dentro de las AP.
                      `,
          location: {
            center: [-71.64232, 9.78349],
            zoom: 7.82,
            pitch: 7.50,
            bearing: -0.07
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-23',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          El Parque Nacional Ciénagas de Juan Manuel, al sureste de la cuenca, es la décima área protegida con más incendios por kilómetro cuadrado. Y se han intensificado. En 2020 aumentaron 411% en comparación con su promedio de los últimos ocho años.
                      `,
          location: {
            center: [-71.73587, 9.20176],
            zoom: 8.82,
            pitch: 7.50,
            bearing: -0.07
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
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
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'focosenaps',
          opacity: 0
         },
          ]
        },
        {
          id: 'texto-mapa-24',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Dentro del parque, los ríos Santa Ana, Catatumbo y Escalante, que bajan de la Sierra de Perijá, crecen en temporada de lluvia y se desbordan en la planicie, estancándose a pocos kilómetros de uno de los lagos más antiguos del planeta. La confluencia de estos tres ríos crea ciénagas de herbazales, bosques y manglares que interactúan junto con corrientes de viento, el relieve y otros factorespara producir el Relámpago del Catatumbo en Maracaibo, la capital mundial de los relámpagos.
          <br></br>
          En 1974 el Consejo Zuliano de Planificación preparó un estudio para la OEA que menciona ganadería en los márgenes del río Santa Ana, agricultura en el borde occidental de la ciénaga y a lo largo del río Catatumbo, y una población flotante que caza y pesca para subsistir. El estudio recomendaba proteger esta zona.
                      `,
          location: {
            center: [-71.73587, 9.20176],
            zoom: 8.82,
            pitch: 7.50,
            bearing: -0.07
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'PNCatatumboRios_label',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'PNCatatumboRios',
            opacity: 1,
            duration: 5000
           }
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'PNCatatumboRios_label',
          opacity: 0
          },
          {
          layer: 'PNCatatumboRios',
          opacity: 0
         },
          ]
        },
        {
          id: 'texto-mapa-25',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Casi cuarenta años después, la mayor concentración de incendios entre 2012 y 2020 bordea el río Santa Ana, al noroeste de la AP. La segunda mayor concentración está en el borde occidental de la ciénaga, cerca del río Catatumbo. Las quemas ocurren muy probablemente en las mismas zonas que en 1974, aunque hoy sean territorios protegidos.
          <br></br>
          Los madereros talan maderas valiosas, creando huecos entre las copas de los árboles. El techo de hojas, que funciona como el toldo de un invernadero, se fragmenta. El sol entra y calienta el suelo, secando la vegetación y reduciendo la humedad. Luego los conuqueros queman para limpiar los terrenos de siembra. El humo de incendios se estaciona sobre el bosque y evita que se acumule niebla sobre los árboles, reprimiendo la lluvia. La vegetación se seca más aún. Y en la próxima temporada de sequía hay más combustible, entonces los incendios abarcan más espacios. El ciclo se repite y el bosque se continúa fragmentando hasta desaparecer.
                      `,
          location: {
            center: [-72.15485, 9.37572],
            zoom: 10.11,
            pitch: 0.50,
            bearing: -28.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'focosenaps',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'PNCatatumboRios_label',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'PNCatatumboRios',
            opacity: 1,
            duration: 5000
           }
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'PNCatatumboRios_label',
          opacity: 0
          },
          {
          layer: 'focosenaps',
          opacity: 0
          },
          {
          layer: 'PNCatatumboRios',
          opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-24',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Además de los conucos, que son parcelas pequeñas, hay actividad agrícola de mayor escala, como este terreno de X. Esta siembra no existía en 1991, cuando se creó el parque nacional. Es una finca ilegal.
                      `,
          location: {
            center: [-71.85240, 9.11807],
            zoom: 14.42,
            pitch: 22.50,
            bearing: 10.30
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-25',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En 2021 calculamos que alrededor del 18,6% del Parque Nacional Ciénagas de Juan Manuel está intervenido, en su mayoría, por fincas agrícolas. Son cerca de 449,5 kilómetros cuadrados, el equivalente a toda la superficie del Distrito Capital.
          <br></br>
          <iframe frameborder="0" class="juxtapose" width="100%" height="300" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=ba08367c-a764-11eb-84bf-df397a3ba76f"></iframe>
                      `,
          location: {
            center: [-72.40457, 9.31936],
            zoom: 9.18,
            pitch: 2.00,
            bearing: -0.94
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
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
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'focosenaps',
          opacity: 0
         },
          ]
        },
        {
          id: 'texto-mapa-26',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Los bosques de pantano son la vegetación que más queman en el parque. Los bosques filtran el agua, mejorando su calidad, retienen humedad, contribuyendo con el volumen del cauce y regulan el flujo, ayudando a evitar desastres naturales.
          <br></br>
          La región del Catatumbo tiene el índice de deforestación más alto del país. Entre 1975 y 1980, el sur del lago perdió el 90% de sus bosques, según el Libro rojo de ecosistemas terrestres de Venezuela. El 60% del agua dulce que entra en el Lago de Maracaibo pasaba por estos bosques.
                      `,
          location: {
            center: [-72.27965, 9.23933],
            zoom: 15.17,
            pitch: 41.50,
            bearing: 32.66
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-guayana',
          alignment: 'texto-simple',
          hidden: false,
          showMap: true,
          description: `
          <h3>La Guayana venezolana: agricultores, ganaderos y mineros queman la Amazonía</h3>
          La Guayana venezolana abarca los estados Bolívar, Amazonas y Delta Amacuro, y sostiene parte de la Amazonía, X. Al sur del Orinoco, “el fuego se usa para cambiar el uso de la tierra con fines de agricultura”, dice Pacheco-Angulo. La minería y las prácticas tradicionales de comunidades indígenas usan el fuego también pero a menor escala.
                      `,
          location: {
            center: [-64.92350, 4.95321],
            zoom: 6.17,
            pitch: 8.50,
            bearing: 0.26
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-27',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          El Parque Nacional Caura, creado en el gobierno de Nicolás Maduro, es el parque nacional más reciente y más extenso de Venezuela. Es la cuarta área protegida que más se quema, después de Aguaro-Guariquito, Canaima y Cinaruco-Capanaparo. En 2020 hubo 38% más incendios que en su promedio de los últimos ocho años.
                        `,
          location: {
            center: [-65.41314, 5.64366],
          zoom: 7.23,
          pitch: 8.50,
          bearing: 0.26
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 2000
            }
          ],
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-28',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Caura se superpuso con seis AP —el Parque Nacional Jaua-Sarisariñama y cinco tepuyes del Monumento Natural Formaciones de Tepuyes— con la Reserva Forestal Caura, con la Zona 2 del Arco Minero, donde se extrae hierro y oro entre otros minerales, y con los territorios de dos pueblos indígenas, los sanemá y yekwuana, cuya autoridad aún no es reconocida por el estado a pesar de décadas de exigencias.
                        `,
          location: {
            center: [-65.41314, 5.64366],
            zoom: 7.23,
            pitch: 8.50,
            bearing: 0.26
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsTODAS_zoomin',
            opacity: 0.36,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'APsTODAS_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-29',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Desde que se creó en 2017, el 75% de los incendios está concentrado en la superposición con el Arco Minero, sobre vegetación de bosques semicaducifolios al este y sabanas arbustivas o arboladas al oeste.
                      `,
          location: {
            center: [-65.41314, 5.64366],
            zoom: 7.23,
            pitch: 8.50,
            bearing: 0.26
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'PNCauraAC',
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
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          {
          layer: 'PNCauraAC',
          opacity: 0
        },
          {
          layer: 'focosenaps',
          opacity: 0
         },
          ]
        },
        {
          id: 'texto-mapa-30',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Pero al revisar imágenes satelitales de la Zona 2 del Arco Minero dentro del parque, detectamos más intervenciones agrícolas y ganaderas que minería. La mayoría de estos focos coinciden con fincas agropecuarias.
                          `,
          location: {
            center: [-64.48861, 7.25185],
            zoom: 14.83,
            pitch: 3.00,
            bearing: 33.06
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-31',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Entre 2000 y 2018 se han perdido al menos 2.899 kilómetros cuadrados de bosque en la Amazonía venezolana, encontró Provita, una ONG venezolana enfocada en la conservación y protección de especies amenazadas con extinción. Es un área equivalente a 2,7 veces la isla de Margarita. La actividad agropecuaria es responsable del 90% del área deforestada en la región, según “Amazonía y Acción Climática en Venezuela”.
                    `,
          location: {
            center: [-64.48517, 7.23645],
            zoom: 16.31,
            pitch: 28.50,
            bearing: 28.26
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-32',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Las poblaciones indígenas tradicionales del territorio, los sanemá y yekwana, queman para sembrar, pero utilizan técnicas particulares de rotación de campos de cultivo. Los yekwana limpian el área y siembran por 2 a 8 años. Abandonan el conuco para que regrese la vegetación nativa, y lo retoman 15 o 20 años después. Los sanemá dejan descansar la tierra por 50 o 60 años. Estas técnicas permiten que los ecosistemas se recuperen y no representan una amenaza a largo plazo.
                      `,
          location: {
            center: [-64.41076, 5.66157],
          zoom: 15.15,
          pitch: 9.50,
          bearing: 9.84
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-33',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          En comparación, las siembras detectadas en el norte del parque son más extensas. Se deforestan y queman grandes parcelas boscosas, y se siembran hasta agotar los nutrientes. Luego se avanza a otros terrenos para continuar sembrando.
          <br></br>
          Esta parcela mide alrededor de 755.549 metros cuadrados, área equivalente 106 canchas de fútbol de 105 metros de largo por 68 de ancho.
                        `,
          location: {
            center: [-64.65112, 7.24688],
            zoom: 15.62,
            pitch: 13.00,
            bearing: 159.92

          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-34',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          La minería representa apenas un 9% de la deforestación en la Amazonía venezolana, encontró Provita. “A pesar de que su extensión no es tan grande, se ha intensificado notablemente en los últimos años”, publicó en abril de 2021.     `,
          location: {
            center: [-63.77863, 6.12323],
            zoom: 16.56,
            pitch: 0.00,
            bearing: -7.67

          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-35',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Dentro del parque nacional, fuera del Arco Minero, detectamos 14 minas ilegales que no estaban identificadas previamente por la Red Amazónica de Información Socioambiental Georreferenciada (RAISG). Estas minas coinciden con áreas de concentración de incendios.
                          `,
          location: {
            center: [-64.45907, 5.63742],
            zoom: 8.23,
            pitch: 1.00,
            bearing: 0.00

          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'MineriaP',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'MineriaP',
            opacity: 0
          },
          {
          layer: 'APsContorno_zoomin',
          opacity: 0
        },
          ]
        },
        {
          id: 'texto-mapa-36',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En 13 de las 14 minas detectadas, hay focos de calor VIIRS a menos de 3,2 kilómetros de distancia en línea recta. De 24 minas identificadas por RAISG, la mitad tiene un incendio a menos de 3,6 kilómetros.
          <br></br>
          Los mineros usan el fuego para degradar y deforestar el bosque. Queman para abrir espacios de minería. Pero también usan el fuego para limpiar las áreas donde viven —donde van a construir casas y sembrar—, normalmente cerca de las minas.
                        `,
          location: {
            center: [-64.24931, 5.69627],
          zoom: 8.68,
          pitch: 1.00,
          bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'MineriaP',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'focos',
            opacity: 1,
            duration: 5000
            },
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            }
          ],
          onChapterExit: [
            {
            layer: 'MineriaP',
            opacity: 0
          },
          {
          layer: 'focos',
          opacity: 0
        },
          {
          layer: 'APsContorno_zoomin',
          opacity: 0
        },
          ]
        },
        {
          id: 'texto-porque',
          alignment: 'texto-simple',
          hidden: false,
          showMap: true,
          description: `
          Los datos revelaban que se están ocasionando más incendios dentro de las AP. Había más ganadería, agricultura, minería, asentamientos y caza en estas áreas.
          <br></br>
          Si los parques nacionales y monumentos naturales están a cargo del Instituto Nacional de Parques, y los refugios, reservas y santuarios de Fauna Silvestre de una dependencia dentro del Ministerio de Ambiente, este aumento implicaba fallas en la gestión y manejo por parte de ambas instituciones.
          <br></br>
          <h3>No hay planificación ni recursos, el gobierno no tiene una política ambiental clara</h3>
          <br></br>
          Los gobiernos de Hugo Chávez y Nicolás Maduro reestructuraron el Ministerio de Ambiente cada 5 años, en promedio. Le cambiaron el nombre, lo suprimieron, lo incorporaron a otros ministerios y lo separaron de nuevo. “Los cambios en la estructura de la administración ambiental no son una causa de nada, sino una consecuencia”, dice Edgar Yerena. “El gobierno no tiene una idea clara de su política ambiental o tiene una idea muy distinta a la que prescriben las leyes y la constitución”, explica.
          <br></br>
          Los cambios de gerencia en Inparques reflejan lo mismo. Hay una desconexión entre los dirigentes y lo que establecen las leyes. “La politización ideológica conlleva a deficiencias de capital humano”, dice Yerena. Se prioriza la lealtad política por encima de la experticia.
          <br></br>
          Pero a pesar de las actividades humanas, aunque la gente provoque incendios, hay instituciones, políticas públicas y autoridades encargadas de prevenirlos, monitorearlos y combatirlos.
          <br></br>
          Los guardaparques son la primera línea de respuesta. En el parque nacional Macarao, entre Miranda y Distrito Capital, había unos 170 guardaparques en 2020, según Marlene Sifontes. En 2021 quedan menos de 50. En marzo de 2021, la gran mayoría ganaba menos de dos dólares al mes, dice Sifontes. “Muchos no pueden llegar a sus trabajos con ese salario”.
          <br></br>
          Sin recursos, los bomberos forestales no pudieron ejecutar tareas de prevención ni de control de incendios para la sequía de 2020, denunció el sindicato. No se tenían los equipos para combatir el fuego ni se realizó el mantenimiento adecuado a los cortafuegos y sistemas hídricos. “Desde hace varios años no se manejan los planes operativos anuales, ni se elaboran los informes finales de las temporadas de incendios”, dice Sifontes. “No hay planificación.”
          <br></br>
          Sin políticas de prevención y combate el impacto de los incendios es mayor.
                      `,
          location: {
            center: [-69.02684, 10.23491],
            zoom: 6.71,
            pitch: 1.00,
            bearing: 0.00
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-37',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          En 2020 los incendios en el Monumento Natural Loma de León que bordea Barquisimeto, la cuarta ciudad más poblada del país, se multiplicaron por seis. Es el área protegida donde más aumentaron los focos en 2020 en comparación con su promedio de los últimos ocho años.
                        `,
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
            layer: 'APsContorno_zoomin',
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
          ]
        },
        {
          id: 'texto-mapa-38',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          La ciudad larense entró en Loma de León. Las autoridades no han señalizado la frontera entre el área protegida y la ciudad: los límites del monumento no están definidos en el terreno. En el sector El Martillo, hay al menos cuatro comunidades asentadas ilegalmente dentro del monumento: Asoprado, Valle Verde I, Valle Verde II y La Batalla.
                        `,
          location: {
            center: [-69.46548, 9.99502],
            zoom: 13.23,
            pitch: 28.50,
            bearing: 88.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-39',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Incluso, hay infraestructura industrial dentro del monumento natural.
                          `,
          location: {
            center: [-69.45659, 10.02699],
            zoom: 16.86,
            pitch: 15.00,
            bearing: 93.60
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-40',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          La alcaldía del municipio Iribarren y la gobernación del estado Lara construyeron servicios de agua, luz, cloaca, vialidad, escuelas y módulos de policía para estas comunidades, aunque están dentro de un área protegida estricta que lo prohíbe. La zona de El Martillo tenía importantes matorrales que servían de alimento al cardenalito (Carduelis cucullata), un ave pequeña de plumas negras y rojas que es una de las especies más amenazadas del país.
                        `,
          location: {
            center: [-69.45489, 10.02843],
            zoom: 14.67,
            pitch: 49.50,
            bearing: -144.64
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-41',
          alignment: 'texto-mapa-left',
          showMap: true,
          description: `
          Para el año 2005 sólo había una persona encargada de la vigilancia, manejo y administración de esta área de 7.275 hectáreas, según un informe de ParksWatch. Su labor incluía emitir todos los expedientes de infracciones por invasión.
                        `,
          location: {
            center: [-69.41315, 10.02037],
      zoom: 12.11,
      pitch: 0.00,
      bearing: 81.60
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterExit: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 0
          },
          ]
        },
        {
          id: 'texto-mapa-42',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          En el parque nacional Terepaima, ubicado en Lara y Portuguesa, en el extremo noroeste de la cordillera de los Andes, los incendios aumentaron 228% en 2020 con respecto a su promedio de los últimos ocho años. Este parque protege las cuencas que suministran agua a Barquisimeto y Sarare.
                        `,
          location: {
            center: [-69.22078, 9.88896],
            zoom: 11.31,
            pitch: 42.50,
            bearing: -30.50
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
            {
            layer: 'APsContorno_zoomin',
            opacity: 1,
            duration: 5000
            }
          ]
        },
        {
          id: 'texto-mapa-43',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Aunque año tras año es una de las AP más amenazadas por el fuego en Venezuela, no tiene cortafuegos, tanques para almacenamiento de agua, sistemas hídricos que transporten el agua ni equipos para la extinción de incendios.
                        `,
          location: {
            center: [-69.22078, 9.88896],
            zoom: 11.31,
            pitch: 42.50,
            bearing: -30.50
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
          onChapterEnter: [
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
          ]
        },
        {
          id: 'texto-mapa-44',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          Los bomberos más cercanos están en la ciudad de Barquisimeto, a unos 20 kilómetros de distancia, y atienden una ciudad con más de un millón de habitantes.
                        `,
          location: {
            center: [-69.22678, 9.88392],
            zoom: 10.37,
            pitch: 39.00,
            bearing: -28.90
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: '',
        },
        {
          id: 'texto-mapa-45',
          alignment: 'texto-mapa-right',
          showMap: true,
          description: `
          De los cuatro puestos de guardaparques, tres fueron saqueados y destruidos, según un informe de ParksWatch. Tumbaron las paredes y robaron las ventanas, techos, pocetas y muebles. Solo queda un puesto operativo.
          <br></br>
          Los guardaparques no tienen vehículo para moverse dentro de los 186 kilómetros cuadrados del área, infraestructura para refugiarse y vigilar la zona, botas o trajes que los protejan del fuego, o radios para comunicarse.
                        `,
          location: {
            center: [-69.29779, 10.00556],
            zoom: 15.88,
            pitch: 3.00,
            bearing: 0.62
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
          id: 'texto-2',
          alignment: 'texto-simple',
          hidden: false,
          showMap: false,
          description: `
          Buscando incendios dentro de AP, encontré minas, siembras, pueblos y ganadería. En bosques densos, llanos extensos o pantanos tupidos, donde había fuego, había gente. Los incendios son estandartes de la conquista humana sobre la naturaleza.
          <br></br>
          Como navegantes, trazando mapas en el cielo para llegar a casa, estos puntos incandescentes sobre la superficie de la tierra detectados desde las órbitas nos dan pistas para encontrarnos.
          <br></br>
          Cuando la humanidad domesticó el fuego se encaminó hacia otros planetas. Zeus, dios del trueno en la mitología griega, iba a destruir a nuestra especie. Pero Prometeo, tratando de evitarlo, robó el fuego a los dioses y se lo enseñó al hombre, inventando las artes —la arquitectura, metalurgia, agricultura, medicina y matemáticas—. Entonces la humanidad se convirtió en civilización.
          <br></br>
          El fuego nos permitió dominar el planeta y sus espacios salvajes, estableciendo hogares en selvas densas y húmedas, protegiéndonos de depredadores, alumbrando cuevas, desafiando climas gélidos, potabilizando agua, ampliando nuestra dieta y propulsando naves al espacio. Con el fuego sobrevivimos y prosperamos.
          <br></br>
          Pero en Venezuela, usamos el fuego de forma descontrolada e indiscriminada. Usamos el inmenso poder que nos otorga, sin pensar en el futuro o en las consecuencias a largo plazo. Lo hacemos con viveza, atropellando a los más vulnerables —organismos indefensos que generan los recursos que necesitamos para existir—. Con el fuego estamos desfigurando las áreas protegidas, convirtiéndolas en un reflejo de la humanidad y sus impactos.
          <br></br>
          En cenizas.
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
    ]
};
