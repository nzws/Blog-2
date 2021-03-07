const content = document.getElementById("list");

const onLoad = async () => {
    const content_data = await fetch("/content.json").then(resp => resp.json());
    for (let i in content_data) {
        const n = content_data.length - i - 1;
        const number = n.toString().padStart(4, "0");

        const page = document.createElement("a");
        page.className = "page button";
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

        const date = document.createElement("div");
        date.className = "date";
        date.innerHTML = content_data[i].date;

        page.appendChild(ribbon);
        page.appendChild(title);
        page.appendChild(description);
        page.appendChild(date);
        content.appendChild(page);
    }
};

window.onload = onLoad;
