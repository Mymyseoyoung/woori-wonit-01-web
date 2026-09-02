// https://runjs.app/play

// Ctrl + / 을 동시에 누르면 주석을 지정 / 해제 
/*
여러줄
주석
*/

// 한 줄 주석

// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.
// 반복문 : 똑같은 일을 계속 하지 않으려고 
// 조건문 : 상황에 따라 다른 결과를 만들기 위해서 -> 미디어쿼리로 현재 화면 사이즈에 따라 다른 배경화면을 출력 ! 


/* 
1. 변수 : 데이터를 담는 메모리주소 대신 짧게 부르는 방 이름.
숫자/ 문자/ boolean (참/ 거짓) /null/ 
선언과 할당으로 변수를 만들 수 있습니다. 
- var : 매번 만들고 지울 수 있는 방
- let : 한번 만들면 값을 바꾸는건 가능하지만, 새로 지우고 만들 수는 없는 방 
- const : 한번 만들면 값을 바꾸는게 불가능한 방 
*/


var a = 1 ; //세미콜론으로 마침표를 찍습니다 . 
a  

var a = 2;
a  

let b = 1;

/*let b = 2; let은 이미 만들어진 변수명을 다시 만들 수 없습니다.*/

let c = "apple";

c 
// let 은 재할당 가능 ! const 는 재할당 불가능 !
c="alter";
c

const d = "apple"; // const는 한번 만들면 값을 바꿀 수 없습니다.


// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙

#camelCase : 소문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙 
#PascalCase : 대문자로 시작하고, 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙 ( class 이름 같은 변수들 보다 더 큰 개념을 담는 변수명에는 PascalCase를 사용)
#snake_case : 소문자로 시작하고, 띄어쓰기 자리마다 _(언더바)로 처리하는 이름 규칙 
#kebab_case : 소문자로 시작하고, 띄어쓰기 자리마다 - (dash) 로 처리하는 이름 규칙


- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.
*/

var _num_edit =1;
_num_edit 


/*
3. 자료형 
- 7개의 기본자료형(primitive, 원시자료형), 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자): 정수, 실수를 모두 number 
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. 
  - bigInt : 아주 큰 숫자. 숫자 뒤에 소문자 n을 붙여서 관리
  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식

*/

var num1 = 1.345; // 정수 1 -> number , 실수 1.345 number 
num1 

typeof(num1); // 자료형을 확인하는 함수
console.log(typeof(num1));

// BigInt
// number가 100% 정확하게 표현할 수 있는 가장 큰 정수는 9,007,199,254,740,991(약 9007조)입니다. 이 숫자를 넘어가는 순간 자바스크립트는 계산 실수를 하기 시작합니다.
console.log(9007199254740992 === 9007199254740993); // true
// 1. 숫자 끝에 n 붙이기 (가장 많이 씀)
const bigNum1 = 123456789012345678901234567890n;

// 2. BigInt() 함수 사용하기 (주로 문자열을 변환할 때 씀)
const bigNum2 = BigInt("123456789012345678901234567890");

console.log(typeof bigNum1); // "bigint"

//3. String ( 문자들을 순서대로 늘어놓은 덩어리 )

var str = " 안녕하세요 ";// 큰따옴표 혹은 작은 따옴표로 글자 덩어리를 묶어줍니다.
console.log(str);

var str1 = "\"안녕하세요.\" 라고 김연지가 말했다."

// 큰따옴표가 필요하면 작은 따옴표로 감싸면 됨 .
console.log(str1);

console.log(typeof(str1));

var str2='"안녕하세요"라고 김연지가 말했다.';//escaping 문자 

console.log(typeof(str2));

// -3. boolean - 소문자로 작성합니다: true / false

// 4. boolean - 소문자로 작성합니다 : true / false 
var bool = "true";
//따옴표로 묶어서 string으로 나온다
console.log(typeof(bool));

var bool = true;
console.log(typeof(bool));


// -5. null : 개발자가 대입해놓은 값 없음을 의미함

var null1 = null;
//--------
//  할당 
//         ---------
//            대입
console.log(typeof(null));//object
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
// js 에서 null을 확인할 때는 Boolean으로 형변환을 해서 false 여부로 null 타입을 체크합니다 .
console.log(Boolean(null1));

// -6. undefined : 인터프리터가 코드를 돌렸는데 줄 게 없음 ( return 없음 )

var undef1;
//--------
//  할당 
//         ---------
//            대입
console.log(typeof(undef1));//object
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
// js 에서 null을 확인할 때는 Boolean으로 형변환을 해서 false 여부로 null 타입을 체크합니다 .
console.log(Boolean(undef1));

/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 

/* console 에서 ! 
const mathScore = Number(prompt("수학 점수를 입력하세요."));
const engScore = Number(prompt("영어 점수를 입력하세요."));

const avgScore = (mathScore + engScore) / 2;

alert(`평균 점수는 ${avgScore}점입니다.`);
*/

var avgScore =90;
console.log( `평균 점수는 ${avgScore}점입니다.`);

//대문자로 자료형을 쓰면 형변환 함수가 됩니다. 

console.log(Number('90'));
console.log(Number('90년생'));//NaN - not a Number 


// Boolean() : false, 0, null, undefined, '', NaN는 false / 빈 참조자료형은 true가 나옵니다. [], {} 
console.log(Boolean({}))



/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/

var num = 0; 
num++;//후위증가연산자 : 쓰고 메모리에 돌려놓을때 1을 더해서 돌려놓음 
console.log(num);

var num1 =0;
++num1; // 쓸때 1을 더하고 사용한다 : 전위증가연산자
num1;


var num =2 ; 
num--;
console.log(num);

var num = 2;
--num;
num;

console.log(3**3);//제곱


/* 5. 비교연산자
= (대입연산자) var a = 1; 
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/

console.log(1=="1")// 값이 같으므로 항등연산자로는 true 
console.log(1==="1") // ===을 손에 익히는 것을 권장 : 자료형/ 값을 함께 비교 false 


/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/

console.log(false&&true);//and= 둘다 참이어야만 true

console.log(false||true);//or = 하나라도 참이면 true

console.log(!true);//not = 원래 조건의 반대


// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 

// if(조건)
// {
//   //조건이 참인 경우에 실행문 1 ;
//   //조언이 참인 경우에 실행문 2;

// }

//if가 진짜고 나머지들은 거들 뿐입니다. 
if(1=="1")
{


}

/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
let date = new Date(); // 현재 날짜와 시간 기준으로 생성

let hours = date.getHours();
hours;
if(hours<12)
{
 //console.log(hours+"AM");
 console.log(`AM ${hours}시`);
}
else{
  console.log(`PM ${hours-12}시`);
}
  
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
// date
// date.getFullYear();
console.log(date.getFullYear());

// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59


/* swtich (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/



/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */

let menu= "짬뽕";
switch(menu)
{

  case "짜장면":
    console.log(menu +"를 드시는군요");
    break;

  case "짬뽕":
    console.log(menu +"를 드시는군요");
    break;
    
  case "샐러드":
    console.log(menu +"를 드시는군요");
    break;//코드블럭 바깐으로 강제로 나가게 만드는 명령문
  
  default : 
    console.log("그럼 뭐 드실래요?");
} 

//웬만하면 switch 문을 쓰지 않는다 ! 꼭 필요한 경우가 아니라면 .. 
console.log("--------------------딱 그 값만을 사용한다.---------------------------")
switch(menu)
{
  case "짜장면":
  case "짬뽕":
  case "샐러드":
    console.log(menu+"을 드시는군요");
  break;

  default:
    console.log("그럼 뭐 드실래요?");
}
// if 문으로 써보기 

let menu1 = "짜장면";

if(menu1==="짜장면")
{
  console.log(menu1+"을 드시는군요");
}
else if(menu1==="짬뽕")
{
  console.log(menu1+"을 드시는군요");
}
else if (menu1==="샐러드")
{
  console.log(menu1+"을 드시는군요");
}
else{
  console.log("그럼 뭐 드실래요?");
}

// 복합조건문: 연산자 && (and) / || (or) / ! (not) 으로 여러개 조건을 한번에 비교할 수 있습니다.

if(menu ==="짜장면" || menu === "짬뽕"|| menu === "샐러드")
{
  console.log(menu+"을 드시는군요");
}
else{
  "그럼 뭐 드실래요?";
}

// 1. var age라는 변수에 나이를 입력받고, 나이가 18보다 적으면 미성년자 18 이상이면 성인을 출력하는 조건문

// 테스트 케이스 : 정상             / 비정상                 / 애매한거 ( Edge Case )
                  미성년자 + 성인 / 나이가 음수 + 문자열  / 18

var age=Number(prompt("나이를 입력하세요:"));


if(age<18)
{
  console.log("미성년자입니다.");
}
else{
  console.log("성인입니다.");
}

// 2. 나이가 13살 미만이면 어린이 / 18 미만이면 미성년자 / 18 이상이면 성인

var age=Number(prompt("나이를 입력하세요:"));

if(age<13)
{
  console.log("어린이");
}
else if(age<18)
{
  console.log("미성년자");
}
else
{
  console.log("성인");
}


var age = -1;

if (age < 0)
{
  alert("나이는 0 이상이여야 합니다.");
}
if (0 < age && age < 18) {
  console.log("미성년자");
}
 else {
  console.log("성인");
};
// 삼항연산자 - 불표현식 ? 참 : 거짓



