import { create } from "zustand";
import axios from "axios";


interface InitialState {
    id: number;
    name: string;
    back_default: string
}


interface Request {
    pokemons: InitialState[],
    fetchRequest: () => Promise<void>
}


export const usePokemonsStore = create<Request>((set) => ({
    pokemons: [],
    fetchRequest: async () => {
            const request = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
            const pokemonData = await Promise.all(request.data.results.map(async (pokemon: any) => {
                const pokemonDetail = await axios.get(pokemon.url)
                return {
                    id: pokemonDetail.data.id,
                    name: pokemonDetail.data.name,
                    back_default: pokemonDetail.data.sprites.back_default
                }
            }))
            set({ pokemons: pokemonData })
    } 
}));