export class Ticker {
  private ticker: HTMLElement;

  private list: HTMLElement;

  private clone!: HTMLElement;

  private duration!: number;

  constructor(tickerSelector: string, listSelector: string) {
    this.ticker = document.querySelector(tickerSelector) as HTMLElement;
    this.list = document.querySelector(listSelector) as HTMLElement;

    if (this.ticker && this.list) {
      this.clone = this.list.cloneNode(true) as HTMLElement;
      this.duration = this.list.offsetWidth;
      this.init();
    }
  }

  private init() {
    this.ticker.appendChild(this.clone);
    this.clone.style.animationDuration = this.duration / 50 + 's';
    this.list.style.animationDuration = this.duration / 50 + 's';
  }
}
