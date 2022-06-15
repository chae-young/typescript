# Typescript

</br>
#### 플러그인 목록 - tslint,eslint
</br></br>


## 타입스크립트

-타입스크립트는 자바스크립트에 타입을 부여한 언어

-컴파일 해줌
</br></br>

## 타입스크립트를 쓰면 좋은가?

1. 에러 방지

api로 객체를 받았다. 해당 객체에서 첫번째 값의 name속성을 알려고 한다 -> name 속성을 입력했지만 값은 undefined이다. 타입스크립트를 쓰면 이런 경우를 잡아준다. 브라우저를 일일이 열지 않고 코드에서 에러발견 가능

2. 에러 사전 방지 , 자동화 완성 가능(개발 생산성 향상)
````
function add(a:number,b:number):number{
    return a+b
}
var result = add(10,20) //number
result.toLocalseString()//ts가 result를 number라고 인식 후 api 자동화 제공
````
함수의 인자값을 넣을때 type을 지정하면 에러를 사전 방지 할 수 있따.

</br></br>

## 타입스크립트 시작하기 (타입스크립트 라이브러리 설치)
1.node 설치

2.npm i typescript -g

3.tsc index.ts[파일이름]

4.js 파일 생긴거 확인(컴파일)

5.tsc 파일이름 -w (ts파일을 감시)

> 매번 tsc를 쓰기보단 웹팩을 활용하자
> 
</br></br>

## tsconfig.json
[설정방법](https://www.typescriptlang.org/docs/handbook/compiler-options.html )
</br></br>

## 문법
## 1. 기본 타입
- 문자열
````javascript
let str: string = "안뇽~"
````
- 숫자
````javascript
let num: number = 10
````
- 배열
````javascript
let arr: Array<number> = 10
let arr: number[] = 10
````
- 튜플

배열에 타입이 하나하나 지정되어 있다.
````javascript
let arr: [string,number] = '나는야',2
````
- 객체
````javascript
let obj: object = {
    name:'cy',
    age:20
}
````
but! 위 처럼 하면 타입스크립트는 그냥 단순히 얘는 객체네 하고 넘어감.   
세세하게 속성에 타입을 지정할 수 있다
````javascript
let obj: {name: string,age: number} = {
    name:'cy',
    age:20
}
````
<br>
<br>

## 2. 함수 타입
- 파라미터
```javascript
function sum(a: number,b: number){
    return a + b
}
```
- 반환 값
```javascript
function sum(a: number,b: number):number{
    return a + b
}
```
*타입스크립트는 파라미터를 제한하는 특성을 가지고 있다   
파라미터 값은 2개이고 인자가 4개라면???   
타입스크립트 : 윔마!! 인자가 4개잖아 난 2개의 타입만 가지고 있거든 다시 작성해줄래?*
````javascript
function sum(a: number,b: number):number{
    return a + b
}
sum(2,10,20,30)// 에러
````
-옵셔널 파라미터    
````javascript
function sum(a: number,b: number,c?:number):number{
    
}
sum(2,10)
sum(2,10,30)
````
?를 넣어주면 3번째 인자를 넣을지 말지 선택적으로 타입이 설정 가능하다.   
인자값을 2개만 넣어도 에러가 일어나지 않는다

