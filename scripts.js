import { LitElement, html, css } from "./libs/lit-html.js";

console.log(css);
class App extends LitElement {
  static get properties() {
    return {
      count: { type: Number },
      MAX_NUMBER: { type: Number },
      MIN_NUMBER: { type: Number },
      STEP_AMOUNT: { type: Number },
      state: { type: String },
      subtractDisable: { type: Boolean },
      addDisable: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.count = 0;
    this.MAX_NUMBER = 15;
    this.MIN_NUMBER = -5;
    this.STEP_AMOUNT = 1;
    this.state = "Normal";
    this.subtractDisable = false;
    this.addDisable = false;
  }

  increment() {
    this.subtractDisable = false;
    this.count = this.count + this.STEP_AMOUNT;
    this.updateState();
  }

  decrement() {
    this.addDisable = false;
    this.count = this.count - this.STEP_AMOUNT;
    this.updateState();
  }

  reset() {
    this.subtractDisable = false;
    this.addDisable = false;
    this.count = 0;
    this.updateState();
  }

  updateState() {
    if (this.count === this.MIN_NUMBER) {
      this.state = "Minimum Reached";
      this.subtractDisable = true;
      console.log(this.state);
    } else if (this.count === this.MAX_NUMBER) {
      this.state = "Maximum Reached";
      this.addDisable = true;
      console.log(this.state);
    } else {
      this.state = "Normal";
      console.log(this.state);
    }
  }

  render() {
    /**@returns {any} */
    return html`
      <link rel="stylesheet" href="./css/counter.css" />
      <div>
        <input
          class="counter__value"
          data-key="number"
          readonly
          value=${this.count}
        />
        <div class="counter__actions">
          <button
            data-key="subtract"
            class="counter__button counter__button_first"
            @click=${this.decrement}
            ?disabled=${this.subtractDisable}
          >
            -
          </button>
          <button
            data-key="add"
            class="counter__button counter__button_first"
            @click=${this.increment}
            ?disabled=${this.addDisable}
          >
            +
          </button>
          <button data-key="reset" class="counter__button" @click=${this.reset}>
            Reset
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define("my-count", App);
