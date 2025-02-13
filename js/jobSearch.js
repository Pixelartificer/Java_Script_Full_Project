const catagories = Array.from(jCatagory);

document.getElementById("searchBar").addEventListener("keyup", (e)=>{
    const searchData = e.target.value.toLowerCase();
    const fileteData = catagories.filter((item) =>
        item.title.toLowerCase().includes(searchData)
    );
    displayItems(fileteData);
})




const displayItems = (items) => {
  const rootElement = document.getElementById("root");
  rootElement.innerHTML = "";

  items.forEach((item) => {
    const { index, image, title, rate, av } = item;
    const jList = document.createElement("div");
    jList.className = "jList";
    jList.innerHTML = `<img src="${image}" alt="${image}">
        <h3>${title}</h3>
        <p>${rate}</p>
        <span id="key">${av}</span>`;

        rootElement.appendChild(jList);

        jList.addEventListener("click", ()=>{
            window.location.href = `./JobsDetails.html?id=${index}`;
        })
  });
};

displayItems(catagories);
