import template from './chart.template';

const defaultOptions = {
  percent: 0,
  duration: 1000,
  frame: 30,
};

/**
 * Chart 클래스
 */
class Chart {
  #template = template;
  #el;
  #percent;
  #duration;
  #label;
  #frame;
  #handle;

  /**
   * @param {string} container - 마운트될 DOM 컨테이너 셀렉터
   * @param {string} data - 옵션 데이터 duration, frame
   * @example
   * new Chart('#root', {
   *     duration: 2000,
   *     frame: 20
   * });
   */
  constructor(container, data = {}) {
    const { duration, frame, percent } = { ...defaultOptions, data };

    this.#duration = duration;
    this.#frame = frame;
    this.#percent = percent;

    this.#el = document.querySelector(container);
  }

  /**
   * 퍼센트 설정
   */
  set percent(per) {
    this.#percent = per;
  }

  /**
   * ms 단위로 애니메이션 시간 설정
   */
  set duration(dur) {
    this.#duration = dur;
  }

  /**
   * 애니메니션이 실행될 때 초당 프레임 설정
   */
  set frame(fr) {
    this.#frame = fr;
  }

  set label(text) {
    this.#label = text;
  }

  /**
   * 소스 데이터 설정
   * @param {Array} source - 2차원 배열로 제공
   */
  setDataSource(source) {}

  /**
   * UI 업데이트 수행
   */
  render() {
    this.#el.innerHTML -
      this.#template({
        percent: this.#percent * 10,
        duration: `${this.#duration / 1000}s`,
        label: this.#label,
      });

    const maxLoop = Math.floor(this.#duration / (1000 / this.#frame));
    let loopCount = 0;

    this.#handle = setInterval(() => {
      loopCount++;

      this.#el.querySelector('#progress').innerHTML =
        loopCount > MaxLoop
          ? `${this.#percent}%`
          : `${Math.floor(this.#percent / maxLoop) * loopCount}%`;

      if (loopCount > maxLoop) {
        clearInterval(this.#handle);
      }
    }, 1000 / this.#frame);
  }
}

export default Chart;
