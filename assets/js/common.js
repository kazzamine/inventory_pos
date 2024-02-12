//contains common js functions

//toggle columns to be editable
export const toggleEditable=(classButtons)=>{
    let currentlyToggledRow = null;
    Array.from(classButtons).forEach(function (button) {
        button.addEventListener('click', function () {
            const row = button.closest('tr');
            const editableCells = row.querySelectorAll('.editable');
            const saveBtn=row.querySelector('.saveBtn')

            const isToggled = row.classList.contains('toggled');
            Array.from(document.querySelectorAll('.toggled')).forEach(function (toggledRow) {
                const toggledEditableCells = toggledRow.querySelectorAll('.editable');
                toggledEditableCells.forEach(function (cell) {
                    toggleEditable(cell);
                });
                toggleHiddenButton(saveBtn);
                toggledRow.classList.remove('toggled');
            });
            // Toggle the clicked row if it was not already toggled
            if (!isToggled) {
                editableCells.forEach(function (cell) {
                    toggleEditable(cell);
                });
                toggleHiddenButton(saveBtn);
                row.classList.add('toggled');
            }

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
            cell.innerHTML = `<input type="text" style="max-width: 100%;" name="${field}" id="${field}" value="${currentValue}">`;
        }
    }

}
export const toggleHiddenButton=(button)=> {
    if (button.style.display === 'none') {
        button.style.display = 'inline-block';
    } else {
        button.style.display = 'none';
    }
}

export const makeReadOnly=(input)=>{
    if(input.hasAttribute('readonly')){
        input.removeAttribute('readonly')
    }else {
        input.setAttribute('readonly',true)
    }
}