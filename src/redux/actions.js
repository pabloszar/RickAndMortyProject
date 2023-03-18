export const addFav = "ADDFAV";
export const deleteFav = "DELETEFAV";

export const addFavorite = (id) => {
    return function (dispatch) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((data) => dispatch({ type: addFav, payload: data }));
};
}

export const deleteFavorite = (id) => {
    return {type: deleteFav, payload: id};
} 