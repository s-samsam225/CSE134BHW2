class PortfolioCallout extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("portfolio-callout", PortfolioCallout);


class HelloWorld extends HTMLElement {
    connectedCallback() {
      console.log("Hello world! — from <hello-world>");
    }
  }
  customElements.define("hello-world", HelloWorld);
  
