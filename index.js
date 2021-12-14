const genres = [
    "comedy",
    "Drama",
    "Romance",
    "Horror",
    "Sci-Fi",
    "Documentary"
]

for (let i = 0; i < genres.length; i++) {
    const a = genres[i]






    let listContainer = document.getElementById("list-container") 
    const olNode = document.createElement("ol")
    olNode.classList.add("list")
    let newListNode = document.createElement("li")
    newListNode.innerText = a
    listContainer.appendChild(olNode)
    olNode.appendChild(newListNode)


}
