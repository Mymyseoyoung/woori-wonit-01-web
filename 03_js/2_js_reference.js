// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인



var array1 = [1, '가', true, null, undefined, [1,2,3]] // 자료형을 강제하지 

array1
console.log(array1[0]);

console.log(typeof array1);

console.log(array1.length)


// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.

var array1 = ['apple','banana','carrot'];

// 순서대로 값을 저장하는 자료구조 ( 선형 자료 구조임 )
// 맨 뒤에 값을 삽입 push(), 삭제 pop()

array1.push("daisy");
console.log(array1);
array1.pop();
console.log(array1)

//array1. 누르면 내장함수 다 나옴 ! 

//맨 앞 ( unshift ,shift )
// 중간 어딘가에 값을 넣어야 하는 경우도 있을 겁니다. ( splice )

array1.unshift("daisy") // 맨 앞에 삽입 
console.log(array1)
array1.shift() // 맨 앞 값을 제거 
console.log(array1)


//중간에 값을 삽입해야 하는 경우도 있을 것입니다. (splice) 
array1.splice(1,0,"ban");
console.log(array1);

// 중간 어딘가에 값을 넣어야 하는 경우도 있을 겁니다. (splice)
// splice(시작index, 삭제할개수, 삽입할 값)
array1.splice(1, 1, "ban");
console.log(array1)

// 맨 뒤에 donut을 추가 
array1.push('donut')
console.log(array1)

array1.splice(1,1,"bee","betray");
// ban~ 를 삭제하고 bee, betray라는 단어를 넣어보세요.

console.log(array1)

console.log(array1[0]);

array1.splice(1,2)
console.log(array1, 'bee','betray')
//array.splice(start[,deleteCount[,item1[,item2[, ... ]]])
//            (start는 무조건 있어야 함 [, 생략가능 ])


// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요?

var array2 = [-565,-3 ,556, 1.3, NaN , null, undefined, true , 0 ]
array2
console.log(Number(null))
console.log(typeof(NaN))

// JS의 기본 SORT는 문자열 순서대로 정렬 
console.log(array2.sort())

// 숫자로서 오름차순(작은 거~큰 거), 또는 내림차순(큰 거~작은 거) 정렬하는 방법?
console.log(array2.sort(function (a, b) {
  return a - b;
}));


//JS
// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])

var set1 = [1,3,4,5,6,6];
set1 =new Set(set1);//중복되는 값들을 걸러낸 자료형 
set1
console.log(typeof set1)

set1.add(7);
set1
set1.add(6) // 이미 있는 값은 삽입 불가
set1

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)

var dict1 = {"name": "김연지", "age":20, "hobby": ["자전거타기","책읽기"]}
//key(문패), value(값)
console.log(dict1['name']);

var dict2 = {"가": "가위","나": "나비","다": "다람쥐","라": "라디오"};

console.log(dict2['가']);

console.log('라' in dict2);
console.log('나비' in dict2);


console.log(Object.keys(dict2)) // key 만 array 형태로 리턴 
// 


// 특정 값을 꺼내는 방법  변수명[key] 로 value에 접근합니다. 
console.log(dict2[1])
dict2['가'] = '가랑이'; // key가 이미 있으면 value가 변경됨
dict2['마'] = '마술사'; // key가 없으면 새로 key-value 쌍이 추가 
dict2
delete dict2['가'] // dict2의 '가' 방을 삭제 
dict2

console.log(delete dict2['가']) // key가 있건 없건 true가 리턴 
 
console.log(Object.values(dict2)) // value 만 array 형태로 리턴 
console.log(Object.entries(dict2)) // [key, value] 쌍으로 array 형태로 리턴 

// JSON: JavaScript Object Notation: "{'name':'김연지', 'age':'20'}"

/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다. 
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/

//key에 value를 매핑한다 ! 

 var map1= new Map();
 map1['가'] = '가위';// 되기는 되지만 이렇게 직접 접근하지 않고 메서드를 경유하기 위해 Map을 씀 . 
 map1// 이렇게 하면 순서가 보장되지 않음 ! 

console.log(map1['가']); // dict와 같습니다.

// 되기는 되지만 이렇게 직접 접근하지 않고 메서드를 경유하기 위해 map을 씁니다.

// 함수: 코드의 순서를 정해서 한번에 부를 수 있도록(호출할 수 있도록) 만들어 놓은 덩어리
         // 입력에 대해 일관된 출력을 보장하는 코드 덩어리
         // 프로그래밍에서의 함수를 따지고 보면 딱 2개 밖에 없습니다.
         // getter(보여주는 것)와 setter(해당 값을 변경하는 것) 
// 나, 나비 / 다, 다람쥐 
// 나, 나비를 빼보세요. 
map1.set('나', '나비');
map1.set('다', '다람쥐');
map1.set('다', '다리미'); // 이미 있는 key는 value가 바뀝니다.
map1.set(1, 1010); // 들어오는 순서가 보장됩니다. 
console.log(map1.get('나')) ;// set으로 삽입한 값만 get으로 부를 수 있습니다.
map1.delete('나');
// console.log(Object.entries(map1)); // dict로 우겨넣은 값만 출력됨 
console.log(map1.get('1')); // undefined: key에 원래 자료형 그대로를 보관하기 때문에 문자열로 변환되지 않습니다. 
map1;

console.log(map1.keys());
console.log([...map1.keys()]);
console.log([...map1.entries()]);
//반복 가능한 객체 = iterable -> iterator 
/*
9. 반복문: for- 반복의 횟수 정해져있을 때
/while- 반복의 횟수가 정해져있지 않을 때 
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문

  반복되는 숫자를 의미하는 변수를 i, iter, count 변수명을 주로 사용합니다.
  반복문 안에 반복문을 작성할 경우 ( 중첩 반복문 )

}
*/

// 1~5까지 출력되도록 변경

for(let i =1; i<6;i++)
{
  console.log(i);
}
// 5~1까지 출력되도록 변경


for(let i =5; i>0;i--)
{
  console.log(i);
}
// 실습: 5, 3, 1이 출력되도록 변경


//좋은 코드 
// 1. 짧은 코드 ( 수정할 때도 코드 10줄에 에러가 1번씩 난다)
// 2. 불필요한 동작이 없는 코드 
// 3. 변수명 / 함수명 등이 직관적이여서 보면 이해할 수 있는 코드 
// 4. 주석이 잘 달려있어서 이해하기 쉬운 코드 
for(let i =5; i>0;i-=2)
{
  console.log(i);
}
// 배열의 길이는 .length 라는 속성으로 확인

var arr = ["김연지", "신짱구", "신짱아"];
console.log(arr.length);
console.log(arr.length)
// ~~야, 안녕? 이라는 글귀를 더해서 3명한테 인사를 해주세요

//값을 바로 꺼냄 
for(var name of arr)
{
  console.log(name+"야 안녕");
}

for( var i=0;i<arr.length;i++)
{
  console.log(arr[i]+"야 안녕");
}

for ( var key of arr)
{
  console.log(key);

}

//방번호를 경유하지 않고 직접 값을 끄집어내는 방무 : for in : True/False 로 더이상 끄집어낼 게 없
//for of 직접 방에 접근해서 
// for ( 하나씩 끄집어낼 데이터를 부르는 공갈문자 in 집합자료명 )
//key = 문패 



// map은 .size() 라는 메서드로 방의 개수를 구할 수 있습니다. map1에 들어있는 key - value를 출력해보세요.

console.log(map1);
for(var [key,value] of map1)
{
  console.log(key,value);
}

for(var key of map1.keys())
{
  console.log(key);
}

for ( var key in dict2)
{
  console.log()
}

//구조 분해 


dict3 ={}
console.log(key in dict3);


// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
// if / switch / for / while 같은 코드블럭이 안으로 들어가는 동작의 앞뒤에는
// 엔터를 쳐서 다른 실행문들과 구분해서 보기 좋게 작성합니다. 
var i = 1; // 초기값

while (i < 6) { // 조건식
  console.log(i); // 실행문
  i++; // 증감식
}

/*
초기값

while (조건식) {
  실행문
  증감식
}
*/

// 5~1까지 출력

var i=5;
while(i>0)
{
  console.log(i);
  i--;
}

// 1, 3, 5만 출력

var i=1;
while(i<6)
{
  console.log(i);
  i+=2;
}

//2. 무한반복으로 작성하고 break,continue로 강제로 흐름을 제어
var i=1;
while(true)
{
  console.log(i);
  i++;

  if(i<5)
  {
    break;// break 는 특수한 키워드로 break를 만나는 순간 {} 바깥으로 인터프리터가 빠져나감.
  }


}

// arr 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.

var i=0;
while(i<arr.length)
{
  console.log(arr[i]);
  i++;
}


// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)


// for ... of : 인덱스를 경유하지 않고 각 원소에 직접 접근



/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
- 1. 기본형
  function 함수명(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나    
}

function hello(이름, 나이)
{
}


- 2. 익명함수: lambda처럼 쓰고 버리는 걸 기본으로 합니다.
- var 함수명 = function(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나
}

-3. 화살표함수: () => { 동작 }
*/


function hello3()
{
  return `hello3가 종료될때 달고 들어온 값`
}

var hi2 = hello3()
console.log(hi2)

// 1, 3, 5를 출력하는 반복문을   oddNums() 를
//  호출하면 매번 같은 동작이 실행되도록 함수 안에 넣어주세요
function oddNums()
{
  for(var i=1;i<6;i+=2)
  {
    console.log(i);//보여주고 끝나는 함수
  }
}

oddNums()

var arr = ['짱구', '짱아', '훈이']

// -4. 함수의 스코프
//     1. 스코프 : 변수나 함수가 어디까지 접근해서 사용할 수 있는지. 
//     2. 호이스팅(Hoisting): 변수나 함수의 선언이 스코프의 최상단에서 먼저 읽은 것처럼 동작하는 것. 
//         - 호이스팅은 선언만 끌어올려지고, 값은 끌어올려지지 않습니다.           
//     3. TDZ(Temporal Dead Zone): 변수가 선언되기 전까지 접근할 수 없는 구간
// | 키워드 | 스코프 범위   | 재선언 | 재할당 | 호이스팅     | 특징 요약                           |
// |--------|----------------|--------|--------|--------------|----------------------------------|
// | `var`  | 함수 스코프     | O      | O      | O            | 블록 무시, 중복 선언 가능        |
// | `let`  | 블록 스코프     | X      | O      | O (TDZ)      | 블록 안에서만 유효, 중복 선언 불가|
// | `const`| 블록 스코프     | X      | X      | O (TDZ)      | 상수 선언, 객체 내부 변경 가능    |

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능


// scope : 변수에 접근할 수 있는 위치를 제어 
// var x = '가'; // 함수 범위
// let y = '나'; // 블록 범위
// const z = '다'; // 블록 범위, 상수 (값 변경 불가)

// function variableExample() {
//     var x = 10; // 함수 범위
//     let y = 20; // 블록 범위
//     const z = 30; // 블록 범위, 상수 (값 변경 불가)

//     if (true) {
//         var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
//         let y = 50; // 블록 내에서만 유효
//         const z = 60; // 블록 내에서만 유효

//         console.log('if문 내부:', x, y, z); // 40, 50, 60
//     }

//     console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
// }


/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용 
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
    console.log('안녕하세요!' + this.name)
  }

// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.


// 객체 지향 방법 
// OOP(Object Oriented Programming) : 객체지향 프로그래밍
// start, end 라는 값 ( data )를 받아서 
// 순서대로 동작( function ) 한 결과 ( 반복해서 값을 1씩 증가시키면서 홀수인지 판별 . 홀수인 경우에만 출력 )

//Student 클래스를 하나 만들어서 greet(), study()만 쓸 수 있습니다.
//OnlineFighter 클래스를 하나 Fighter을 상속받아서 keyboardFighting()을 출력해주세요 .


class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    greet() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
  study()
  {
    console.log(`${this.name}이 공부를 합니다.`);
  }

}


  
  // 고죠사토루 
class Fighter {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
 
  fighting(){
    console.log(`${this.name}이 싸웁니다.`)
  }
}
  //OnlineFighter 

  class OnlineFighter extends Fighter {
    keyboardFighting() {
      console.log(`${this.name}이 온라인으로 싸웁니다.`)
    }

  }

