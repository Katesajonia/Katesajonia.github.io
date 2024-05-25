const btnLike1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnLike2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
function clickLike1(){
    let totalLike1 = parseInt(countLikes1.value) + 1
    countLikes1.textContent = totalLike1.toString()
}
function clickLike2(){
    let totalLike2 = parseInt(countLikes2.value) + 1
    countLikes2.textContent = totalLike2.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
