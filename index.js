// Write your code here!

// remove the main node
const mainNode = document.getElementById("main");
if (mainNode) {
  mainNode.remove();
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Ruth is the champion";
document.body.appendChild(newHeader);
