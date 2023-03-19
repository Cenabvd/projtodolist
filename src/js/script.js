// Dudget controlles
let BudgetControlles = (function(){

    //the new todo html
    let newToDoHTML = '<div id="todo" class="flex items-center justify-between px-8 py-4 overflow-x-hidden border-gray-500 dark:border-white"><div class="title flex items-center"><div id="active-todolist" class="cursor-pointer w-[15px] h-[15px] bg-white dark:bg-transparent border-2 border-solid border-indigo-400  dark:border-white rounded-lg"></div><h2 class="capitalize text-indigo-400 dark:text-white ml-4 cursor-default">%userInput%</h2></div><div id="tools-parent" class="tools"><i id="todo-tools" class="cursor-pointer flex space-x-6 lg:relative lg:left-[900px] transition-all ease duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 text-indigo-400 dark:text-white" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen text-indigo-400 dark:text-white" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg></i></div></div>'

    return{
        userToDoListName : function(){
            // get input value
            let userInput = document.getElementById('addtodopageinput').value;

            if(userInput.length > 0){
                let newHTML =  newToDoHTML.replace('%userInput%' , userInput) ;
                document.getElementById('todo-box').insertAdjacentHTML('beforeend' , newHTML);  
            }
        },

        clearIputValueField : function(){
            let userInput = document.getElementById('addtodopageinput').value = "";
        },
    }
})();







//ui controlles
let UiControlles = (function(){


    return{
        // todo page
        showAddToDoPage : function(){
            document.getElementById('addtodopage').classList.remove('hidden')
            document.getElementById('addtodopage').classList.add('flex')
            // add blue in backgorund addtodopage
            document.getElementById('maintodo').classList.add('blur-md')
        },
        hiddenAddToDoPage : function(){
            document.getElementById('addtodopage').classList.remove('flex')
            document.getElementById('addtodopage').classList.add('hidden')
            // remove blue in backgorund addtodopage
            document.getElementById('maintodo').classList.remove('blur-md')
        },
        showToDoTools : function(){
            if(event.target.tagName === "DIV"){
                document.getElementById('todo-tools').classList.add('lg:left-[1px]')
            } 
        },
        hiddenToDoTools: function() {
            if (event.target.tagName !== "DIV") {
                document.getElementById('todo-tools').classList.remove('lg:left-[1px]');   
            }
        }
    }
})();






// global app controller
let globalAppController = (function(BudgetCtrl , UiCtrl){

    const newTaskBtn = document.getElementById('newTask');
    const addToDoBtn = document.getElementById('addtodopageBTN');
    const todoBox = document.getElementById('todo-box');



    // when btn new task clicked
    newTaskBtn.addEventListener('click' , function(){
        // show addtodopage
        UiCtrl.showAddToDoPage();
        // input field clear
        BudgetCtrl.clearIputValueField();
    }) 


    // when btn add todo clicked
    addToDoBtn.addEventListener('click' , function(){
        // hidden the addtodopage
        UiCtrl.hiddenAddToDoPage();
        // show new todo to the ui
        BudgetCtrl.userToDoListName();
    })

    // show tools
    todoBox.addEventListener('mouseover', function() {
        UiCtrl.showToDoTools();
    });
    // hide tools
    todoBox.addEventListener('mouseleave', function() {
        UiCtrl.hiddenToDoTools();
      });



    
    


    
    


})(BudgetControlles , UiControlles);










  


