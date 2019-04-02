"use strict";
/*
    3.0 타입스크립트 기초 문법
*/
/*
    3.1 기본 타입
*/
var isTypeScriptAwesome = true;
var doesJavaScriptHasTypes = false;
console.log(isTypeScriptAwesome);
console.log(doesJavaScriptHasTypes);
var yourScore = 100;
var ieee754IsAwesome = 0.1 + 0.2;
console.log(yourScore);
console.log(ieee754IsAwesome);
var authorName = 'cs';
var toReaders = "\uCC45\uC744 \uC77D\uC5B4\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.\n\uB3C4\uC6C0\uC774 \uB418\uC5C8\uC73C\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4.\n";
console.log(authorName);
console.log(toReaders);
// null과 undefined는 각각 자기 자신 타입 또는 void만을 타입으로 할당할 수 있다.
var nullValue = null;
var undefinedValue = undefined;
// const numberValue: number = null; // type error
// null 이나 undefined 타입이 할당되지 않은 변수에 null이나 undefined를 넣는 것은
// ts 2.0 이상에서 --strictNullChecks 플래그에 의해 type error로 발생한다.
// const a: number = null;
console.log(nullValue);
console.log(undefinedValue);
// console.log(numberValue);
// console.log(a);
var bool = true;
bool = 3;
bool = 'whatever';
bool = {};
console.log(bool); // {}
// any 타입 값의 메소드를 호출할 때에는 타입 검사가 일어나지 않는다.
// 타입 검사는 통과하지만 런타임 단계에서 에러가 발생한다.
// bool.nonExistingMethod();
// bool.whatever(false);
// void는 null 또는 undefined만을 값으로 가지는 타입이다.
// 함수에서 아무것도 리턴하지 않을 때에는 void
function nothing() { }
// never는 아무런 값도 가질 수 없는 타입이다.
function alwaysThrow() {
    throw new Error("I'm a wicked function!");
}
// alwaysThrow();
/*
    3.2 배열과 튜플
*/
var pibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
var myFavoriteBeers = [
    'Imperial Stout',
    'India Pale Ale',
    'Weizenbock',
];
console.log(pibonacci);
console.log(myFavoriteBeers);
// 배열 타입은 아래처럼 쓸 수도 있다.
// const pibonacci: Array<number> = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
// const myFavoriteBeers: Array<string> = [
//   'Imperial Stout',
//   'India Pale Ale',
//   'Weizenbock',
// ];
// 튜플
var nameAndAge = ['Changseon', 29];
// 아래처럼 하면 에러(타입에 명시된 개수만큼의 원소를 가질 수 있다.)
// const nameAndAge: [string, number] = ['Changseon', 29, 'cs', 30];
console.log(nameAndAge);
// 다만 아래처럼 Array 프로토타입의 메소드를 통해
// 배열의 원소를 조작하는 것은 에러가 발생하지 않는다.
nameAndAge.push('developer');
console.log(nameAndAge);
/*
    3.3 객체
*/
var user = { name: 'changseon', age: 29 };
console.log(user);
// 타입 속성명 뒤에 ? 를 붙여 해당 속성이 존재하지 않을 수도 있음을 나타낼 수 있다.
var userWithUnknownAge = { name: 'cs' };
console.log(userWithUnknownAge);
// 타입 속성명 앞에 readonly 키워드를 붙여 해당 속성의 재할당을 막을 수 있다.
var userWithReadonly = {
    name: 'cs',
    age: 29,
};
function getUser(uuid) {
    // 함수 본문
    console.log(uuid);
    return uuid;
}
// getUser(7); // type error
getUser('cs');
/*
    3.5 함수
*/
// 함수 값의 타입 표기
// const yetAnotherSum: (a: number, b: number) => number = sum;
var onePlusOne = function () { return 2; };
var arrowSum = function (a, b) { return a + b; };
var cb;
// 실제 함수 매개변수에는 this가 나타나지 않음
var onClick = function (event, cb) {
    // this는 HTMLElement 타입
    console.log(this.tagName);
    cb();
};
var el = document.querySelector('.btn');
console.log(el);
