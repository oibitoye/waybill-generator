export const getCSRFTOKEN = () => {
    return localStorage.getItem('user:CsrfToken')
}

// Set the token in session storage
export const setToken = (token) => {
    localStorage.setItem('token', token)
}

// Get the token from session storage
export const getToken = () => {
    return localStorage.getItem('token')
}

export const setCSRFTOKEN = (token) => localStorage.setItem('user:CsrfToken', token)
// export const getAuthToken = () => {
//     return localStorage.getItem('token')
// }

export const getAuthToken = () => {
    return getToken()
}

export const setAuthToken = (data) => {
    return setToken(data)
}

export const setAuthData = (data) => {
    return localStorage.setItem('user:profileData', JSON.stringify(data))
}

export const getAuthData = () => {
    let result;
    if (localStorage.getItem('user:profileData')) {
        result = JSON.parse(localStorage.getItem('user:profileData'))
    }
    return result
}

export const removeAuthData = () => {
    try {
        localStorage.removeItem('user:profileData')
        localStorage.removeItem('token')
        // clearCookie('your-cookie-name');
        return true
    } catch (err) {
        console.log(err)
        return false
    }
}

const clearCookie = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
// export const setAuthToken = (token) => localStorage.setItem('token', token)
