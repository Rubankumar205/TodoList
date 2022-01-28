 //import todo from './TodoForm'
function todoFormPage(){
    window.location.href = "/"

}
const todo = [
    {
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban",
        completed : false
    },
    {
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kuma",
        completed : false

    },{
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kumar",
        completed : true

    },
    {
        comments: "xcz",
        endDate: "2022-01-20",
        priority: "High",
        startDate: "2022-01-08",
        task: "ruban kumar 123",
        completed : true

    },

]
 async function showTodo () {
     const showButton = document.getElementById('todo-show-button');
     showButton.disabled = true;
     const responseFromServer = await fetch('http://localhost:3000/getData')
     const dataFromServer = await responseFromServer.json();
     console.log(dataFromServer)
     dataFromServer.map((ind)=>{    
         todo.push(JSON.parse(ind))
     })
     
    for(let i = 0;i<todo.length;++i){
        const ind = todo[i];
        const row = document.createElement('tr');
        row.className = "todo-task"

        const done = document.createElement('td');
        done.className = "todo-table-done"
        
        const doneDiv = document.createElement('div');
        doneDiv.className = "todo-table-done-div"
        doneDiv.style.backgroundColor = ind.completed  ? 'red' : '#1296e3'
        doneDiv.addEventListener('click',()=>{
            ind.completed = !ind.completed;
        doneDiv.style.backgroundColor = ind.completed  ? 'red' : '#1296e3'

        })


        done.appendChild(doneDiv);

        const taskTd = document.createElement('td');
        taskTd.innerHTML = ind.task;
        taskTd.className = "todo-table-td-div"

        const currentDateTd = document.createElement('td');
        currentDateTd.innerHTML = ind.startDate;
        currentDateTd.className = "todo-table-td-div"

        const startDateTd = document.createElement('td');
        startDateTd.innerHTML = ind.startDate;
        startDateTd.className = "todo-table-td-div"

        const priorityTd = document.createElement('td');
        priorityTd.innerHTML = ind.priority;
        priorityTd.className = "todo-table-td-div"

        const endDateTd = document.createElement('td');
        endDateTd.innerHTML = ind.endDate;
        endDateTd.className = "todo-table-td-div"   
        
        const commentsTd = document.createElement('td');
        commentsTd.innerHTML = ind.comments;
        commentsTd.className = "todo-table-td-div"

        const delButtonTd = document.createElement('td');
        const delButtonEle = document.createElement('button');
        delButtonEle.className = "todo-action-button"
        delButtonEle.innerHTML = "Delete"
        delButtonEle.addEventListener('click',()=>{
            const tempTbody = document.getElementById('todo-body')
            tempTbody.removeChild(row)
        })
        delButtonTd.appendChild(delButtonEle);

        const editButtonTd = document.createElement('td');
        const editButtonEle = document.createElement('button');
        editButtonEle.className = "todo-action-button"
        editButtonEle.innerHTML = "Edit"
        editButtonEle.addEventListener('click',()=>{
           editRow(row,i);
        })
        editButtonTd.appendChild(editButtonEle);

        
        row.appendChild(done);
        row.appendChild(taskTd);
        row.appendChild(currentDateTd);
        row.appendChild(startDateTd);
        row.appendChild(priorityTd);
        row.appendChild(endDateTd);
        row.appendChild(commentsTd);
        row.appendChild(editButtonTd)
        row.appendChild(delButtonTd)
        

        document.getElementById('todo-body').appendChild(row)
    }
    const doneTd = document.getElementsByClassName('todo-table-done')
    console.log(doneTd)
    
};

function editRow (row,index) {
    var newCommentText = document.createTextNode(todo[index].comments);
    const newTextArea = document.createElement('textarea');

    newTextArea.appendChild(newCommentText)
    newTextArea.className='editrow-textarea'
    newTextArea.style.resize='none'

    const saveButtonTd = document.createElement('td');
        const saveButtonEle = document.createElement('button');
        saveButtonEle.className = "todo-action-button"
        saveButtonEle.innerHTML = "Save"
        saveButtonEle.addEventListener('click',()=>{
            console.log(row.childNodes[6].value )
            const commentsTd = document.createElement('td');
            commentsTd.innerHTML = row.childNodes[6].value;
            commentsTd.className = "todo-table-td-div"
            todo[index].comments = row.childNodes[6].value;
            row.replaceChild(commentsTd,row.childNodes[6])

            
            editButton(row,index);
            deleteButton(row);


        })
        saveButtonTd.appendChild(saveButtonEle);

        const cancelButtonTd = document.createElement('td');
        const cancelButtonEle = document.createElement('button');
        cancelButtonEle.className = "todo-action-button"
        cancelButtonEle.innerHTML = "Cancel"
        cancelButtonEle.addEventListener('click',()=>{
            console.log(row.childNodes[6].value )
            const commentsTd = document.createElement('td');
            commentsTd.innerHTML = todo[index].comments
            commentsTd.className = "todo-table-td-div"
            row.replaceChild(commentsTd,row.childNodes[6])

            editButton(row,index);
            deleteButton(row);
        })
        cancelButtonTd.appendChild(cancelButtonEle);
    
    row.replaceChild(newTextArea,row.childNodes[6]);
    row.replaceChild(saveButtonTd,row.childNodes[7]);
    row.replaceChild(cancelButtonTd,row.childNodes[8]);


    console.log(row)
}

function editButton (row,index) {
    const editButtonTd = document.createElement('td');
            const editButtonEle = document.createElement('button');
            editButtonEle.className = "todo-action-button"
            editButtonEle.innerHTML = "Edit"
            editButtonEle.addEventListener('click',()=>{
             editRow(row,index);
            })
            editButtonTd.appendChild(editButtonEle);
            row.replaceChild(editButtonTd,row.childNodes[7])
}

function deleteButton (row) {
    const delButtonTd = document.createElement('td');
            const delButtonEle = document.createElement('button');
            delButtonEle.className = "todo-action-button"
            delButtonEle.innerHTML = "Delete"
            delButtonEle.addEventListener('click',()=>{
                const tempTbody = document.getElementById('todo-body')
                tempTbody.removeChild(row)
            })
            delButtonTd.appendChild(delButtonEle);
            row.replaceChild(delButtonTd,row.childNodes[8])
}

function commentsArea (value) {
    
}