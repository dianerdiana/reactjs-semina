// ** get user from localstorage
export const getUserData = () => {
  const user = JSON.parse(localStorage.getItem('userData'))

  return user
}

// ** Check if the user is login
export const isLoggedInUser = () => localStorage.getItem('userData')

// ** React Select Theme Colors
export const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#01fb341a', // for option hover bg-color
    primary: '#01fb34', // for selected option bg-color
    neutral10: '#01fb34', // for tags bg-color
    neutral20: '#ced4da', // for input border-color
    neutral30: '#ced4da', // for input hover border-color
    text: '#FFFFFF' // for font color
  }
})

export const selectStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    paddingTop: '0.376rem',
    paddingBottom: '0.376rem',
    borderRadius: '14px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#FFFFFF' // change this to your desired color
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#FFFFFF' // change this to your desired color
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#FFFFFF' // change this to your desired color
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: '#252837',
    borderRadius: '14px'
  })
}
