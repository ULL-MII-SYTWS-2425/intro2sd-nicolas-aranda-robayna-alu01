---
permalink: /search/
title: Search
---

{% capture initSearch %}

<form id="search-form" action="">
  <label class="label" for="searchBar">Término de búsqueda (acepta regex):</label>
  <br/>
  <input class="input" id="searchBar" type="text" name="searchBar" 
        autofocus 
        placeholder="ej. desayuno" 
        autocomplete="off">
  
  <ul class="list  list--results" id="list">
  </ul>
</form>

<script type="text/javascript" src='{{site.baseurl}}/assets/src/fetch.js'></script>
<script type="text/javascript" src='{{site.baseurl}}/assets/src/search.js'></script>

<script type="text/javascript">
  const jekyllSearch = new JekyllSearch({
    dataSource: '{{site.baseurl}}/assets/src/search.json',
    searchField: '#searchBar',
    resultsList: '#list',
    siteURL: '{{site.baseurl}}'
  });
  jekyllSearch.init(); 
</script>

<noscript>Please enable JavaScript to use the search form.</noscript>

{% endcapture %}

{{ initSearch | lstrip }}