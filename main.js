var quotes = [
    "yolo",
    "haleloyaaa",
    "no code is the best code :D "
]

var para = document.getElementById("quoteoftheday")
function newQuote() {

   para.innerHTML= quotes[Math.round(Math.random() * 3)]
}


