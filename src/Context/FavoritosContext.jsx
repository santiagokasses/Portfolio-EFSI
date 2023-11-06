import React from 'react';

export const FavoritosContext = React.createContext();

const FavoritosProvider = (props) => {
    const [favoritos, setFavoritos] = React.useState(JSON.parse(localStorage.getItem('favoritos')) || []);

    React.useEffect(()=>{
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    return <FavoritosContext.Provider value={{favoritos, setFavoritos}}>{props.children}</FavoritosContext.Provider>
}

export default FavoritosProvider;