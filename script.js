const form = document.querySelector('form')
const button = document.querySelector('button')
const mainDiv = document.querySelector('#main-body')



form.addEventListener('submit', (e) => {
  e.preventDefault()
  mainDiv.innerHTML = ""
  getInfo()
  form.elements.query.value = ''
})


const getInfo = async (e) => {
  try {
    let userInput = form.elements.query.value


    const config = {
      params: { name: userInput }
    }

    const info = await axios.get('https://universities.hipolabs.com/search', config)
    const data = info.data
    console.log(data)
    printNames(data)
  }
  catch{
    alert('Something went wrong')
    console.log(e)
  }
}

const printNames = (array) => {

  if (array.length === 0) {
    const name = document.createElement('h2')
    name.append('No university found')
    mainDiv.append(name)
  }


  for (let uni of array) {
    // console.log(uni.name)
    // console.log(uni.web_pages[0])


    const name = document.createElement('h2')
    name.append(uni.name)
    mainDiv.append(name)
    console.log(uni.name)
    const site = document.createElement('a')
    site.append(uni.web_pages)
    site.href = uni.web_pages
    site.setAttribute('target', '_blank');
    mainDiv.append(site)

  }

}