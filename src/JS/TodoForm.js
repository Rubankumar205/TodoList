
const addButton = document.querySelector("#addTask")
 const todo = [];

function todoListPage() {
    window.location.href = "/addTask"
}
function newFormatPage(){
    window.location.href = "/newFormat"

}
function setMessage(msg, type) {
    var textNode = document.createTextNode(msg)
    const nodeMsg = document.getElementById("todoform-message")
    nodeMsg.replaceChild(textNode, nodeMsg.childNodes[0])
    nodeMsg.style.color = type;

}
function showResults() {
    // console.log(todo)
    const tempTodo = document.querySelector(".todoform-input").value
    const tempStartDate = document.getElementById("todoform-start-date").value
    const tempEndDate = document.getElementById("todoform-end-date").value
    const tempOption = document.querySelector(".todoform-select").value
    const tempComments = document.querySelector(".todoform-textarea").value
    if (!tempTodo) {
        setMessage("Please enter Task name", "red")
        return;
    }
    if (!tempStartDate || !tempEndDate) {
        setMessage("Please enter Start or End Date", "red")
        return;
    }
    if (tempStartDate && tempEndDate) {
        if (tempStartDate > tempEndDate) {
            setMessage("Start date is Greater than End date", "red");
            return;
        }
    }
    setMessage("Added Successfully", "white")
    const indTodo = {
        task : tempTodo,
        startDate : tempStartDate,
        endDate : tempEndDate,
        priority : tempOption,
        comments : tempComments
    }
    todo.push(indTodo)
    sendToServer(indTodo);
}

const sendToServer = async (indTodo) => {
    let tempString = JSON.stringify(indTodo);
   
    console.log(tempString)
    const tempURL = `http://localhost:3000/postData/${tempString}`;
    try {
        const responseFromServer = await fetch(tempURL,
        {
        method : 'POST',
        headers: new Headers({
            'content-Type': 'application/json'
          }),
        body: JSON.stringify(indTodo),
        mode: 'no-cors'
        })
        //const content = await responseFromServer.json()

          console.log(responseFromServer)
        //console.log(content)

    }
     catch (error) {
         console.log(error)
     }

     try {
         const response = await fetch('http://localhost:3000/');
         const data = await response.json();
         console.log(data)

         
     } catch (error) {
         
     }
}

