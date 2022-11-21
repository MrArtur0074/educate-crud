let promise = fetch('https://637b086a702b9830b9f82da4.mockapi.io/api/v1/todolist/1/cards');

promise.then(answer => {
    return answer.json();
}).then(json => {
    console.log(json);
    json.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('card');
        console.log(element)
        div.innerHTML = `
        <div class="title">
            <input type="text" name="title" value="${element.title}">
        </div>
        <div class="description">
            <textarea name="description"cols="30" rows="10">${element.description}</textarea>
        </div>
        `;
        document.querySelector('.cards').append(div);
    });
});

let exit = document.querySelector('.exit');

exit.addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
}); 

document.querySelector('.newcard').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'flex';
}); 

document.getElementById('create').addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(document.getElementById('create'));

    let errors = false;
    let data = {};

    formData.forEach((element, key, array) => {
        if (element.length < 3)
            errors = true;
        
        data[key] = element;
    });
    data['todolistId'] = 1;

    console.log(data)

    fetch('https://637b086a702b9830b9f82da4.mockapi.io/api/v1/todolist/1/cards',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(responce => {
        console.log(responce);
    });

    if (errors) {
        document.getElementById('create').style.border = '1px solid red';
    } else {

    }
}); 