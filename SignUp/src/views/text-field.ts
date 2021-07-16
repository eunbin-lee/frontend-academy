import { nextTick } from '../utils';
import { ValidateRule } from '../types';
import template from './text-field.template';
import { RequireRule } from '../constant';

type Props = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'number';
  placeholder?: string;
  text?: string;
  require: boolean;
};

const DefaultProps: Props = {
  id: '',
  text: '',
  label: 'label',
  type: 'text',
  placeholder: '',
  require: false,
};

export default class TextField {
  private template = template;
  private container: string;
  private data: Props;
  private updated: boolean = false; // 사용자가 최초의 입력을 했는지 안했는지를 체크
  private validateRules: ValidateRule[] = [];

  constructor(container: string, data: Props) {
    this.container = container;
    this.data = { ...DefaultProps, ...data };

    if (this.data.require) {
      this.addValidateRule(RequireRule);
    }

    nextTick(this.attachEventHandler);
  }

  private validate = (): ValidateRule | null => {
    const target = this.data.text ? this.data.text.trim() : ''; // 사용자가 입력한 값

    const invalidateRules = this.validateRules.filter(
      (validateRule) => validateRule.rule.test(target) !== validateRule.match,
    );

    return invalidateRules.length > 0 ? invalidateRules[0] : null;
  };

  private buildData = () => {
    const isInvalid: ValidateRule | null = this.validate();

    if (this.updated) {
      // 최초의 입력값이 있을 때
      return {
        ...this.data,
        updated: this.updated,
        valid: !isInvalid,
        validateMessage: !!isInvalid ? isInvalid.message : '',
      };
    } else {
      // 최초의 입력값이 없을 때
      return {
        ...this.data,
        updated: this.updated,
        valid: true,
        validateMessage: '',
      };
    }
  };

  private onChange = (e: Event) => {
    const { value, id } = e.target as HTMLInputElement;

    if (id === this.data.id) {
      this.updated = true;
      this.data.text = value;
      this.update();
    }
  };

  private attachEventHandler = () => {
    document
      .querySelector(this.container)
      ?.addEventListener('change', this.onChange);
  };

  private update = () => {
    const container = document.querySelector(
      `#field-${this.data.id}`,
    ) as HTMLElement;
    const docFrag = document.createElement('div');

    /*
    [ dogFrag 상수를 사용하는 이유 ]
    컴포넌트의 상위 요소(container)에 이벤트 핸들러를 적용시켰기 때문에
    기존의 container UI를 유지하면서 container의 안쪽만 바꿔야 한다.

    innerHTML로 새로운 UI로 업데이트될 때는 핸들러 자체도 사라지게 되므로
    부모에게 이벤트 핸들러를 걸고 자식 요소를 업데이트 시키는 방식으로 구현하는 것이 효율적이다.
    */

    docFrag.innerHTML = this.template(this.buildData());
    container.innerHTML = docFrag.children[0].innerHTML;
  };

  public get name(): string {
    return this.data.id;
  }

  public get value(): string {
    return this.data.text || '';
  }

  public get isValid(): boolean {
    return !this.validate();
  }

  // 1개의 항목에 N개의 벨리데이터 설정
  public addValidateRule = (rule: ValidateRule) => {
    this.validateRules.push(rule);
  };

  public render = (append: boolean = false) => {
    const container = document.querySelector(this.container) as HTMLElement;

    if (append) {
      // 추가할 text field가 있다면
      const divFragment = document.createElement('div');
      divFragment.innerHTML = this.template(this.buildData());

      container.appendChild(divFragment.children[0]);
    } else {
      container.innerHTML = this.template(this.buildData());
    }
  };
}
