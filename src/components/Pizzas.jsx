import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/userContext"

const Pizzas = () => {

    const [Pizzas, SetPizzas] = useState([])
    const navigate = useNavigate()

    const {carro, setCarro, pizzaUno, setPizzaUno, pizzaDos, setPizzaDos, pizzaTres, setPizzaTres, pizzaCuatro, setPizzaCuatro, pizzaCinco, setPizzaCinco, pizzaSeis, setPizzaSeis, totalPizza, setTotalPizza} = useUserContext()


    const apiJSON = async () => {
        try{
        const archivoJSON = await fetch("/pizzas.json")
        const originalJSON = await archivoJSON.json()
        console.log(originalJSON)
        SetPizzas(originalJSON)
        }catch(error){
        console.error(error)
        }
    }

    const añadirPizza = (pizza) => {

        setCarro(() => [...carro, pizza])

        if (pizza.name === "napolitana"){
            setPizzaUno(pizzaUno + 1)
        }else if(pizza.name === "española"){
            setPizzaDos(pizzaDos + 1)
        }else if(pizza.name === "salame"){
            setPizzaTres(pizzaTres + 1)
        } else if (pizza.name === "cuatro estaciones"){
            setPizzaCuatro(pizzaCuatro + 1)
        } else if (pizza.name === "bacon"){
            setPizzaCinco(pizzaCinco + 1)
        } else if (pizza.name === "pollo picante"){
            setPizzaSeis(pizzaSeis + 1)
        }
        
    }



    useEffect(() => {apiJSON()
    }, [pizzaUno, pizzaDos, pizzaTres, pizzaCuatro, pizzaCinco, pizzaSeis, carro, totalPizza])



    return(
        
        <div className="d-flex justify-content-center flex-wrap">
        {Pizzas.map((elemento) => {  
            let index = Pizzas.map(pizza => pizza.id).indexOf(elemento.id)
            return  <div key={elemento.id} className="card-pizza p-3">
                        <div key={elemento.id} className="card bg-dark">
                            <img src={elemento.img} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h3 className="card-title text-light">{elemento.name.toUpperCase()}</h3>
                                <h5 className="text-light">Ingredientes</h5>
                                <ul className="lista-ingredientes text-light">
                                    <li className="hover-list">{elemento.ingredients[0]}</li>
                                    <li className="hover-list">{elemento.ingredients[1]}</li>
                                    <li className="hover-list">{elemento.ingredients[2]}</li>
                                    <li className="hover-list">{elemento.ingredients[3]}</li>
                                </ul>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <p className="m-0 texto-precio-antes text-dark-50">ANTES ${elemento.price +5000}</p>
                                <h5 className="texto-precio m-0 text-white">${elemento.price}</h5>
                                <p className="text-dark-50">Oferta válida sólo con tarjeta de crédito.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 mb-3">

                            <button onClick={() => navigate(`/Pizzas/${index}`)} className="btn btn-danger">VER MÁS</button>
                                <button onClick={() => {añadirPizza(elemento)
                                setTotalPizza(totalPizza + elemento.price)
                                }
                                    } className="btn btn-info">AÑADIR</button>
                            </div>
                        </div>
                    </div>
            })}
        </div>
    )
}

export default Pizzas