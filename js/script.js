const sortBtns = document.querySelectorAll(".job_id > *");

const sortItems = document.querySelectorAll(".jobs_container > *");

sortBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    sortBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    const targetData = btn.getAttribute("data-target");

    sortItems.forEach((item) => {
      item.classList.add("delete");
      if (item.getAttribute("data-item") === targetData || targetData ==="all") {
        item.classList.remove("delete");
      }
    });
  });
});
