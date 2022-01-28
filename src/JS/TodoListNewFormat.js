const todo = [
    {
        id : 12,
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban",
        completed : false,
        selected : false
    },
    {
        id : 13,
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kumar",
        completed : true,
        selected : false


    },{
        id : 14,
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kumar",
        completed : false,
        selected : false

    },
    {
        id : 14,
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kumar 123",
        completed : true,
        selected : false

    },

]
let toShow = {};
let currentlyViewing = ''
function homePage(){
    window.location.href = "/"

}

async function showList() {
    const responseFromServer = await fetch('http://localhost:3000/getData')
    const dataFromServer = await responseFromServer.json();
    console.log(dataFromServer)
    dataFromServer.map((ind)=>{
        todo.push(JSON.parse(ind))
    })
    todo.map((ind,index)=>{
        const leftHalf = document.getElementById('list-of-todos')
        const showButton =document.getElementById('show-button')
        const rightDiv = document.getElementById('ind-todo');

        rightDiv.innerHTML='There are no todo list currently clicked'
        showButton.disabled = true;

        const taskDiv = document.createElement('div');
        const taskText = document.createTextNode(`${ind.task} ${ind.id}`);

        taskDiv.className='task-div'
        taskDiv.style.backgroundColor = ind.selected ? 'green' : 'white'
        taskDiv.appendChild(taskText);

        leftHalf.appendChild(taskDiv)
        


        taskDiv.addEventListener('click',()=>{
            const listOfTaskDiv = document.getElementsByClassName('task-div');
           for(let i=0;i<listOfTaskDiv.length;++i){
               if(listOfTaskDiv[i]===taskDiv){
                  taskDiv.style.backgroundColor='#9edde6';
                  if(currentlyViewing===taskDiv){
                    taskDiv.style.backgroundColor='white';
                    currentlyViewing = '';
                    rightDiv.innerHTML='There are no todo list currently clicked'
                  }
                  else{                 
                  todo.map(element=>{
                      const identity = `${element.task} ${element.id}`
                        if(identity===taskDiv.innerHTML){
                            toShow = {
                                task : element.task,
                                comments : element.comments,
                                startDate : element.startDate,
                                endDate : element.endDate,
                                priority : element.priority,
                                completed : element.completed
                            }
                            
                        }
                  })
                  currentlyViewing = taskDiv;
                    showIndTodo();

                }
                
               }
               else{
                   listOfTaskDiv[i].style.backgroundColor='white'
               }
               
           }

        })

    })
}
function showIndTodo(){

    const rightDiv = document.getElementById('ind-todo');
    rightDiv.innerHTML=''
    Object.keys(toShow).map(ind=> {
        const textNodeDiv = document.createElement('div')
      const tempTextNode = document.createTextNode(toShow[ind]);
      textNodeDiv.className = 'text-node'
    //   const tempBrake = document.createElement('br');
      textNodeDiv.appendChild(tempTextNode)
      rightDiv.appendChild(textNodeDiv)
    //  rightDiv.appendChild(tempBrake)
      
    })
}
