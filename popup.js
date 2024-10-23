// add list of links to open


// get value of input when submit button is clicked
const button = document.querySelector('.add-item')
button.addEventListener('click', (e) => {
  e.preventDefault()
  const link = document.getElementById('link-input').value
  console.log(link)

})


// save list to local storage

// read list from local storage when popup is opened

// move items in list

// remove item from list

// open list of pinned tabs automatically in new window