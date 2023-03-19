// Dudget controlles
let BudgetControlles = (function(){

    //the new todo html
    let newToDoHTML = '<div id="todo %uniqID%" class="flex items-center justify-between my-1 bg-white dark:bg-blue-500 px-8 py-4 overflow-x-hidden"><div class="title flex items-center"><div id="active-todolist" class="cursor-pointer w-[15px] h-[15px] bg-white dark:bg-transparent border-2 border-solid border-indigo-400 dark:border-white rounded-lg"></div><h2 class="capitalize text-indigo-400 dark:text-white ml-4 cursor-default">%userInput%</h2></div><div id="tools-parent" class="tools transition-all ease duration-300"><i id="todo-tools" class="bi bi-trash3 cursor-pointer text-indigo-400 dark:text-white"></i></div></div>'
    let ID = 0;


    return{
        userToDoListName : function(){
            // get input value
            let userInput = document.getElementById('addtodopageinput').value;

            if(userInput.length > 0){
                let newHTML =  newToDoHTML.replace('%userInput%' , userInput) ;
                let newToDoHtml =  newHTML.replace('%uniqID%' , this.IdMaker()); ;
                document.getElementById('todo-box').insertAdjacentHTML('beforeend' , newToDoHtml);  
            }
        },
        clearIputValueField : function(){
            let userInput = document.getElementById('addtodopageinput').value = "";
        },
        IdMaker : function(){
            return "todo_" + ID++;
        }
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

        // delete btn
        DeleteBtn: function() {
            if (event.target.tagName === "I") {
                let deleteItem = event.target.parentNode.parentNode.id;
                let elementToDelete = document.getElementById(deleteItem);
                elementToDelete.parentNode.removeChild(elementToDelete);
             } 
          }
        // edit btn



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

    // delete icon
    todoBox.addEventListener('click' , function(){
        UiCtrl.DeleteBtn();
    });
    



    
    


    
    


})(BudgetControlles , UiControlles);









  

