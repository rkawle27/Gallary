const works = {
    "task1" : {"title" : "Project 1", "url" : "works/task1/index.html"},
    "task2" : {"title" : "Project 2", "url" : "works/task2/index.html"},
    "task3" : {"title" : "Project 3", "url" : "works/task3/index.html"},
};

// write your code here 
// you need to display the list of work titles in a navigation panel 
// if a work title is clicked, the body section should display the work without reloading the page

const navDiv = document.getElementById("nav_div");

navDiv.innerHTML = "";
const ul = document.createElement("ul");

for (let key in works) {
    if (works.hasOwnProperty(key)) {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = works[key].url; 
        link.textContent = works[key].title;
        link.dataset.url = works[key].url;
        link.addEventListener("click", function (event) {
            event.preventDefault();
            document.getElementById("content_frame").src = this.dataset.url;
        });
        li.appendChild(link);
        ul.appendChild(li);
    }
}

navDiv.appendChild(ul);
