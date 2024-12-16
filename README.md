[![Netlify Status](https://api.netlify.com/api/v1/badges/2a0777f4-0f51-47c6-aa0f-92dc6b1453da/deploy-status)](https://app.netlify.com/sites/intros2d-nicarandar/deploys)

# Práctica: Jekyll Search

Alumno: **[Nicolás Aranda](https://campusdoctoradoyposgrado2425.ull.es/user/view.php?id=24251103382)** - [nicarandar](https://github.com/nicarandar)

## Kanban Board project conteniendo las incidencias de la rúbrica
![image](https://github.com/user-attachments/assets/b95c2ab1-f446-400a-ba1d-1c3c4f237f43)

## Github Pages
(https://ull-mii-sytws-2425.github.io/intro2sd-nicolas-aranda-robayna-alu01/)

![image](https://github.com/user-attachments/assets/1c27eb60-1d06-4ec7-86d8-15218d225250)

## Resumen del capítulo 2

El enlace a la Bibliografía no permitía el acceso, pero en internet se encontró un pdf con facilidad.
![image](https://github.com/user-attachments/assets/409d916c-0be3-41a0-9367-78d2d18422be)

El resumen publicado como un artículo más en el blog.
![image](https://github.com/user-attachments/assets/4b5235cd-65a8-44a0-9f0b-8a7165a574c4)

## Resultados mientras tecleamos

En la función init() de la clase JekyllSearch se anade un listener que busca los resultados cada vez que se levanta una tecla.
```js
this.searchField.addEventListener('keyup', () => {
      this.displayResults()
      // So that when going back in the browser we keep the search
      url.searchParams.set("search", this.searchField.value)
      window.history.pushState('', '', url.href)
    })
```
![image](https://github.com/user-attachments/assets/e2a2af8f-7560-4e50-b14b-a63a0624f8c5)

## Resultados con enlace y breve resumen

En la función displayResults() se devuelve una lista con el siguiente html por cada resultado (por la función .map()) que incluye un elemento <article> con un <h4> con un enlace <a> y un resumen en texto <p>
```js
const html = results.map(item => {
      //console.log(item)
      return `
          <li class="result">
              <article class="result__article  article">
                  <h4>
                    <a href="${item.url}">${item.title}</a>
                  </h4>
                  <p>${item.excerpt}</p>
              </article>
          </li>`
    }).join('')
```

## Constructor recibe en un objeto los argumentos
```js
class JekyllSearch {
  constructor({ dataSource, searchField, resultsList, siteURL }) {
    this.dataSource = dataSource
    this.searchField = document.querySelector(searchField)
    this.resultsList = document.querySelector(resultsList)
    this.siteURL = siteURL

    this.data = [];
  }
```

## Búsqueda por expresiones regulares
Se ha modificado el archivo search.js para admitir alguna expresión más como que la búsqueda no tenga en cuenta el número de espacios y permitir buscar sin importar sin hay o no tilde en una letra concreta.

```js
async findResults() {
    this.data = await this.fetchedData();

    const query = this.searchField.value.trim();
    if (!query) return []; // Si no hay input, no buscar

    try {
      const regex = new RegExp(query
        .replace(/(\s+)/g, '\\s*') // Manejo de espacios
        .replace(/a/g, '[aá]')
        .replace(/e/g, '[eé]')
        .replace(/i/g, '[ií]')
        .replace(/o/g, '[oó]')
        .replace(/u/g, '[uú]'), 'i');
      return this.data.filter(item => {
        return item.title.match(regex) || item.content.match(regex)
      })
    } catch (error) {
      console.error('Invalid search pattern:', error.message);
      return [];
    }
  }
```
![image](https://github.com/user-attachments/assets/b61acfad-783f-434c-986d-1f6790895ff8)

