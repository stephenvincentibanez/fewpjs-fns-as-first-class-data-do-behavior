/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
  function greet(timeString){
    const parsed = parseInt(timeString)
    if (parsed < 12){
      return "Good Morning"
    }
    else if (12 <= parsed && parsed < 17){
      return "Good Afternoon"
    }
    else if (parsed >= 17){
      return "Good Evening"
    }}
/* Write your implementation of displayMessage() */
  function displayMessage(str){
    document.getElementById("greeting").innerText = str
  }
