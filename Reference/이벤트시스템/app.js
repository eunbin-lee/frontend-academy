/* 
[ 버블링 이벤트 ]
: 안쪽에 있는 요소가 클릭됐을 때 click 이벤트가 안쪽에서 바깥쪽으로 전파되는 것 (노란색 → 파란색 → 빨간색 상자 순)

[ 캡쳐링 이벤트 ]
: 안쪽에 있는 요소가 클릭됐을 때 click 이벤트가 바깥쪽에서 안쪽으로 전파되는 것 (빨간색 → 파란색 → 노란색 상자 순)

[ 이벤트 루프 ]
추천 영상: https://www.youtube.com/watch?v=8aGhZQkoFbQ
*/

function main() {
  const BUBBLING_PHASE = false;
  const CAPTURING_PHASE = true;
  const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING'];

  function eventLogger({ target, currentTarget, eventPhase }) {
    console.log(
      `${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`,
    );
  }

  let divs = document.querySelectorAll('div');
  divs.forEach((div) =>
    div.addEventListener('click', eventLogger, CAPTURING_PHASE),
  );
}

document.addEventListener('DOMContentLoaded', main);
