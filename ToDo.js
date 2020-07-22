function addTasks()
{
        createTableRow(); //ya function ok hy.
}

function createTableRow()
{
    var myTable = document.getElementById('mytable');
    var tableRow = document.createElement('tr');
    var addTask = document.getElementById("newTask").value;
    var addTaskDesc = document.getElementById("taskDesc").value;
    if(addTask != "")
    {
        if(addTaskDesc != "")
        {
            var date_obj = new Date();
            var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var currentDay = day[date_obj.getDay()];
            var currentDate = date_obj.getDate();
            var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var currentMonth = mon[date_obj.getMonth()];
            var currentYear = date_obj.getFullYear();
            var completeDate = currentDay +" "+ currentDate +"-"+ currentMonth +"-"+ currentYear;
        
            var tableDate1 = document.createElement('td');
            tableDate1.append(addTask);
        
            var tableDate2 = document.createElement('td');
            tableDate2.append(addTaskDesc);
        
            var tableDate3 = document.createElement('td');
            tableDate3.append(completeDate);
        
            var tableDate4 = document.createElement('td');
            var editButton = document.createElement('button');
            editButton.append('Edit');
            // editButton.setAttribute('onclick','editTask()');
            editButton.addEventListener('click', function(e)
            {
                var editTask = tableRow.childNodes[0].textContent;
                document.getElementById("newTask").value = editTask;
        
                var editTaskDesc = tableRow.childNodes[1].textContent;
                document.getElementById("taskDesc").value = editTaskDesc;
        
                tableRow.parentNode.removeChild(tableRow);
        
            }, false);
            editButton.setAttribute('style','border: 1px solid; width: 100px; margin: 2px;');
            
            var brTag = document.createElement('br');
            
            var tableDate4 = document.createElement('td');
            var deleteButton = document.createElement('button');
            deleteButton.append('Delete');
            // deleteButton.setAttribute('onclick','deleteTask()');
            deleteButton.addEventListener('click', function(e)
            {
                tableRow.parentNode.removeChild(tableRow);
        
            }, false); //function(e) is the annonamous function.
            deleteButton.setAttribute('style','border: 1px solid; width: 100px; margin: 2px;');
            
            tableDate4.append(editButton, brTag, deleteButton );
        
            tableRow.append(tableDate1);
            tableRow.append(tableDate2);
            tableRow.append(tableDate3);
            tableRow.append(tableDate4);
        
            myTable.appendChild(tableRow);
            
            document.getElementById("taskDesc").value = null;
            document.getElementById("newTask").value = null;
        }
        else
        {
            alert("Description is not defined....");
        }
    }
    else
    {
        alert("First define task and its dascription....");
    }
}
