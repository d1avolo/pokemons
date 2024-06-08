import { useEffect } from "react"
import { usePokemonsStore } from "../app/storage/store"
import sryles from './UI.module.css'


export default function Pokemons() {
    const {pokemons, fetchRequest, imageRequest} = usePokemonsStore()

    useEffect(() => {
        fetchRequest()
    }, [fetchRequest])

    return (
        <>
            <div className={sryles.main}>
                {pokemons.map((item) => (
                    <div key={item.name} className={sryles.frame}>
                        <span className={sryles.name}>{item.name}</span>
                        <img src={imageRequest} alt="art" className={sryles.art}/>
                    </div>
                ))}
            </div>
        </>
    )
}