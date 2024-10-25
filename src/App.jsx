import React , { useState } from 'react'
import './app.css'
import sound from '/sound.mp3'



const App = () => {

const [num, setNum] = useState(0)
const [text, setText] = useState('')
const [img, setImg] = useState(false)
console.log(num)

const minus = () => {
  if (num > 0) {
    setNum(num - 1)
  }
}

const plus = () => {
  if (num < 10) {
    setNum(num + 1)
  }
}

const openImgPLaySound = () => {
  setImg(!img)
  const audio = new Audio(sound)
  audio.play()

}



  return (
    <>
    <div className="box">
      <h4>{num}</h4>
      <button onClick={(plus) => setNum(num + 1)}>Добавить число</button>
      <button onClick={(minus) => setNum(num - 1)}>Убавить число</button>
      <button onClick={() => setNum(0)}>Обнулить число</button>
      {/* <button onClick={() => setNum(num * 2)}>Удвоить число</button> */}
    </div>


    <div className="box">
      <h4>{text}</h4>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    </div>

    <div className="box">
<button onClick={openImgPLaySound}>Кликни на меня</button>
{img && <img onClick={() => setImg(false)}  src='https://img.championat.com/i/f/h/1710435930666843323.jpg'/>}
    </div>
    </>
   
  )
}

export default App
