//contains common js functions

//toggle columns to be editable
export const toggleEditable=(classButtons)=>{
    Array.from(classButtons).forEach(function (button) {
        button.addEventListener('click', function () {
            const row = button.closest('tr');
            const editableCells = row.querySelectorAll('.editable');

            editableCells.forEach(function (cell) {
                toggleEditable(cell);
            });
        });
    });
    function toggleEditable(cell) {
        const field = cell.dataset.field;

        if (cell.querySelector('input')) {
            // If an input field is present, switch back to text
            const inputValue = cell.querySelector('input').value;
            cell.innerHTML = inputValue;
        } else {
            // If no input field is present, switch to input
            const currentValue = cell.textContent;
            cell.innerHTML = `<input type="text" name="${field}" id="${field}" value="${currentValue}">`;
        }
    }
}