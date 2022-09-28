const addToDatabase = (id) => {
    localStorage.setItem('Cart', id)
}

const getStoredCart =  () => {
    let shoppingCart = {};
    const storedCart = localStorage.getItem('Cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = 0;
    }
    return shoppingCart;
}
export{addToDatabase, getStoredCart}