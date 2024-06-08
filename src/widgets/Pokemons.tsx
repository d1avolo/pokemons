import { useEffect } from "react"
import { usePokemonsStore } from "../app/storage/store"
import sryles from './UI.module.css'


export default function Pokemons() {
    const {pokemons, fetchRequest} = usePokemonsStore()

    useEffect(() => {
        fetchRequest()
    }, [])

    return (
        <>
            <div className={sryles.main}>
                {pokemons.map((item) => (
                    <div key={item.id} className={sryles.frame}>
                        <img src={item.back_default} alt="art" />
                        <span className={sryles.name}>{item.name}</span>
                    </div>
                ))}
            </div>
        </>
    )
}