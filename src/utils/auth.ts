export const saveAccessTokenToLS = (access_token: string) => {
    localStorage.setItem('access_token', access_token)
}

export const clearAccessTokenFormLS = () => {
    localStorage.removeItem('access_token')
}

export const getAccessTokenFormLS = () => localStorage.getItem('access_token') || ''