import addRound from './addRound.js'
import randomColors from './randomColors.js'

export default function initGame(act)
{
    const 
        btnStart = document.querySelector('#start'),
        btnReset = document.querySelector('#reset'),
        colors = document.querySelectorAll('.color'),
        colorsObj = Array.from(colors).map((item)=>{
            return {
                element:item,
                class: item.classList,
                id:item.id,
                status: false,
                order:[0,0,0,0,0],
            }
        })
    
    btnStart.addEventListener('click',startColors)
    btnReset.addEventListener('click',resetGame)

    function startColors()
    {
        btnStart.removeEventListener('click',startColors)
        addRound(false,act)
        setTimeout(()=>randomColors(act,600,800,colorsObj),1000) 
    }

    function resetGame()
    {
        document.location.reload()
    }
}