const getMethodFetch = (route) => {

    let response = fetch(`https://blog-it-backend-lbae.onrender.com/${route}`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        }
    })

    response = response.then(response => response.json())
    return response
}

export default getMethodFetch