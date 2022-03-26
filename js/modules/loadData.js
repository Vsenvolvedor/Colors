export default function loadData()
{
    const 
      checkBox = document.querySelector('#save'),
      point = document.querySelector('#point'),
      pmax = document.querySelector('#point-max'),
      round = document.querySelector('#round-point'),
      rmax = document.querySelector('#round-max')

    if(localStorage.checkBox)
    {
        checkBox.setAttribute('checked','')
        point.innerText = localStorage.point
        pmax.innerText = localStorage.pmax
        round.innerText = localStorage.round
        rmax.innerText = localStorage.rmax
    }
    
}