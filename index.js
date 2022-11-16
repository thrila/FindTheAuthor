// https://openlibrary.org/search/authors.json?q=mark%20manson
const Key = document.getElementById('key');
const AuthorName = document.getElementById('author-name');
const TopWork = document.getElementById('top-work');
const WorkCount = document.getElementById('work-count');
const Unordered = document.querySelector('.list');
const Btn = document.getElementById('button');
let Input = document.getElementById('input');


Btn.addEventListener("click", AuthorNam);



async function AuthorNam (){
    const string = Input.value;
    string.replace(" ","%20");
    const Url = `https://openlibrary.org/search/authors.json?q=${string}`
    const response = await fetch(Url);
    const data = await response.json()
    const {key,name,top_subjects ,top_work,work_count}=data.docs[0]
    Key.innerText = key;
    AuthorName.innerText = name;
    TopWork.innerText = top_work;
    WorkCount.innerText= work_count
    top_subjects.map((subject)=> {
        console.log(subject);
        const List = document.createElement('li');
        List.classList.add("list-el")
        List.innerText= subject;
        Unordered.appendChild(List)
    });
}
