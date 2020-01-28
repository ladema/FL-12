let _root = document.getElementById('root');
let _list = [];
let done_list = [];
if(localStorage.getItem('list')) {
    _list = JSON.parse(localStorage.getItem('list'));
}
if(localStorage.getItem('readyList')) {
    done_list = JSON.parse(localStorage.getItem('readyList'));
}
let page = getHashData('page');
function create_page() {
    let main = document.createElement('div');
    main.appendChild(_header());
    main.appendChild(create_list());
    _root.appendChild(main);
}
if(!page) {
    create_page();
}
function _header() {
    let header = document.createElement('div');
    let _button = document.createElement('button');
    header.classList.add('header');
    _button.innerText = 'Add new';
    _button.classList.add('header_button', '_button');
    _button.addEventListener('click', () => {
        location.hash = '/addSet';
    });
    header.appendChild(_button);
    return header;
}
function create_list() {
    let o_list = document.createElement('ol');
    o_list.classList.add('list');
    const createItem = (set, status = null) => {
        let ol_child = document.createElement('li');
        ol_child.classList.add('list_item');
        let text = document.createElement('p');
        text.innerText = `${set.term}-${set.description}`;
        ol_child.appendChild(text);
        let button_ = document.createElement('div');
        ol_child.appendChild(button_);
        let edit_button = document.createElement('button');
        edit_button.innerText = 'Edit';
        edit_button.classList.add('edit_btn', 'btn');
        edit_button.addEventListener('click', (event) => {
            event.stopPropagation();
            location.hash = `/modify/: ${set.id}`;
        });
        button_.appendChild(edit_button);
        let remove_button = document.createElement('button');
        remove_button.innerText = 'Remove';
        remove_button.classList.add('remove_btn', 'btn');
        remove_button.addEventListener('click', (event) => {
            event.stopPropagation();
            _list = _list.filter(item => item.id !== set.id);
            done_list = done_list.filter(item => item.id !== set.id);
            saveToStorage();
            goToPage('main');
        });
        button_.appendChild(remove_button);
        if(status) {
            ol_child.classList.add(status);
        } else {
            ol_child.addEventListener('click', () => {
                done_list.push(set);
                _list = _list.filter(item => item.id !== set.id);
                saveToStorage();
                goToPage('main');
            });
        }
        return ol_child;
    };
    _list.forEach(set => {
       o_list.appendChild(createItem(set));
    });
    done_list.forEach(set => {
        o_list.appendChild(createItem(set, 'ready'));
    });
    return o_list;
}
function edit_page() {
    let page = getHashData('page');
    let identeficator = getHashData('identeficator');
    let edit_Page = document.createElement('div');
    edit_Page.classList.add('edit_Page');
    let term;
    let termInput = document.createElement('input');
    termInput.placeholder = 'Enter Term';
    if(page === 'modify') {
        term = getValue(identeficator, 'term');
        termInput.value = term;
    }
    termInput.addEventListener('input', (event) => {
        term = event.target.value;

    });
    edit_Page.appendChild(termInput);
    let description;
    let descriptionInput = document.createElement('input');
    descriptionInput.placeholder = 'Enter description';
    if(page === 'modify') {
        description = getValue(identeficator, 'description');
        descriptionInput.value = description;
    }
    descriptionInput.addEventListener('input', (event) => {
        description = event.target.value;
    });
    edit_Page.appendChild(descriptionInput);
    let save_button = document.createElement('button');
    save_button.innerText = 'Save Changes';
    save_button.classList.add('save_btn', 'btn');
    save_button.addEventListener('click', () => {
        if(term && description) {
            if(page === 'addSet') {
                _list.push({identeficator: getNewId(), term: term, description: description});
            } else if(page === 'modify') {
                _list = _list.map(item =>
                item.identeficator === identeficator?{identeficator:item.id,term:term,description:description}:item);
                done_list = done_list.map(item =>
                item.identeficator === identeficator?{identeficator:item.id,term:term,description:description}:item);
            }
            saveToStorage();
            location.hash = '';
        }
    });
    edit_Page.appendChild(save_button);

    let cancelBtn = document.createElement('button');
    cancelBtn.innerText = 'Cancel';
    cancelBtn.classList.add('cancel_btn', 'btn');
    cancelBtn.addEventListener('click', () => {
        location.hash = '';
    });
    edit_Page.appendChild(cancelBtn);

    _root.appendChild(edit_Page);
}
function getHashData(name) {
    let hash = location.hash.split('/');
    let one = 1;
    let two = 2;
    if(name === 'page') {
        return hash[one]? hash[one]: null;
    } else if(name === 'identeficator') {
        return hash[two]? Number(hash[two].slice(1)): null;
    }
}
function getValue(id, name) {
    let result;
    _list.forEach(item => {
        if(item.id === id) {
            result = item[name];
        }
    });
    done_list.forEach(item => {
        if(item.id === id) {
            result = item[name];
        }
    });
    return result;
}
function getNewId() {
    let id = 0;
    id = _list.reduce((max, item) => item.id > max? item.id: max, id);
    id = done_list.reduce((max, item) => item.id > max? item.id: max, id);
    return id + 1;
}
function saveToStorage() {
    localStorage.setItem('list', JSON.stringify(_list));
    localStorage.setItem('readyList', JSON.stringify(done_list));
}
function goToPage(page) {
    for(let i of _root.children) {
        _root.removeChild(i);
    }
    if(page === 'main') {
        create_page();
    } else if(page === 'edit_Page') {
        edit_page();
    }
}
window.addEventListener('hashchange', () => {
    let page = getHashData('page');
    if(!page) {
        goToPage('main');
    } else if (page === 'addSet'||page === 'modify') {
        goToPage('edit_Page');
    }
});