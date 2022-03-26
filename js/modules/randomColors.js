import clickColor from './clickColor.js'
import addRound from './addRound.js'

export default function randomColors(act,add,remove,colorsObj)
{
    for(let i = 1;i <= 4;i++)
    {
       const 
         max = 40,
         med = max /colorsObj.length,
         min = 0,
         random = (Math.random() * (max - min) + min).toFixed()
    
       if(random >= min && random <= med)
       {
        setTimeout(()=>{
            colorsObj[0].element.classList.add(act)
        },add * i)     
        setTimeout(()=>{
            colorsObj[0].element.classList.remove(act)
        },remove * i) 
        colorsObj[0].order[i] = i 
       }
       else if(random > med && random <= (med * 2))
       {
        setTimeout(()=>{
            colorsObj[1].element.classList.add(act)
        },add * i)    
        setTimeout(()=>{
            colorsObj[1].element.classList.remove(act)
        },remove * i)   
        colorsObj[1].order[i] = i 

       }
       else if(random > (med * 2) && random <= (med * 3))
       {
        setTimeout(()=>{
            colorsObj[2].element.classList.add(act)
        },add * i)    
        setTimeout(()=>{
            colorsObj[2].element.classList.remove(act)
        },remove * i)   
        colorsObj[2].order[i] = i 

       }
       else if(random > (med * 3) && random <= (med * 4))
       {
        setTimeout(()=>{
            colorsObj[3].element.classList.add(act)
        },add * i)   
        setTimeout(()=>{
            colorsObj[3].element.classList.remove(act)
        },remove * i)    
        colorsObj[3].order[i] = i 

       }
    }
    
    setTimeout(()=>{
        addRound('go',act)
        clickColor(act,colorsObj)
    },3600)
}