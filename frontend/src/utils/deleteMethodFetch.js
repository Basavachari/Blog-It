const deleteMethodFetch = (route, blogId) => {

    let response = fetch(`https://blog-it-backend-lbae.onrender.com/${route}`, {
        method: 'DELETE',
        credentials: 'include',
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ blogId })
    })

    response = response.then(response => response.json())
    return response
}

export default deleteMethodFetch