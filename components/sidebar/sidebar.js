export function createSideBar(floors) {
    // cons & vars
    const topIcon = document.getElementById("top-icon");
    const closeSidebar = document.querySelector(".close-sidebar");
    const sideBar = document.querySelector(".sidebar");

    // functions
    const floorLinks = document.getElementById("floorLinks");

    floors.forEach((floorItem) => {
        const a = document.createElement("a");
        a.href = `#${floorItem.floorId}`;
        a.textContent = floorItem.floorId;

        a.addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById(floorItem.floorId)?.scrollIntoView({ behavior: "smooth" });
            sideBar.classList.remove("sidebar-active");
        });

        const li = document.createElement("li");
        li.append(a);
        floorLinks.append(li);
    });

    const dataBtn = document.createElement("a");
    dataBtn.textContent = "ازرار البيانات";
    dataBtn.id = "ازرار البيانات";

    dataBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("controllers")?.scrollIntoView({ behavior: "smooth" });
        sideBar.classList.remove("sidebar-active");
    });

    const btnLi = document.createElement("li");
    btnLi.append(dataBtn);
    floorLinks.append(btnLi);

    topIcon.addEventListener("click", () => {
        sideBar.classList.add("sidebar-active");
    });

    closeSidebar.addEventListener("click", () => {
        sideBar.classList.remove("sidebar-active");
    });

}
