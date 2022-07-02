let num:number = 3;

let arr4: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]

let arr3 = [true,2,'3'] as const // 상수! 변한지않는다!!!! 고정!!!!


const obj = {a: 'b'} as const
//obj.a = 'c' // as const 상수로 프로퍼티도 못바꿈!!! (원래가능)
const obj2: {a: string, b?: number} = {a: 'b'}// 있을지 없을 지 모르면 ? 해줌 (오버로딩..)


// 고차함수 타입 예시
function add(a:number, b: number): (c:string) => number {//리턴 타입 자리에 리턴하는 함수타입 지정(함수자체를 타입으로 쓸때 쫌 다릅..)
    return (c:string) =>{
        return 3;
    }
}


// 객체 메소드 예시
const obj3 : {a: (c:number) => string} = {
    a(c: number) {
        return 'hello'
    },
}
obj3.a(2)

//d.ts 에서 오류 난경우! 타입을 잘못 지정했다!! 강제로 바꾸기!!!!!

/* 
const hello: number = "heloo";
1.(hello as unknown as string).substr(1,2)
2.(<string><unknown>hello).substr(1,2)

unknwn 은 겹치는 경우엔 안씀 (부모 상속..?)
string 과 number는 명확히 다르기때문에 쓴다.
*/
