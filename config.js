var config = {
    style: 'mapbox://styles/prodavinci/cklvbe0xo3oz617opusv54hpq',
    accessToken: 'pk.eyJ1IjoicHJvZGF2aW5jaSIsImEiOiJja2x2NzdndzMwNmRxMnFqamhwZWVrcXVhIn0.pezTmI7vngVwKhSThtPc0w',
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
            En 2020, Venezuela fue el país amazónico con más incendios por kilómetro cuadrado.
            Tuvo casi el doble que Brasil. De 151 países en el mundo, Venezuela fue el 14 con más incendios,
            con más focos que Australia, Perú, Sudán y Tanzania juntos. Cerca del 99% de estos incendios fueron
            provocados por la población. Las Áreas Protegidas del país, espacios naturales protegidos, con gran
            biodiversidad, están especialmente amenazados. En las últimas dos décadas, los incendios han aumentado
            en 63 de las 80 Áreas Protegidas del país. El 2020 fue el peor año en el registro.
            <br/><br/>
            Prodavinci analizó dos décadas de incendios dentro de todos los Parques Nacionales,
            Monumentos Naturales, Refugios, Reservas y Santuarios de Fauna Silvestre de Venezuela,
            abarcando el 24% del territorio. Utilizando focos de calor registrados por dos sensores satelitales
            de la NASA —MODIS y VIIRS— y sistemas de información geográfica, cruzamos estos incendios con los
            ecosistemas (unidades de vegetación) de las Áreas Protegidas, hábitats de especies en peligro de
            extinción, vialidad, hidrografía, centros urbanos y minería, para entender posibles causas y
            consecuencias del fuego. Para las áreas más afectadas analizamos patrones y los contrastamos con
            imágenes satelitales Sentinel y Maxar.
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
          id: 'texto-1',
          alignment: 'texto-simple',
          hidden: false,
          // title: 'Un título',
          description: `
            Cuando la humanidad domesticó el fuego se encaminó hacia otros planetas. Zeus, dios del trueno en la mitología
            griega, iba a destruir a la humanidad. Pero Prometeo, tratando de evitarlo, robó el fuego a los dioses y se lo
            enseñó al hombre, inventando las artes —la arquitectura, metalurgia, agricultura, medicina y matemáticas.
            Entonces la humanidad se convirtió en civilización. Los humanos se diferencian de otros animales, entre otras
            cosas, por su uso de herramientas. Y el fuego es una de ellas.
            <br/><br/>
            El fuego nos ha permitido dominar al planeta y sus espacios salvajes, esculpiendo hogares de selvas densas y
            húmedas, protegiéndonos de depredadores, alumbrando cuevas, desafiando climas gélidos, potabilizando agua y
            forjando otras herramientas. También ha propulsado naves al espacio, llevándonos a otros mundos.
            <br/><br/>
            Hace
            <a target="_blank" rel="noopener noreferrer" href="https://www.bloomberg.com/news/articles/2019-01-09/climate-change-will-reshape-earth-as-human-land-use-did">
              300 años los humanos se concentraban en el 5% de la superficie terrestre.
            </a> La mitad del planeta era
            prácticamente virgen. Hoy,
            <a target="_blank" rel="noopener noreferrer" href="https://www.geosociety.org/gsatoday/archive/22/12/article/i1052-5173-22-12-4.htm">
              con ayuda del fuego, más del 75% de la tierra está intervenida.
            </a>
            Apenas quedan pequeños refugios de naturaleza. Excepciones.
            <br/><br/>
            Alrededor del 15% de esos remanentes naturales terrestres están dentro de Áreas Naturales Protegidas o Áreas Protegidas (AP),
            territorios delimitados por los gobiernos para la conservación de su biodiversidad y paisajes.
            <br/><br/>
            En la ley venezolana las AP son Áreas Bajo Régimen de Administración Especial, o ABRAE, por su acrónimo. De 20 categorías
            de ABRAE, solo cinco —<b>los Parques Nacionales, Monumentos Naturales, Refugios de Fauna Silvestre, Reservas de Fauna Silvestre y
            Santuarios de Fauna Silvestre</b>— son consideradas AP. Son las únicas cuyo objetivo principal es la conservación ambiental.
            <br/><br/>
            Venezuela, el décimo país más biodiverso del mundo y tiene uno de los sistemas de áreas protegidas más extenso.
            <b>80 Áreas Protegidas, que incluyen 44 Parques Nacionales, 21 Monumentos Naturales*, 7 Refugios de Fauna Silvestre,
            7 Reservas de Fauna Silvestre y 1 Santuario de Fauna Silvestre</b>, suman 220.581 kilómetros cuadrados o
            el 24% de la superficie del país. Es el equivalente a 274 veces el área de la Gran Caracas o
            a todo el territorio de los estados Amazonas y Anzoátegui juntos.
            <br/><br/>
            Desde 2001, los incendios han aumentado en 63 de las 80 Áreas Protegidas del país, incluyendo
            todos los Santuarios de Fauna Silvestre, el 93% de los Parques Nacionales, 71% de las Reservas
            de Fauna Silvestre, 57% de los Monumentos Naturales y 42% de los Refugios de Fauna Silvestre.
            <br/><br/>
            Antes de la humanidad, los relámpagos o erupciones volcánicas causaban la mayoría de los incendios.
            <a target="_blank" rel="noopener noreferrer" href="https://www.pnas.org/content/114/11/2946">
              Hoy el 84% son obra del hombre.
            </a>
            Pueden ser intencionales, como la quema para sembrar, o no
            intencionales, como la chispa de un tendido eléctrico sobre maleza. En los trópicos, donde hay pocos
            relámpagos o suelen estar acompañados por la lluvia, el porcentaje es mayor. Expertos estiman que
            en Venezuela cerca del 99% de los incendios son iniciados por humanos.
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
          id: 'texto-2',
          alignment: 'texto-simple',
          hidden: false,
          description: `
            El Caimán del Orinoco puede ser tan largo como un minibus de 12 puestos y  solo existe en Venezuela y
            Colombia. En Venezuela había millones de individuos en los llanos, sabanas inundables, áreas boscosas
            e incluso en el piedemonte andino. Hoy quedan menos de 250.000 individuos en el mundo, estima la
            Unión Internacional para la Conservación de la Naturaleza. En los años treinta lo cazaban para
            hacer zapatos, abrigos, carteras, botas y otros artículos de piel, pero hoy la mayor amenaza es la
            pérdida de su hábitat. Una de las poblaciones más importantes que quedan, está en Aguaro-Guariquito.
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
          id: 'fotografia-juan-carlos-perez',
          alignment: 'infografia',
          hidden: false,
          image: './juan.jpg',
          description: `
            Desde 2001, los incendios han aumentado en 63 de las 80 Áreas Protegidas del país,
            incluyendo todos los Santuarios de Fauna Silvestre, el 93% de los Parques Nacionales,
            71% de las Reservas de Fauna Silvestre, 57% de los Monumentos Naturales y 42% de los
            Refugios de Fauna Silvestre. Pero el aumento es desigual. Fotografía de <b>Juan Carlos Pérez</b>
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
          image: './racionamiento.jpeg',
          description: `
            Desde 2001, los incendios han aumentado en 63 de las 80 Áreas Protegidas del país, incluyendo
            todos los Santuarios de Fauna Silvestre, el 93% de los Parques Nacionales, 71% de las Reservas
            de Fauna Silvestre, 57% de los Monumentos Naturales y 42% de los Refugios de Fauna Silvestre.
            Pero el aumento es desigual. Fotografía de <b>Juan Carlos Pérez</b>
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
          id: 'video-documental',
          alignment: 'embeded',
          hidden: false,
          description: `
            <iframe
              width="640" height="360"
              src="https://www.youtube-nocookie.com/embed/fYEzJsZvffU"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            ></iframe>
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
          id: 'texto-mapa-1',
          alignment: 'texto-mapa',
          description: `
            Desde que se creó en 2017, el 75% de los focos de incendios están concentrados en la superposición con el Arco Minero,
            sobre vegetación de bosques semicaducifolios al este y sabanas arbustivas/arboladas al oeste.
            <br/><br/>
            Sin embargo, al revisar imágenes satelitales de la Zona 2 del Arco Minero dentro del parque, detectamos más intervenciones
            agrícolas y ganaderas, que minería. La mayoría de estos focos ocurren en tierras agropecuarias.
            <br/><br/>
            Las poblaciones indígenas tradicionales del territorio, los Sanemá y Yekwana, también queman para sembrar.
            Pero utilizan técnicas muy particulares de rotación de campos de cultivo. Los Yekwana limpian el área de cultivo y
            siembran por 2 a 8 años. Luego abandonan el conuco para que regrese la vegetación nativa, y 15 o 20 años después, la retoman.
            Los Sanemá le dedican menos tiempo a desyerbar la parcela, y una vez que la cultivan, no regresan al lugar por 50 o 60 años.
            Estas técnicas milenarias permiten que los ecosistemas se recuperen y no representan una amenaza a largo plazo.
          `,
          location: {
            center: [-64.41448, 5.66208],
            zoom: 15.46,
            pitch: 6.00,
            bearing: -8.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-2',
          alignment: 'texto-mapa',
          description: `
            Las poblaciones indígenas tradicionales del territorio, los Sanemá y Yekwana, también queman para sembrar.
            Pero utilizan técnicas muy particulares de rotación de campos de cultivo. Los Yekwana limpian el área de
            cultivo y siembran por 2 a 8 años. Luego abandonan el conuco para que regrese la vegetación nativa, y
            15 o 20 años después, la retoman. Los Sanemá le dedican menos tiempo a desyerbar la parcela, y una vez
            que la cultivan, no regresan al lugar por 50 o 60 años. Estas técnicas milenarias permiten que los
            ecosistemas se recuperen y no representan una amenaza a largo plazo.
            <br/><br/>
            <img src="./Incendios-amazonas-agro.jpg">
              <figcaption>Los Sanemá y Yekwuana tienen 15 años reclamando 4 millones de hectáreas.</figcaption>
            </img>
            <br/>
            En comparación, las siembras detectadas en el norte del parque son más extensas. Se deforestan
            parcelas boscosas contiguas y se siembran por largos periodos de tiempo hasta agotar los nutrientes
            de la tierra. Luego se deforestan y queman otros terrenos para continuar sembrando.
          `,
          location: {
            center: [-64.41448, 5.66208],
            zoom: 15.46,
            pitch: 6.00,
            bearing: -8.80
          },
          mapAnimation: 'flyTo',
          rotateAnimation: false,
          callback: ''
        },
        {
          id: 'texto-mapa-3',
          alignment: 'texto-mapa',
          description: `
            Entre 2000 y 2018 se han perdido al menos 2.899 kilómetros cuadrados de bosque en la Amazonía venezolana,
            encontró Provita, X. Es un área equivalente a 2.7 veces la isla de Margarita. La actividad agropecuaria es
            el mayor motor, siendo responsable del 90% del área total deforestada o 2.600 kilómetros cuadrados de bosque.
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
          id: 'texto-mapa-3',
          alignment: 'texto-mapa',
          description: `
            La minería representa apenas un 9% del total. A pesar de que su extensión no es
            tan grande, se ha intensificado notablemente en los últimos años, según
            “Amazonía y Acción Climática en Venezuela (StoryMap)” de Provita.
            <br/><br/>
            Detectamos 14 minas ilegales dentro del Parque Nacional, fuera de la superposición
            con el Arco Minero, de que no estaban identificadas previamente por la Red Amazónica
            de Información Socioambiental Georreferenciada (RAISG). Estas minas coinciden con
            áreas de alta concentración de incendios dentro del parque.
            <br/><br/>
            Los mineros usan el fuego para degradar y deforestar el bosque. Queman, para
            abrir espacios de minería. Pero también usan el fuego para limpiar las áreas
            donde viven —donde van a construir sus casas y sembrar su comida— que normalmente
            están cerca de las minas. Viven donde trabajan.
            <br/><br/>
            En 13 de las 14 minas detectadas, hay focos de calor VIIRS a menos de 3,2 kilómetros
            de distancia en línea recta. De 24 minas identificadas por RAISG, la mitad tienen
            un incendio a menos de 3,6 kilómetros.
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
        }
    ]
};
