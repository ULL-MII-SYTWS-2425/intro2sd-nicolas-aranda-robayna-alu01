class JekyllSearch {
  constructor({ dataSource, searchField, resultsList, siteURL }) {
    this.dataSource = dataSource;
    this.searchField = document.querySelector(searchField);
    this.resultsList = document.querySelector(resultsList);
    this.siteURL = siteURL;

    this.data = [];
  }

  fetchedData() {
    return fetch(this.dataSource)
      .then(blob => blob.json())
      .catch(error => {
        console.error("Error fetching data:", error);
        return [];
      });
  }

  async findResults() {
    this.data = await this.fetchedData()

    const query = this.searchField.value.trim()
    if (!query) return []; // Si no hay input, no buscar

    try {
      const regex = new RegExp(query, 'i')
      return this.data.filter(item => {
        return item.title.match(regex) || item.content.match(regex);
      });
    } catch (error) {
      console.error('Invalid search pattern:', error.message);
      return [];
    }
  }

  async displayResults() {
    const results = await this.findResults();

    const html = results.map(item => {
      return `
          <li class="result">
              <article class="result__article  article">
                  <h4>
                    <a href="${item.url}">${item.title}</a>
                  </h4>
                  <p>${item.excerpt}</p>
              </article>
          </li>`;
    }).join('');

    if (results.length === 0 || this.searchField.value === '') {
      this.resultsList.innerHTML = `<p>No se ha encontrado ningún resultado.</p>`;
    } else {
      this.resultsList.innerHTML = html;
    }
  }

  init() {
    const url = new URL(document.location);
    if (url.searchParams.get("search")) {
      this.searchField.value = url.searchParams.get("search");
      this.displayResults();
    }
    this.searchField.addEventListener('keyup', () => {
      this.displayResults();
      url.searchParams.set("search", this.searchField.value);
      window.history.pushState('', '', url.href);
    });

    // Para evitar que el formulario se envíe al presionar Enter
    this.searchField.addEventListener('keypress', event => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  }
}
