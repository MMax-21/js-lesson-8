function createColorButtons (data, container) {
    for (let row = 0; row < data.length; row++) {
        const cells = data[row];
        const rowComponent = document.createElement('div');
        rowComponent.className = 'row';
        container.appendChild(rowComponent);
        for (let cellId = 0; cellId < cells.length; cellId++) {
            const button = document.createElement('button');
            button.className = 'btn';
            button.style.backgroundColor = cells[cellId].color;
            button.innerText = cells[cellId].name;
            rowComponent.appendChild(button);


            button.addEventListener('mouseenter', function() {
                colorField.style.backgroundColor = cells[cellId].color;
            })
            button.addEventListener('mouseleave', function() {
                colorField.style.backgroundColor = '#ffffff';
        
            })
        
        }

    }
}

createColorButtons(panelsColor, btnsContainer);