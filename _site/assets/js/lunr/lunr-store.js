var store = [{
        "title": "Informe",
        "excerpt":"{{ page.color }}  # Introducción al Desarrollo de Sistemas  **Autor:** James Cadle   **Fuente:** Developing Information Systems: Practical Guidance for IT Professionals    ## Contenidos del Capítulo 1. **Propósito y alcance** del desarrollo de sistemas. 2. **Etapas típicas** en el proceso de desarrollo. 3. **Relación con otras disciplinas** como gestión de proyectos, análisis de negocios y arquitectura de sistemas. 4. **Impacto del offshoring y outsourcing** en el desarrollo de sistemas. 5. **Visión general** de los capítulos siguientes.  ## ¿Qué es el Desarrollo de Sistemas? El desarrollo de sistemas es el proceso estructurado de convertir necesidades de negocio en un sistema operativo de TI. Las etapas comunes incluyen: - **Estudio de viabilidad:** determinar si el proyecto es viable. - **Ingeniería de requisitos:** analizar y especificar necesidades del usuario. - **Diseño del sistema:** planificar cómo el sistema cumplirá los requisitos. - **Desarrollo:** programar el software necesario. - **Pruebas e implementación:** verificar y desplegar la solución.  ## Disciplinas Relacionadas - **Gestión de proyectos:** coordinación y planificación de recursos. - **Análisis de negocios:** investigación de problemas y oportunidades. - **Arquitectura de sistemas:** desarrollo de una arquitectura que permita la expansión del sistema. - **Programación y pruebas:** creación del código y verificación de su calidad. - **Control de calidad y gestión del cambio:** asegurar que los sistemas cumplan con los estándares de calidad.  ## Offshoring y Outsourcing - **Offshoring:** desarrollo en otros países para reducir costos. - **Outsourcing:** externalización de desarrollo a empresas especializadas, lo cual puede implicar una pérdida de control sobre sistemas críticos.","categories": ["Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "/intro2sd-nicolas-aranda-robayna-alu01/chuchu",
        "teaser": null
      },{
        "title": "Ensalada de Garbanzos y Aguacate",
        "excerpt":"Esta ensalada de garbanzos y aguacate es una opción fácil y nutritiva para el almuerzo. Es rica en proteínas vegetales, fibra y grasas saludables.  ## Ingredientes  * 1 taza de garbanzos cocidos (o de lata, enjuagados) * 1 aguacate en cubos * 1/2 pimiento rojo en cubos * 1/4 taza de cebolla morada picada * Jugo de 1 limón * 1 cucharada de aceite de oliva * Sal y pimienta al gusto  ## Instrucciones  1. En un tazón grande, mezcla los garbanzos, aguacate, pimiento rojo y cebolla. 2. Agrega el jugo de limón, aceite de oliva, sal y pimienta, y revuelve bien. 3. Sirve la ensalada inmediatamente o guárdala en el ","categories": ["almuerzo,","saludable"],
        "tags": [],
        "url": "/intro2sd-nicolas-aranda-robayna-alu01/recetas/ensalada-garbanzos-aguacate/",
        "teaser": null
      },{
        "title": "Smoothie Verde Detox",
        "excerpt":"El smoothie verde es una excelente opción para aumentar tu consumo de verduras y frutas. Contiene nutrientes esenciales y es perfecto para un desayuno rápido o una merienda saludable.  ## Ingredientes  * 1 taza de espinacas frescas * 1/2 taza de piña en trozos * 1/2 taza de mango en trozos * 1/2 plátano * 1 taza de agua de coco o agua natural * Jugo de 1/2 limón  ## Instrucciones  1. Coloca todos los ingredientes en una licuadora. 2. Mezcla a alta velocidad hasta obtener una consistencia suave. 3. Vierte en un vaso y disfruta al instante. ","categories": ["batidos,","saludable"],
        "tags": [],
        "url": "/intro2sd-nicolas-aranda-robayna-alu01/recetas/smoothie-verde/",
        "teaser": null
      },{
        "title": "Ingredientes Saludables",
        "excerpt":"A continuación, se muestran algunos ingredientes saludables con sus beneficios:  ## Frutas  {% for fruta in site.data.ingredientes.frutas %} - **{{ fruta.nombre }}** ({{ fruta.calorias_por_100g }} cal/100g)   - Beneficios:     {% for beneficio in fruta.beneficios %}     - {{ beneficio }}     {% endfor %} {% endfor %}  ## Verduras  {% for verdura in site.data.ingredientes.verduras %} - **{{ verdura.nombre }}** ({{ verdura.calorias_por_100g }} cal/100g)   - Beneficios:     {% for beneficio in verdura.beneficios %}     - {{ beneficio }}     {% endfor %} {% endfor %}  ## Grasas saludables  {% for grasas_saludables in site.data.ingredientes.grasas_saludables %} - **{{ grasas_saludables.nombre }}** ({{ grasas_saludables.calorias_por_100g }} cal/100g)   - Beneficios:     {% for beneficio in grasas_saludables.beneficios %}     - {{ beneficio }}     {% endfor %} {% endfor %} ","categories": [],
        "tags": [],
        "url": "/intro2sd-nicolas-aranda-robayna-alu01/recetas/ingredientes-saludables/",
        "teaser": null
      },{
        "title": "Avena Nocturna",
        "excerpt":"La avena nocturna es un desayuno rápido y saludable que se prepara la noche anterior, ideal para las mañanas ocupadas. Es rica en fibra y grasas saludables.  ## Ingredientes  * 1/2 taza de avena en hojuelas * 1/2 taza de leche de almendras sin azúcar (o leche de tu elección) * 1/4 taza de yogur griego * 1 cucharada de semillas de chía * 1/2 cucharadita de extracto de vainilla * Frutas frescas, para decorar * Un chorrito de miel o jarabe de arce (opcional)  ## Instrucciones  1. En un frasco o tazón, combina la avena, leche de almendras, yogur griego, semillas de chía y extracto de vainilla. 2. Tapa y refrigera durante la noche. 3. A la mañana siguiente, agrega frutas frescas y un poco de miel si deseas. ¡Disfruta!  ---  {% if page.date | date: \"%Y-%m-%d\" == site.time | date: \"%Y-%m-%d\" %} > **¡Novedad!** Este artículo acaba de ser publicado. ¿Por qué no pruebas esta receta y nos cuentas qué tal te quedó? {% else %} > **¡Nota del editor!** Este artículo fue publicado el {{ page.date | date: \"%d de %B de %Y\" }}, pero su contenido sigue siendo relevante para un desayuno rápido y saludable. {% endif %}  ---","categories": ["post"],
        "tags": [],
        "url": "/intro2sd-nicolas-aranda-robayna-alu01/recetas/avena-nocturna/",
        "teaser": null
      }]
