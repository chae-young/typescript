//인터페이스에서 객체의 as const 와 같으려면 readonly를 붙영줌
//상속할경우 extends , 인터페이스를 합쳐서 사용가능

//타입 에일러시스 (인터페이스를 좀더 광범위하게 사용)
// type Hello = {
//     ROCK: string
// } | string //유니언으로 사용할경우 타입에일러시스 사용한다
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

let imgCoords: RSP[keyof RSP] = "0"; //작은범위 -> 큰범위 가능 반대는 안돼요
interface RSP {
    readonly SCISSORS: "-142px";
    readonly ROCK: "0";
    readonly PAPER: "-284px";
}
const rsp: RSP = {
    ROCK: "0",
    SCISSORS: "-142px",
    PAPER: "-284px",
};

let interval: number;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        } else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        } else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector("#computer")) {
            //as로 강제 타입설정
            (
                document.querySelector("#computer") as HTMLElement
            ).style.background =
                "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
                imgCoords +
                " 0";
        }
    }, 100);
}

intervalMaker();

const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
} as const;

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
    // 'ROCK' | 'SCISSORS' | 'PAPER' 대신사용! RSP의 키들
    return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
        (k) => rsp[k] === imgCoords
    )!; // 재량으로 붙여주기 : 이값은 확실히 나와! -> null이나 undefinde를 외치는경우 사용..자제하고싶다면 if문을 활용
}
let pointer: number = 0;
document.querySelectorAll("btn").forEach((btn) => {
    btn.addEventListener("click", function (this: HTMLButtonElement, e: Event) {
        //this사용시 타입을 써줘야함
        clearInterval(interval); // setInterval 중지
        setTimeout(() => {
            intervalMaker();
        }, 1000);
        const myChoice = this.textContent as keyof RSP; //강제 타입 좁혀주기
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log("비겼습니다");
        } else if ([-1, 2].includes(diff)) {
            console.log("이겼습니다!!");
            pointer++;
        } else {
            console.log("졌습니다 ㅠㅠ.");
            pointer--;
            document.querySelector("#pointer")!.textContent = String(pointer);
        }
    });
});
