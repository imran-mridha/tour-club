const addToDatabase = (id) => {
    localStorage.setItem('break-time', id)
}

const getStoredTime =  () => {
    let breakTime = {};
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime)
    } else {
        breakTime = 0;
    }
    return breakTime;
}
export{addToDatabase, getStoredTime}