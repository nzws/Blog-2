const content = document.getElementById("page");

const onLoad = async () => {
    const content_data = await fetch("/content.json").then(resp => resp.json());

    const number = location.href.slice(-9).slice(0, 4);
    const i = Number(number);
    const n = content_data.length - i - 1;

    const page = document.createElement("div");
    page.className = "page";

    const ribbon = document.createElement("span");
    ribbon.className = "ribbon";
    ribbon.innerHTML = number;

    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = content_data[n].title;

    const description = document.createElement("div");
    description.className = "description";
    description.innerHTML = content_data[n].description;

    const categorys = document.createElement("div");
    categorys.className = "category";
    for (let a in content_data[n].category) {
        const category = document.createElement("div");
        category.innerHTML = content_data[n].category[a];
        categorys.appendChild(category);
    }

    const date = document.createElement("div");
    date.className = "date";
    date.innerHTML = content_data[n].date;

    page.appendChild(ribbon);
    page.appendChild(title);
    page.appendChild(description);
    page.appendChild(categorys);
    page.appendChild(date);
    content.prepend(page);

    const number_next = (Number(number) + 1).toString().padStart(4, "0");
    const number_prev = (Number(number) - 1).toString().padStart(4, "0");

    const menu = document.createElement("div");
    menu.className = "menu";

    const page_next = document.createElement("a");
    page_next.className = "button";
    if (i !== content_data.length - 1) {
        page_next.href = `/content/${number_next}.html`;
    } else {
        page_next.className = "button dont";
    }
    page_next.innerHTML = "次の記事";

    const page_list = document.createElement("a");
    page_list.className = "button";
    page_list.href = "/index.html";
    page_list.innerHTML = "記事一覧";

    const page_prev = document.createElement("a");
    page_prev.className = "button";
    if (i !== 0) {
        page_prev.href = `/content/${number_prev}.html`;
    } else {
        page_prev.className = "button dont";
    }
    page_prev.innerHTML = "前の記事";

    menu.appendChild(page_next);
    menu.appendChild(page_list);
    menu.appendChild(page_prev);
    content.prepend(menu);
    content.appendChild(menu.cloneNode(true));
};

window.onload = onLoad;
