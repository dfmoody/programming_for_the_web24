import llamaPic from '../assets/img/llama.png'
import alpacaPic from "../assets/img/alpaca.jpg"

export function Home() {
    return(
        <>
            <h1>Which are better, llamas or alpacas?</h1>
            <div className='homePictures'>
            <img src={llamaPic} alt="llama" width='300'/>
            <img src={alpacaPic} alt="alpaca" width='300'/>
            </div>
            <p>
            Is this the last word in the debate? Have you made a choice? Use the
            navigation to learn more about each one and then you can decide which win:
            <strong>Llamas</strong> or <strong>Alpacas</strong>
            </p>  
        </>
    )
}