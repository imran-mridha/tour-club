const addToDatabase = (id) => {
    localStorage.setItem('break-time', id)
}

const getStoredCart =  () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = 0;
    }
    return shoppingCart;
}
export{addToDatabase, getStoredCart}