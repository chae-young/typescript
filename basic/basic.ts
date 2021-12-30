/*
기본타입 -------------------------------
basic
*/
let str: string = "hello";

let num: number = 10;

let isLoggedIn: boolean = false;

/*
-튜플
배열길이가 고정되고 각 요소 타입 지정되있는 배열 형식
*/
let arr1: [string, number] = ["hi", 10];

/*
-enum
상수 집합
*/
enum Avengers {
    Capt,
    IronMan,
    Thor,
}
let Hero: Avengers = Avengers.Capt;

/*
-any
모든타입 허용한다
*/
let str2: any = "hi";
let num2: any = 2;

/*
-void
변수 : null or undefined
함수 : 반환 값 허용 x
*/
let unuseful: void = undefined;
function unuse(): void {
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
function sum(a: number, b?: number): number {
    return a + b;
}
//초기값
function sum2(a: number, b = "100"): number | string {
    return a + b;
}
//rest
function sum3(a: number, ...nums: number[]): number {
    let totalnum = 0;
    for (let key in nums) {
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
