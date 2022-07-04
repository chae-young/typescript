let imgCoords = '0';

// as const 대신 readonly (값이 상수인경우 보단 string 같이 범위가 넓을때 사용)
interface RSP {
    readonly ROCk: '0',
    readonly SCISSORS: '-142px',
    readonly PAPER: '-284px'
}

const rsp: RSP = {
    ROCk: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
} 

const score = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: 1,
} as const

function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP { // 'ROCK' | "SCISSORS" | "PAPER" 요거 대신 keyof (중복방지)
    return (Object.keys(rsp) as ['ROCK','SCISSORS','PAPER']).find((k) => rsp[k] === imgCoords)!
}

document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click',function(this:HTMLButtonElement,e:Event){
        const myChoice = this.textContent as keyof RSP;
        const myScore = score[myChoice];
        const computerScore = score[computerScore(imgCoords)];
        const diff = myScore - computerScore;

        if(diff === 0){
            console.log('비겼습니다')
        }else if([-1,1].indexOf(diff)){
            console.log('이겼습니다')
        }else{
            console.log('졌습니당')
        }
    })
})

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
    if (document.querySelector('#computer')) { // 확신주기
      (document.querySelector('#computer') as HTMLElement).style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgCoords + ' 0';
    }
  }, 100);
}
