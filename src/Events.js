/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');

    function removeOnClick(ev) {
        document.body.removeChild(button);
    }

    button.innerHTML = 'Удали меня';
    button.addEventListener('click', removeOnClick);

    document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    for (const key in arr) {
        const item = arr[key];
        const listItem = document.createElement('li');
        listItem.innerHTML = item;
        list.appendChild(listItem);
    }

    function onClickToItem(ev) {
        if (!(ev.target && ev.target.nodeName === 'LI')) return;
        ev.target.setAttribute('title', ev.target.textContent);
    }

    list.addEventListener('mouseover', onClickToItem);

    document.body.appendChild(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    const href = 'https://tensor.ru/';

    link.setAttribute('href', href);
    link.textContent = 'tensor';

    function onClick(ev) {
        if (!link.textContent.includes(href)) {
            ev.preventDefault();
            link.textContent += ` ${href}`;
        }
    }

    link.addEventListener('click', onClick);
    document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const list = document.createElement('ul');
    const defaultItemContent = 'Пункт';
    addListItem(list, defaultItemContent);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    button.addEventListener('click', (ev) => {
        addListItem(list, defaultItemContent);
    });

    list.addEventListener('click', (ev) => {
        if (!(ev.target && ev.target.nodeName === 'LI')) return;
        ev.target.textContent += '!';
    });

    document.body.appendChild(list);
    document.body.appendChild(button);
}

function addListItem(list, textContent) {
    const item = document.createElement('li');
    item.textContent = textContent;
    list.appendChild(item);
}
