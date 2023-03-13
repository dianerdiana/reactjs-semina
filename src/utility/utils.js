// ** get user from localstorage
export const getUserData = () => {
  const user = JSON.parse(localStorage.getItem('userData'))

  return user
}
