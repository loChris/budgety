// BUDGET CONTROLLER
var budgetController = (function() {
    // some code
})();
//END BUDGET CONTROLLER


// UI CONTROLLER
var UIController = (function() {
    //some code
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either income or expenses
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();
//END UI CONTROLLER


// GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
         // 1. Get the filled input data
         var input = UICtrl.getInput();
         console.log(input);

        // 2. Add item to budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5 Display the budget in the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    });
})(budgetController, UIController);
//END GLOBAL CONTROLLER
