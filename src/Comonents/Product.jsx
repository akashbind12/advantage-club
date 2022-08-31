
import "../Css/Product.css";

const data = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1Oc6awItmaYZ9fJPcFZeHZRzId8HWv0nEQ&usqp=CAU",
        price: "$60",
        name: "GARNIER",
        dis : "Garnier Pure Active Miceller Cleansing Water,125ml",
        color: "green",  
        rating: [1, 1, 1, 1, 1],
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwoKe5V5yIv-_dy-IvU09VGGyAoR6s1xwjQ&usqp=CAU",
        price: "$60",
        name: "GARNIER",
        dis : "Garnier Pure Active Miceller Cleansing Water,125ml",
        color: "red",  
        rating: [1, 1, 1, 1, 1],
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVqJiIvE56sas3foa2miCNmNg6yj4wFGWFIA&usqp=CAU",
        price: "$15",
        name: "GARNIER",
        dis : "Garnier Pure Active Miceller Cleansing Water,125ml",
        color: "orange",   
        rating: [1, 1, 1, 1, 1],
    }
]


export const Product = () => {

    return (
        <div className="Container">
            {data.map((e,i) => {
                return (
                    <div key={i}>
                        <div className="img-div">
                            <img src={e.img} alt="img" />
                        </div>
                        <div className="details-div">
                            <h3>{e.name }</h3>
                            <p>{ e.dis}</p>
                            <h3 className={`${e.color}`}>{e.price}</h3>
                            <div className="rating-div">
                                {e.rating?.map((star) => {
                                    return (
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjVUkho33ZWEceFyiZERhyZ40ka-wtnexoQ&usqp=CAU" alt="" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="add-button-div" id={`${e.color}`}>
                            <p>ADD TO CART</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}