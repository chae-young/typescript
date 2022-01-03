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
var person = { name: "cat" };
person.name = "dd";
//아 이 함수의 인자는 personNAme의 타입을 가져야하는구나
function nameTest(obj) {
    console.log(obj.name);
}
nameTest(person);
//읽기전용 배열 ReadonlyArray을 사용하면 수정안됨.
var arr = [1, 2, 3];
function brewBeer(beer) { }
brewBeer({ brandon: "test" });
var loginUser;
loginUser = function (id, pw) {
    return true;
};
var fe = {};
fe.name = "2";
//유니온 타입
var a2 = "2";
var Developer = /** @class */ (function () {
    function Developer() {
    }
    return Developer;
}());
var josh = new Developer();
josh.name = "ggg";
//제네릭 (재사용성 높은 컴포넌트 만들경우 자주 사용한다)
function getText(text) {
    return text;
}
getText("2");
