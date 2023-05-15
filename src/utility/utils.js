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

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { day: 'numeric', month: 'short', year: 'numeric' }
  const formattedDate = date.toLocaleDateString('en-GB', options)

  return formattedDate
}

export const formatTime = (dateString) => {
  // Create a new Date object from the input string
  const date = new Date(dateString)

  // Get the hours and minutes from the Date object
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Determine if it is AM or PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM'

  // Convert the hours to 12-hour format
  const hours12 = hours % 12 || 12

  // Create the final time string in HH:MM AM/PM format
  const timeString = `${hours}:${String(minutes).padStart(2, '0')} ${amOrPm}`

  return timeString
}
