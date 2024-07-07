import CreateElement from './createElement';

class CreateInputElement extends CreateElement {
  public placeholder: string;

  public type: string;

  public required: boolean;

  constructor(options: {
    placeholder?: string;
    type?: string;
    required?: boolean;
    target?: string;
    className?: string;
  }) {
    super('input', options.className ? { className: options.className } : undefined);
    this.placeholder = options.placeholder || '';
    this.type = options.type || 'text';
    this.required = options.required || false;
  }

  createElement(): HTMLInputElement {
    const input = super.createElement() as HTMLInputElement;
    input.placeholder = this.placeholder;
    input.type = this.type;
    input.required = this.required;
    return input;
  }
}

export default CreateInputElement;
