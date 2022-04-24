

const Card = (props) =>{
    console.log(props)
return(
    <>
    <div className="cards">
        <div className="card">
            <img src={props.imgUrls} alt="myPic" className="card__img"/>
            <div className="card__info">
                <h3 className="card__tiltle">{props.titles}</h3>
                <a href={props.links} target="_blank">
                    <button>Watch Now </button>
                </a>
            </div>
        </div>
    </div>    
    </>
)
};
export default Card;