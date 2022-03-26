import addRound from './addRound.js'
import randomColors from './randomColors.js'
import showResults from './showResults.js'
import initGame from './initGame.js'

let 
 round = 1,
 point = 0,
 seqNum = 1

export default function clickColor(act,obj)
{

    obj.forEach((item)=>item.element.addEventListener('click',verifyColor))

    function verifyColor(e)
    {
        const 
            i = obj.map((it)=>{if(it.element == e.target){return it}else{return ''}}).sort(),
            item = i[i.length - 1]

        if(item.order[seqNum] === seqNum)
        {
            item.element.classList.add(act)
            setTimeout(()=>item.element.classList.remove(act),400)
            point++
            seqNum++
            if(seqNum === 5)
            {
                obj.forEach((item)=>item.element.classList.remove(act))
                obj.forEach((item)=>item.element.removeEventListener('click',verifyColor))
                addRound(true,act)
                setTimeout(()=>{randomColors(act,600,800,obj)},1000)
                seqNum = 1
                round++
            }
        }
        else
        {
            obj.forEach((item)=>{
                item.element.removeEventListener('click',verifyColor)    
                const blink = setInterval(()=>{item.element.classList.toggle(act)},500)
                setTimeout(()=>{clearInterval(blink) 
                    item.element.classList.remove(act)},1500)
                addRound('stop',act)
            })

            showResults(round,point)
            initGame(act)
        }
    }
}