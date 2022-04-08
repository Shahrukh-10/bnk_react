import React,{useState,useEffect} from 'react'
import mainImage from "../../assets/banking.png"
import DescreptionComp from './DescreptionComp'
import "./homeScreen.css"

const HomeScreen = () => {
  const mtext = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae debitis nemo sint perferendis, quod assumenda ."
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < mtext.length) {
      setTimeout(() => {
        setText(text + mtext[index]);
        setIndex(index + 1);
      }, 80);
    }else{
      setText("")
      setIndex(0)
    }
  },[index]);

  
  return (
    <div className="main">
   <div className="container">
    <div className="content">
      <div className="mainText">
        <h3 className='desc'>Bank</h3>
        <span class="lorem">
          {text}
        </span>
      </div>
      <div className="mainImage">
        <img src={mainImage} alt="" />
      </div>
    </div>
   </div>
   <DescreptionComp/>
    </div>
  )
}

export default HomeScreen