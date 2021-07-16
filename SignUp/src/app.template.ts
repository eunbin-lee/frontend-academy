const template = `
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">

    <div class="leading-loose">
      <form id="sign-up-form" class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium mb-5 text-center">{{title}}</p>
        <div id="required-fields">
        
        </div>
        
        <p class="mt-8 text-gray-300 text-sm">Additional information</p>

        <div id="optional-fields">
        
        </div>

        <div class="mt-4">
          <button id="btn-join" class="px-4 py-1 text-white font-light tracking-wider bg-gray-300 rounded" type="submit">회원 가입</button>
        </div>    
      </form>
    </div>

  </div>
</div>
`;

export default window.Handlebars.compile(template);
/* 
window의 Handlebars의 컴파일러에게 template을 넘겨주어
Handlebars의 컴파일 메소드가 리턴한 함수를 export한다.
app.ts에서 export된 Handlerbars template을 가지고
데이터를 주입하여 최종적인 HTML을 만들게 된다.
*/
