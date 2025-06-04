// Change document background color to silver
const colorChange=document.body;
colorChange.style.backgroundColor="silver";

// Change the font color for h1 title tag to green
const titleColor=document.getElementById("title");
titleColor.style.color="green";

// Change the font case for h3 title tags to uppercase
const upperCase=document.getElementById("subtitle")
upperCase.style.textTransform="upperCase";

// Add one more fruit to the fruits list
const fruitLists=document.getElementById("fruitList")
const newFruit=document.createElement("li")
newFruit.textContent="Avocado"
fruitLists.append(newFruit);

// Add one more vegetable to the vegetables list
const VegetableLists=document.getElementById("vegetableList")
const newVegetable=document.createElement("li")
newVegetable.textContent="Karot"
VegetableLists.append(newVegetable);




