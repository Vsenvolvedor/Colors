import saveData from './saveData.js'

export default function showResults(roundp,pointp)
{
    const 
      point = document.querySelector('#point'),
      pointMax= document.querySelector('#point-max'),
      round = document.querySelector('#round-point'),
      roundMax = document.querySelector('#round-max')

    point.innerText = pointp
    if(pointp > pointMax.innerText)
    {
        pointMax.innerText = pointp
    }

    round.innerText = roundp
    if(roundp > roundMax.innerText)
    {
        roundMax.innerText = roundp
    }

    saveData(point.innerText,pointMax.innerText,round.innerText,roundMax.innerText)
}