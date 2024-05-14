# Requirements - Interactive World Map

## Requirements

- Identify an SVG map of the world you will use to provide the visual 
  interface for this project.

- Using either the GeoNames or Worldbank API from the Web Links section,
  identify each of the following six properties for each country:
  - country name (e.g., Chad)
  - country capital (e.g., N’Djamena)
  - country region (e.g., Sub-Saharan Africa)
  - income level (e.g., low income)
  - two additional country properties of your choice

- Assign the map component to the default URL using an Angular routing module.

- Create an HTML layout with two columns: one column for the map itself and one
  column to show the required country information from the API in part B.

- Convert the SVG map into an interactive Angular component by connecting all
  the “path” tags inside the SVG file to mouse event handlers so each path is
  recognized and transmitted to the parent component hosting the map if a mouse
  event occurs.

- Generate an API service that uses the built-in Angular module HTTP client to
  make HTTP calls and include the following:
  - one method that accepts a country name as an input parameter that returns additional information gathered from the API for the selected country
  - one method that will trigger the API call when a country is selected and set a local variable that will receive the information about the country for display in the right column of the HTML page

- Provide a compressed file of your website, including each of the following files:
  - HTML
  - TS
  - SVG
  - JSON configuration files

- Acknowledge sources, using in-text citations and references, for content that
  is quoted, paraphrased, or summarized.

- Demonstrate professional communication in the content and presentation of
  your submission.

## Rubric

- [x] IDENTIFY AN SVG: The submission identifies an SVG map of the world to
      provide the visual interface.
- [ ] API WEB LINKS: The API identified is listed in the Web Links section and
      contains all 6 properties for each country.
- [ ] ANGULAR ROUTING MODULE: The map component is assigned to the default URL
      using an Angular routing module.
- [ ] HTML LAYOUT: The HTML layout is created and includes 2 columns, 1 column
      for the map itself and 1 column to show the required country information
      from the API in part B.
- [ ] CONVERSION TO ANGULAR COMPONENT: The SVG map is converted into an
      interactive Angular component with all of the "path" tags inside the SVG
      file connected to mouse event handlers so that each path is transmitted
      to the parent component hosting the map. The map functions correctly.
- [ ] API SERVICE: The API service is generated and uses the built-in Angular
      module HTTP client to make HTTP calls and includes both required methods,
      and both methods function correctly.
- [ ] COMPRESSED FILE: The submission provides a compressed file of the website
      and includes each of the 4 required files.
- [ ] SOURCES: The submission includes in-text citations for sources that are
      properly quoted, paraphrased, or summarized and a reference list that
      accurately identifies the author, date, title, and source location as
      available.
- [ ] PROFESSIONAL COMMUNICATION: Content reflects attention to detail, is
      organized, and focuses on the main ideas as prescribed in the task or
      chosen by the candidate. Terminology is pertinent, is used correctly,
      and effectively conveys the intended meaning. Mechanics, usage, and
      grammar promote accurate interpretation and understanding.

## Reference 

- [Geonames](https://www.geonames.org/export/web-services.html)
- [Worldbank](https://datahelpdesk.worldbank.org/knowledgebase/articles/898581-api-basic-call-structures)
