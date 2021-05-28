//get elements by id// 

//header
document.getElementById("page-header");
document.getElementById("main-heading").innerHTML = "New DOM Layout";
//change header background color
document.getElementById("page-header").classList.add("bg-success")
document.getElementById("page-header").classList.remove("bg-dark")

//change article
document.getElementById("para1").innerHTML = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
document.getElementById("para2").innerHTML ="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

//button//
const addButton = document.getElementById("btn")
//event listener//
addButton.addEventListener("click", () =>{
    const newpara = document.getElementById("para4").innerHTML ="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
})
//article 4//
const newpara = document.getElementById("para4")

//id for orginal boxes
document.getElementById("red")
document.getElementById("blue")
document.getElementById("yellow")
document.getElementById("green")
document.getElementById("black")

//add class list 
document.getElementById("red").classList.add("bg-danger")
document.getElementById("blue").classList.add("bg-primary")
document.getElementById("yellow").classList.add("bg-warning")
document.getElementById("green").classList.add("bg-success")
document.getElementById("black").classList.add("bg-dark")

//remove old class list
document.getElementById("red").classList.remove("bg-white")
document.getElementById("blue").classList.remove("bg-white")
document.getElementById("yellow").classList.remove("bg-white")
document.getElementById("green").classList.remove("bg-white")
document.getElementById("black").classList.remove("bg-white")



