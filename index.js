// Change document background color to silver
const colorChange=document.body;
colorChange.style.backgroundColor="silver";

// Change the font color for h1 title tag to green
const titleColor=document.getElementById("title");
titleColor.style.color="green";

// Change the font case for h3 title tags to uppercase
const upperCase=document.getElementById("subtitle")
upperCase.style.textTransform="upperCase";
const upper=document.getElementById("veg")
upper.style.textTransform="upperCase";



// Add one more fruit to the fruits list
const fruitLists=document.getElementById("fruitList")
const newFruit=document.createElement("li")
newFruit.textContent="Avocado"
fruitLists.append(newFruit);


const  fruitImages = {
  "Mangoes": "images/mangor.png",
  "Bananas": "images/bananar.png",
  "Water Melons": "images/watermelonr.png",
  "Orange": "images/avocador.png"
}
document.querySelectorAll("#fruitList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-image";
      li.appendChild(img);
    }
  });








// Add one more vegetable to the vegetables list
const VegetableLists=document.getElementById("vegetableList")
const newVegetable=document.createElement("li")
newVegetable.textContent="Karot"
VegetableLists.append(newVegetable);




// const image=document.getElementById("title");
const img = document.createElement('img');
img.src = 'images/avocador.png';
const targetElement = document.getElementById('fruitList');
targetElement.appendChild(img); 

// document.getElementById("mango").src = "image/mangor.png";


const imgveg = document.createElement('imgveg');
imgveg.src ='image/karot.jpeg';
const vegetable = document.getElementById('vegetableList');
vegetable.appendChild(imgveg); 

const pop=document.getElementById("fruitList")
const popveg=document.getElementById("vegetableList")
pop.addEventListener("click",function(){
    popveg.style.display="none";
    pop.style.display="flex";
    pop.style.color="green"
    pop.style.fontSize="30px"
})

const popvegetable=document.getElementById("vegetableList")
const popfru=document.getElementById("fruitList")
popvegetable.addEventListener("click",function(){
    popfru.style.display="none";
    popvegetable.style.display="flex"
    popvegetable.style.color="green"
    popvegetable.style.fontSize="30px"
})



// const img1 = document.createElement('img1');
// img1.src = 'images/mangor.png';
// const mango = document.getElementById('mango');
// mango.appendChild(img1); 

// const img2 = document.createElement('img2');
// img2.src = 'images/bananar.jpeg';
// const banana = document.getElementById('banana');
// banana.appendChild(img2); 


// const img3 = document.createElement('img3');
// img.src = 'images/watermelonr.jpeg';
// const watermelon = document.getElementById('banana');
// watermelon.appendChild(img3); 

  
document.getElementById("fruitList").appendChild(img)

const clickWord=document.getElementById("subtitle");
clickWord.addEventListener("click",()=>{

    clickWord.textContent="Here Are Fruits!";
    clickWord.style.backgroundColor="green";
    clickWord.style.color="white";
    clickWord.style.padding="7%"
});
const clickVegetable=document.getElementById("veg")
clickVegetable.addEventListener("click",function(){
    clickVegetable.textContent="Here Are Vegetables!";
    clickVegetable.style.color="white";
    clickVegetable.style.backgroundColor="green"
    clickVegetable.style.padding="7%"
});

const frulists=document.getElementById("fruitList")
fruitLists.addEventListener("click",function(){
    fruitLists.classList.toggle("change")
});
const fixedNav=document.getElementById("navbar")
fixedNav.style.position = "fixed";

const scrolBody=document.getElementsById("navbar");
scrolBody.addEventListener("scrol",()=>{

    scrolBody.textContent="Here Are Fruits!";
    scrolBody.style.backgroundColor="red";
});













