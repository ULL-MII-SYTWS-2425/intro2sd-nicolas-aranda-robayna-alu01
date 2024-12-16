[![Netlify Status](https://api.netlify.com/api/v1/badges/2a0777f4-0f51-47c6-aa0f-92dc6b1453da/deploy-status)](https://app.netlify.com/sites/intros2d-nicarandar/deploys)

# Práctica: Intro 2sd

Alumno: **[Nicolás Aranda](https://campusdoctoradoyposgrado2425.ull.es/user/view.php?id=24251103382)** - [nicarandar](https://github.com/nicarandar)

## Kanban Board project conteniendo las incidencias de la rúbrica
![image](https://github.com/user-attachments/assets/05210160-c177-4c8a-b117-bf76c5ba2e0a)

Creamos una branch para dejar esta versión de la práctica intro2sd. En el main seguimos con la siguiente.

## Github Pages
(https://ull-mii-sytws-2425.github.io/intro2sd-nicolas-aranda-robayna-alu01/)

![image](https://github.com/user-attachments/assets/1c27eb60-1d06-4ec7-86d8-15218d225250)
## Se ha creado una Jekyll Collection (recetas)
![image](https://github.com/user-attachments/assets/0dc03f1b-c378-430b-a2cb-b4ddf01a2d84)
## Se ha hecho uso de un .csv o .json en `_data`

<p>Se hizo un post en el que se cargan los datos de un archivo .json de frutas con sus propiedades.</p>

![image](https://github.com/user-attachments/assets/92991b25-0d65-49a6-a70f-478d61cc1e7d)
---
### Frutas

{% for fruta in site.data.ingredientes.frutas %}
- **{{ fruta.nombre }}** ({{ fruta.calorias_por_100g }} cal/100g)
  - Beneficios:
    {% for beneficio in fruta.beneficios %}
    - {{ beneficio }}
    {% endfor %}
{% endfor %}
---
![image](https://github.com/user-attachments/assets/70f28cc2-02d3-4e46-87d6-69dbf90e1289)

## Se ha hecho uso de liquid
<p>EL uso de liquid que se ha hecho ha sido añadir un mensaje con una condición if-else si la fecha de la publicación es la misma que la actual o anterior. </p>

---

{% if page.date | date: "%Y-%m-%d" == site.time | date: "%Y-%m-%d" %}
> **¡Novedad!** Este artículo acaba de ser publicado. ¿Por qué no pruebas esta receta y nos cuentas qué tal te quedó?
{% else %}
> **¡Nota del editor!** Este artículo fue publicado el {{ page.date | date: "%d de %B de %Y" }}, pero su contenido sigue siendo relevante para un desayuno rápido y saludable.
{% endif %}

---
## Ha reconfigurado los defaults del _config.yml
Se han modificado el perfil del autor, el footer, los colores del tema y las colecciones para añadir la nueva colección de recetas. Estos han sido los cambios más destacados:

![image](https://github.com/user-attachments/assets/887a16b1-6cf5-4aba-990a-f45e5fe9a929)
![image](https://github.com/user-attachments/assets/a61c6d13-3e19-4b7c-8b0c-6d3d2c60df2a)

## Página Error 404 Personalizada

![image](https://github.com/user-attachments/assets/d3a30c88-6e8c-4a72-9a59-34f8cbbfb177)
  

# Jekyll Search
https://ull-esit-dmsi.github.io/tema1-introduccion/practicas/jekyll-search/#como-hacerlo

Lo de las baseurl y url no se sabe cuáles son las buenas
< script type="text/javascript">

  const search = new JekyllSearch(
    '{{site.url}}/assets/src/search.json',
    '#search',
    '#list',
    '{{site.baseurl}}'
