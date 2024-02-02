const putMethodFetch = (route, details) => {

    let response = fetch(`https://blog-it-backend-lbae.onrender.com/${route}`, {
        method: 'PUT',
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(details)
    })

    response = response.then(response => response.json())
    return response
}

export default putMethodFetch