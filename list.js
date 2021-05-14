const content = document.getElementById("list");

const onLoad = async () => {
    const content_data = await fetch("/content.json").then(resp => resp.json());
    for (let i in content_data) {
        const n = content_data.length - i - 1;
        const number = n.toString().padStart(4, "0");

        const page = document.createElement("a");
        page.className = "page button";
        page.id = `page-${number}`;
        page.href = `/content/${number}.html`;

        const ribbon = document.createElement("span");
        ribbon.className = "ribbon";
        ribbon.innerHTML = number;

        const title = document.createElement("div");
        title.className = "title";
        title.innerHTML = content_data[i].title;

        const description = document.createElement("div");
        description.className = "description";
        description.innerHTML = content_data[i].description;

        const categorys = document.createElement("div");
        categorys.className = "category";
        for (let a in content_data[i].category) {
            const category = document.createElement("div");
            category.innerHTML = content_data[i].category[a];
            categorys.appendChild(category);
        }

        const date = document.createElement("div");
        date.className = "date";
        date.innerHTML = content_data[i].date;

        page.appendChild(ribbon);
        page.appendChild(title);
        page.appendChild(description);
        page.appendChild(categorys);
        page.appendChild(date);
        content.appendChild(page);
    }
};

const category_data = ["全て", "日記", "備忘録"];
const category_flag = [1, 0, 0];

const category = document.createElement("div");
category.className = "category";
for (let i in category_data) {
    const tab = document.createElement("div");
    if (category_flag[i] === 0) {tab.className = "tab";}
    if (category_flag[i] === 1) {tab.className = "tab active";}
    if (category_flag[i] === 2) {tab.className = "tab dont";}
    tab.id = `tab-${i}`;
    tab.onclick = function() {
        setCategory(i);
    };
    tab.innerHTML = category_data[i];

    category.appendChild(tab);
}
content.appendChild(category);

function setCategory(a) {
    let requestURL = "/content.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        if (category_flag[a] !== 2) {
            const content_data = request.response;
            for (let i in content_data) {
                const n = content_data.length - i - 1;
                const number = n.toString().padStart(4, "0");
                const page = document.getElementById(`page-${number}`);
                if (a == 0) {
                    page.className = "page button";
                } else {
                    const isYes = content_data[i].category.includes(category_data[a]);
                    page.className = `page button ${isYes ? "" : "null"}`;
                }
            }
            for (let i in category_data) {
                const tab = document.getElementById(`tab-${i}`);
                if (a == i) {
                    tab.className = "tab active";
                } else {
                    if (category_flag[i] !== 2) {tab.className = "tab";}
                }
            }
        }
    };
};

window.onload = onLoad;
