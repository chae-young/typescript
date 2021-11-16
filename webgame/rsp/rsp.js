"use strict";
//인터페이스에서 객체의 as const 와 같으려면 readonly를 붙영줌
//상속할경우 extends , 인터페이스를 합쳐서 사용가능
//타입 에일러시스 (인터페이스를 좀더 광범위하게 사용)
// type Hello = {
//     ROCK: string
// } | string
// const hi:Hello = '1'
//인터페이스에서 속성이 뭐가들어올지 모를때
// interface Example {
//     a:2
//     [key:string]:number
// }
// const example:Example = {
//     a:2,
//     c:2
// }
var imgCoords = "0"; //작은범위 -> 큰범위 가능 반대는 안돼요
var rsp = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px"
};
var score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1
};
function computerChoice(imgCoords) {
    // 'ROCK' | 'SCISSORS' | 'PAPER' 대신사용! RSP의 키들
    return Object.keys(rsp).find(function (k) { return rsp[k] === imgCoords; }); // 재량으로 붙여주기 : 이값은 확실히 나와!
}
document.querySelectorAll("btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //this사용시 타입을 써줘야함
        var myChoice = this.textContent; //강제 타입 좁혀주기
        var myScore = score[myChoice];
        var computerScore = score[computerChoice(imgCoords)];
        var diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다!!");
        }
        else {
            console.log("졌습니다 ㅠㅠ.");
        }
    });
});
