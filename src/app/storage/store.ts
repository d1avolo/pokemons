import { create } from "zustand";
import axios from "axios";


interface InitialState {
    name: string;
    url: string
}


interface Request {
    pokemons: InitialState[],
    fetchRequest: () => Promise<void>
    imageRequest: (id: any) => void
}


export const usePokemonsStore = create<Request>((set) => ({
    pokemons: [],
    fetchRequest: async () => {
        const request = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const pokemons = request.data.results;
        set({ pokemons });
    },
    imageRequest: async (id: any) => {
        const request = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}/`);
        const pokemons = request.data.results;
        set({ pokemons });
    }
}));