import jesus from './assets/jesus.webp'

function Slika (props){

    return(
        <div className="jesusCard">
            <img src={jesus} height={250} className='jesusslika'></img>
            <h2>{props.name}</h2>
            <p>Hej guys im jesus and im here for you im gonna save you from this programming hell and i dont care how im gonna do it</p>
            <p>Prejak : {props.isPrejak ? "Yea" : "No"}</p>
        </div>
    )

}

export default Slika