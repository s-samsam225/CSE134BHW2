class HelloWorld extends HTMLElement {
    connectedCallback() {
      console.log("Hello world! — from <hello-world>");
    }
  }
  customElements.define("hello-world", HelloWorld);
  