export class CleanedURL {
  constructor(url) {
    this.url = url;
  }

  stripScheme() {
    if (this.url) this.url = this.url.split('//')[1];
    return this;
  }

  stripTrailingSlash() {
    if (this.url)
      this.url = this.url.endsWith('/') ? this.url.slice(0, -1) : this.url;
    return this;
  }

  stripWWW() {
    if (this.url)
      this.url = this.url.startsWith('www.') ? this.url.slice(4) : this.url;
    return this;
  }

  cleaned() {
    return this.stripScheme().stripWWW().stripTrailingSlash().url;
  }
}
