/*
기본타입 -------------------------------
basic
*/
var str = "hello";
var num = 10;
var isLoggedIn = false;
/*
-튜플
배열길이가 고정되고 각 요소 타입 지정되있는 배열 형식
*/
var arr1 = ["hi", 10];
/*
-enum
상수 집합
*/
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
var Hero = Avengers.Capt;
/*
-any
모든타입 허용한다
*/
var str2 = "hi";
var num2 = 2;
/*
-void
변수 : null or undefined
함수 : 반환 값 허용 x
*/
var unuseful = undefined;
function unuse() {
    //void 값이 없다. 반환값이 없을 경우 꼭 사용..
    console.log("x");
}
/*
함수 -------------------------------
basic

1.파라미터
2.리턴
3.구조
*/
// 인자 넘기지 않아도 된다! 물음표 사용
function sum(a, b) {
    return a + b;
}
//초기값
function sum2(a, b) {
    if (b === void 0) { b = "100"; }
    return a + b;
}
//rest
function sum3(a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    var totalnum = 0;
    for (var key in nums) {
        totalnum += totalnum[key];
    }
    return a + totalnum;
}
sum3(2, 23, 24);
//this
function thisFunc() {
    // this: 타입
    console.log(1);
}
