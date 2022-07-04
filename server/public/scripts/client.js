//document.ready
$(ready);

//ready function
function ready() {
    console.log('jQuery works!');
    //GET tasks
    refresh();
    //handle all the click events
    addClickHandlers();
}

//click handler
function addClickHandlers() {
    //POST task
    $('body').on('click', add);
    //DELETE task
    $(document).on('click', '.delete', deleteTask);
    //PUT task
    $(document).on('click', '.edit', update);
}

// GET
function refresh() {
    $.ajax({
        type: 'GET',
        url: '/tasks',
    })
        .then(function (tasks) {
            console.log(`GET RES:`, tasks);
            render(tasks);
        })
        .catch(function (error) {
            console.log('Error in GET', error);
        });
    clearInputs();
}

// Render to DOM
function render(array) {
    //empty the table
    $('body').empty();
    //loop through array of objects and render each object
    for (let i = 0; i < array.length; i += 1) {
        let obj = array[i];
        // For each obj, append a new row to our table
        $('body').append(`<li>${obj}</li>`);
    }
    clearInputs();
}

//POST
function add() {
    //check if task is empty
    if (!task.task) {
        alert(`Please enter a task!`);
    } else {
        //SEND TO SERVER
        $.ajax({
            type: 'POST',
            url: '/tasks',
            //pass your inputs as object into data
            data: {
                // task: $('WHATEVER your input id/class is').val(),
            },
        })
            .then(function (task) {
                console.log('POST RES:', task);
                refresh();
            })
            .catch(function (error) {
                console.log('CLIENT ERROR in POST', error);
            });
    }
}

// DELETE
function deleteTask() {
    let taskId = $(this).data('id');
    $.ajax({
        method: 'DELETE',
        url: `/tasks/${taskId}`,
    })
        .then(function (tasks) {
            console.log('CLIENT DELETED:', tasks);
            refresh();
        })
        .catch(function (error) {
            alert('CLIENT ERROR in DELETE:', error);
        });
}

// PUT
function checkTask() {
    let taskId = $(this).data('id');
    // let status = $(this).data('status');
    $.ajax({
        method: 'PUT',
        url: `/tasks/${taskId}`,
        // data: { status: status },
    })
        .then(function (tasks) {
            refresh();
        })
        .catch(function (error) {
            alert('CLIENT ERROR in PUT:', error);
        });
}

// CLEAR
function clearInputs() {
    $('input').val('');
}
