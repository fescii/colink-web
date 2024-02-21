export default class LogonContainer extends HTMLElement {
  constructor() {

    // We are not even going to touch this.
    super();

    // lets create our shadow root
    this.shadowObj = this.attachShadow({ mode: 'open' });

    this.render();

  }


  render() {
    // this.shadowObj.innerHTML = this.getTemplate();
    this.shadowObj.innerHTML = this.getTemplate();
  }

  connectedCallback() {
    // console.log('We are inside connectedCallback');

  }

  disconnectedCallback() {
    // console.log('We are inside disconnectedCallback');
  }


  disableScroll() {
    // Get the current page scroll position
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    document.body.classList.add("stop-scrolling");

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  enableScroll() {
    document.body.classList.remove("stop-scrolling");
    window.onscroll = function () { };
  }

  getTemplate() {
    
  }

  getStyles() {
    return `
    <style>
      * {
        box-sizing: border-box !important;
      }
      :host{
        border: none;
      }

      </style>
    `;
  }
}