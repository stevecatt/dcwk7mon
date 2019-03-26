let titleInp = document.getElementById("titleInp")
let priorityInp =document.getElementById("priorityInp")
let isCompletedCheck = document.getElementById("isCompletedCheck")
let submitBtn = document.getElementById("submitBtn")
let getTasksBtn = document.getElementById("getTasksBtn")
let taskOut = document.getElementById("taskOut")

let url = 'http://localhost:3000/todos'
let taskItems= []

getTasksBtn.addEventListener('click',function(){
    
    fetch (url)
    
  
        .then(response => response.json())
        .then(json => json.map(task=>{
             console.log(json)
            taskItems.push(`
             <h3> Task for the day</h3>
            <li>Title ${task.title}</li>
            <li>Priority ${task.priority}</li>
            <li>Created ${task.dateCreated}</li>
            <li>Completed ${task.dateCompleted}</li>
            <li> is Completed? ${task.isCompleted}</li>
            `
            
        )

        }))
        taskOut.innerHTML= taskItems.join("")
        taskItems = []
        
})

submitBtn.addEventListener("click", function(){
    let  title= titleInp.value
    let  priority = priorityInp.value
    let  isComplete = isCompletedCheck.checked
    
    console.log(title+priority+isComplete)
    let completed = new Date()
    console.log(completed)

    if (isComplete == true){
        let complete = "Complete"
        let completed = new Date()
        let comp=completed.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
       
        let create = ""
        let pushJson = {title :title, priority:priority, dateCreated: create , dateCompleted:comp, isCompleted:complete  }
        console.log(pushJson)
        fetch(url,{
            method:"POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(pushJson)
        })
        
    }






    else {let complete = "Pending"
        let comp= ""
       


    let created = new Date()
    console.log(created)
    let create = created.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    let pushJson = {title :title, priority:priority, dateCreated: create , dateCompleted:comp, isCompleted:complete  }
    console.log(pushJson)
    fetch(url,{
        method:"POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(pushJson)
    })
    
}       

})
