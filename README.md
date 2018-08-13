# Front-end-framework Concepts (SPAs, Components)

## Objectives

* Describe Single-Page Applications (SPA)
* Identify SPAs in the wild
* Explain some benefits of componentization
* Refactor existing code into components

## Notes

* *Describe Single-Page Applications (SPA)*
  - Dynamically created
    * Templating
  - Behaves more like a desktop appilication
    * Performance is really slick (after initial load)
    * Provide a really good UX
  - Content necessary to run the app is loaded on initial page
    * Depending on size of app and amount of data
    * Request more data from API on different views
  - NOT THE SAME AS CSS FRAMEWORKS
    * Or 'component libraries'
  
* *Identify SPAs in the wild*
  - Facebook
  - Twitter
  - Instagram
  - NOT myspace
  - NOT geocities
  - Gmail was a seminal SPA

* *What are components?*
  - JavaScript functions take props as inputs and return a template
  - Little chunks of the page (views) that can operate independently
    * They can be linked together in some ways (state, props)
  - Looking at a website, you can often visually identify components (if you understand concept)
  - Paradigm Shift: 
    * We no longer worry or think about the DOM
    * We worry about the DATA!
      - Where is it?
      - Is it changing?
      - Etc.
    * The framework takes care of the rest (updating DOM)
      - Conditional re-rendering
  
* *Explain some benefits of componentization*
  - Conditional rendering & re-rendering
  - REUSABILITY!
    - Component libraries are a thing
  - DRY code
    - Dynamic rendering
    - Write code for component once
  - Debugging
    - The frameworks often have their own dev tools
    - Helpul error messages in browser
    - Chrome/Firefox extensions

* *Extra*
  - Convention over Configuration (Ember)
  - React/Vue/Angular give you more flexibility in file structure, architecture etc.

## Resources

* [Code Repo](https://github.com/matt-winzer/front-end-framework-concepts)
* [Single-Page Application - Wikipedia](https://en.wikipedia.org/wiki/Single-page_application)
* [Components & Props - React Docs](https://reactjs.org/docs/components-and-props.html)
* [Learn React - gSchool Slides](https://github.com/gSchool/LectureDocs/blob/master/React/LearnToCodeReact.pdf)
* [Ultimate Guide to FEF’s](https://javascriptreport.com/the-ultimate-guide-to-javascript-frameworks/)
* [Super-Brief History of JS Frameworks](https://dev.to/_adam_barker/the-super-brief-history-of-javascript-frameworks-for-those-somewhat-interested-3m82)