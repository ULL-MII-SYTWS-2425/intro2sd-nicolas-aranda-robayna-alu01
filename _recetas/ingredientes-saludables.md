---
title: "Ingredientes Saludables"
date: 2024-11-13
---

A continuación, se muestran algunos ingredientes saludables con sus beneficios:

## Frutas

{% for fruta in site.data.ingredientes.frutas %}
- **{{ fruta.nombre }}** ({{ fruta.calorias_por_100g }} cal/100g)
  - Beneficios:
    {% for beneficio in fruta.beneficios %}
    - {{ beneficio }}
    {% endfor %}
{% endfor %}

## Verduras

{% for verdura in site.data.ingredientes.verduras %}
- **{{ verdura.nombre }}** ({{ verdura.calorias_por_100g }} cal/100g)
  - Beneficios:
    {% for beneficio in verdura.beneficios %}
    - {{ beneficio }}
    {% endfor %}
{% endfor %}

## Grasas saludables

{% for grasas_saludables in site.data.ingredientes.grasas_saludables %}
- **{{ grasas_saludables.nombre }}** ({{ grasas_saludables.calorias_por_100g }} cal/100g)
  - Beneficios:
    {% for beneficio in grasas_saludables.beneficios %}
    - {{ beneficio }}
    {% endfor %}
{% endfor %}
