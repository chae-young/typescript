let num: number = 3; // 타입 지정 소문자로 해야함.
let str: string = String(num); // or num.toString() -> 변수 타입 변경

let arr: number[] = [1, 2, 3, 4];
let arr2: Array<number> = [1, 2, 3, 4];
let arr3: (string | number | boolean)[] = [true, 1, "2"];
//tuple 정확하게 검열 , 단 push는 됨
let arr4: [string, boolean, number] = ["2", true, 2];
// -> 더 엄격하게 아예 지정할경우 let arr4 = ['1',true,2] = ["1",true,2]

//상수값 고정!
let arr5 = { a: 2 } as const; // 그냥 const 선언하면 원시값이 안바뀌지만 as const하면 객체들 프로퍼티값도 변경안됨!!!

const obj: { a: number; b: string } = { a: 2, b: "2" };
//const obj:{a: number,b?: string} = {a:2} => 난 b가 언제들어갈지 모른다 할경우 ?넣어줌

enum Color {
    Red,
    Green,
    Black,
}
let c: Color = Color.Red;
// Color[0] === "Red"
// Color["Red"] === 0

//함수
function add(a: number, b: string): number | string {
    //리턴값이 없으면 :void
    return a + b;
}
//고차함수
function add2(a: number): (c: string) => number {
    return (c: string) => {
        return 3;
    };
}

//객체 메소드
// ? 를 넣으면 넣어도 되고 안넣어도 되고..
const obj2: { a?: (c: string) => number } = {
    a(c: string) {
        return 2;
    },
};

//타입 강제변경
const hello: number = 3;
(hello as unknown as string).substr(1, 2); // or <string><unknown>hello



//모듈
const cda = 2
export const abc = '1'
export {cda}

//export.a

export default function(){

}
//타입스크립트에서 commonjs 방식으로 사용하면 import *as oo from ''./ 불러와야함
//module.exports=function(){}

//d.ts
declare function a() {//타입을 새로 만들때 declare 붙임
    
}
export = a
//=> import A = require('../d.ts) OR import *as A from ('./')