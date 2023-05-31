import { createContext, useState, useContext } from "react";

export const UserContext = createContext()

export default function UserContextProvider({children}){
    const [carro, setCarro] = useState([])
    const [pizzaUno, setPizzaUno] = useState (0)
    const [pizzaDos, setPizzaDos] = useState (0)
    const [pizzaTres, setPizzaTres] = useState (0)
    const [pizzaCuatro, setPizzaCuatro] = useState (0)
    const [pizzaCinco, setPizzaCinco] = useState (0)
    const [pizzaSeis, setPizzaSeis] = useState (0)
    const [totalPizza, setTotalPizza] = useState(null)

    return (
        <UserContext.Provider value={{carro, setCarro, pizzaUno, setPizzaUno, pizzaDos, setPizzaDos, pizzaTres, setPizzaTres, pizzaCuatro, setPizzaCuatro, pizzaCinco, setPizzaCinco, pizzaSeis, setPizzaSeis, totalPizza, setTotalPizza}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)