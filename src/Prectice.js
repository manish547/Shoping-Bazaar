import React from 'react'
import "./Prectice.css"





const Prectice = () => {

    
function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}

const hendleripple = (e) => {
    createRipple()
  
}

  return (<><div>Prectice</div>
  <button onClick={(e) => hendleripple(e)} className='btnn'> test 1</button>
  </>
    
  )
}

export default Prectice