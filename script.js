const api = "a017de2e26124c19a10f8dfd3128836a"
const url = "https://newsapi.org/v2/everything?q="
const politics = document.getElementById("politics")
const finance = document.getElementById("financenews")
const technologynews = document.getElementById("technologynews")
const search = document.getElementById("search-box")

const fetchData = async(query) =>{
    const datashow = document.getElementById("cardbox")
      let data = await fetch(`${url}${query}&apiKey=${api}`)
      // let data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-01&sortBy=publishedAt&apiKey=a017de2e26124c19a10f8dfd3128836a`)
      let response = await data.json()
      let html = ""
      response.articles.forEach((ele,i) => {
            html += `
            <div class="card border-2 border-primary mt-4" style="width: 22rem;">
           <img  src=${response.articles[i].urlToImage} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title text-primary">${response.articles[i].title} </h5>
              <p class="card-text ">${response.articles[i].description}</p>
            </div>
            </div>
         `
         datashow.innerHTML = html
      })
}
politics.addEventListener("click",()=>{
  fetchData("politics")
})
financenews.addEventListener("click",()=>{
  fetchData("finance")
})
technologynews.addEventListener("click",()=>{
  fetchData("technology")
})

document.getElementById("btn").addEventListener("click",()=>{
  let query = search.value
  fetchData(query)
})
fetchData("india")