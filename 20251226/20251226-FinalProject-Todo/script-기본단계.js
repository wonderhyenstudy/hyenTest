const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

btn.addEventListener('click', function () {
    const todo = input.value;
    if (todo === "") {
        alert('할 일을 입력해 주세요.');
        return;
    };

    //삭제하는 2가지 방법

    //1. 쉬운방법 : 하지만, 성능상 문제. 전부 다 지우고 다시 그리는 문제
    // list.innerHTML += `<li>${todo}<button onclick="this.parentElement.remove()"  class="bg-green-600 text-white p-1 pl-2 pr-2 text-sm font-bold">삭제</button></li>`;

    //2. 안정적인 방법 : 요소 하나씩 붙이는 방식. 성능상 좋은 방법  
    const li = document.createElement('li');//없는것 생성한다
    li.textContent = todo;

    const btn = document.createElement('button');
    btn.textContent = '삭제';

    btn.addEventListener('click', function () {
        this.parentElement.remove();
    });

    li.appendChild(btn);
    list.appendChild(li);

    li.classList.add('mb-1');
    btn.classList.add('bg-red-600', 'text-white', 'px-2', 'py-1', 'rounded', 'ml-4');





    //input 내용 없애기. 리셋
    input.value = "";




});