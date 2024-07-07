import CreateElement from './createElement';

export class CreateLinkElement extends CreateElement {
  public href: string;

  public target: string;

  constructor(options: { href: string; innerHTML?: string; target?: string; className?: string }) {
    super('a', options.className ? { className: options.className } : undefined, options.innerHTML);
    this.href = options.href;
    this.target = options.target || '_blank';
  }

  createElement(): HTMLLinkElement {
    const link = super.createElement() as HTMLLinkElement;
    link.href = this.href;
    link.setAttribute('target', this.target);
    link.innerHTML = this.innerHTML || '';
    return link;
  }
}

export default CreateLinkElement;
