export default function saveData(point,pmax,round,rmax)
{
    const 
        checkBox = document.querySelector('#save')
         
    if(checkBox.checked)
    {   
        localStorage.checkBox = true
        localStorage.point = point
        localStorage.pmax = pmax
        localStorage.round = round
        localStorage.rmax = rmax
    }

}