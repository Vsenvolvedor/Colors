let num = 1
const text = round.innerHTML.repeat(1)

export default function addRound(add,act)
{
    const 
        round = document.querySelector('#round'),
        roundNum = document.querySelector('[data-num]')
    
    round.classList.add(act)
    setTimeout(()=>{
        round.classList.remove(act)
    },1200)

    switch(add)
    {
        case true:
            num += 1
            roundNum.innerText = num.toString() 
        
        break;
        case false:
            num = 1
            roundNum.innerText = num
    
        break;
        case 'go':
            round.innerHTML = 'COMEÇOU'
            setTimeout(()=>round.innerHTML = text,1210)
        break;
        case 'stop':
            round.innerHTML = 'PERDEU'
            setTimeout(()=>round.innerHTML = text,1200)
        break;
    }

}