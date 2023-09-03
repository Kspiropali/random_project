import React, { useState, useContext, createContext } from "react";

// replace authContext with ____Context that makes sense to you
const PokeContext = createContext();

// replace AuthProvider with ____Provider that makes sense to you
export const PokeProvider = ({ children }) => {
    // replace user variable with something that makes sense to you
    // replace setUser with something that makes sense to you
    const [pokemon, setPokemon] = useState();

    return (
        <PokeContext.Provider value={{ pokemon, setPokemon }}>
            {children}
        </PokeContext.Provider>
    );
};

// replace useAuth with use____ that makes sense to you
export const usePokemon = () => useContext(PokeContext);
