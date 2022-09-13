/*
// START
// Creating and Deleting Elements onClick in JS using the DOM.
const btn = document.querySelector("button"); //selects button in body
btn.addEventListener("click", displayMessage); //runs function onclick

function displayMessage() {
    const body = document.body; //set var body to the body tag in the dom.

    const panel = document.createElement("div"); //create div
    panel.setAttribute("class", "msgBox"); //sets a class to the div
    body.appendChild(panel); //appends the div to the body

    const msg = document.createElement("p"); //create p
    msg.textContent = "This is a message box"; //sets paragraph text
    panel.appendChild(msg); //appends p to the div

    const closeBtn = document.createElement("button"); //create button
    closeBtn.textContent = "x"; //sets text in button
    panel.appendChild(closeBtn); //appends to the div

    closeBtn.addEventListener("click", () => //add eventListener to the button
    panel.parentNode.removeChild(panel)); //removes the div
}
//END
*/

// START
//Same function but we are now gonna add parameters
const btn = document.querySelector("button"); //selects button in body
btn.addEventListener("click", () => 
displayMessage("Your inbox is almost full - delete some mails", "warning"), 
displayMessage("Brian: Hi there, how are you today?", "chat")); //runs function onclick

function displayMessage(msgText, msgType) {
    const body = document.body; //set var body to the body tag in the dom.

    const panel = document.createElement("div"); //create div
    panel.setAttribute("class", "msgBox"); //sets a class to the div
    body.appendChild(panel); //appends the div to the body

    const msg = document.createElement("p"); //create p
    msg.textContent = msgText; //sets paragraph text, from parameter.
    panel.appendChild(msg); //appends p to the div

    const closeBtn = document.createElement("button"); //create button
    closeBtn.textContent = "x"; //sets text in button
    panel.appendChild(closeBtn); //appends to the div

    closeBtn.addEventListener("click", () => //add eventListener to the button
    panel.parentNode.removeChild(panel)); //removes the div

    if (msgType === "warning") {
        msg.style.backgroundImage = "url(icons/warning.png)";
        panel.style.backgroundColor = "red";
    } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(icons/chat.png)";
        panel.style.backgroundColor = "aqua";
    } else {
        msg.style.paddingLeft = "20px";
    }
}
// END
