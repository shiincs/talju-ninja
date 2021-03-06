// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// hobbied = 100;
// tuples
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('hello!');
    // return myName;  // error
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max')); // NaN, error
console.log(multiply(10, 2));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// object types
// 객체 타입에서는 함수 타입에서처럼 순서가 정해져있지 않기 때문에
// 객체의 키값이 기준이 되기 때문에 정확히 맞춰줘야 한다.
// 각 키값의 밸류 타입도 일치하지 않으면 타입 에러가 발생한다.
// '=' 왼쪽에는 이 객체의 타입을 지정한다. (실제 객체가 아니다)
// '=' 오른쪽에는 실제 객체를 할당한다.
var userData = {
    name: 'cs',
    age: 29,
};
/*
userData = {
  a: 'hello', // 밸류의 타입은 일치하지만 키값이 달라서 에러
  b: 22,
};
*/
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    },
};
// complex = {}; // error (type not satisfied)
console.log(complex.output(true));
