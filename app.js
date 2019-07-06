// BUDGET CONTROLLER
var budgetController = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            allExpenses: [],
            allIncomes: []
        },
        totalExpenses: {
            expenses: 0,
            incomes: 0
        }
    }
})();
//END BUDGET CONTROLLER


// UI CONTROLLER
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either income or expenses
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();
//END UI CONTROLLER


// GLOBAL CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };
    var ctrlAddItem = function () {
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add item to budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5 Display the budget in the UI

    };
    return {
        init: function () {
            console.log('app has started');
            setupEventListeners();
        }
    };
})(budgetController, UIController);
//END GLOBAL CONTROLLER

controller.init();