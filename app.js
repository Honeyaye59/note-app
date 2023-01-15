const inputEl = document.getElementById("input-el");
const orderList = document.getElementsByClassName("order-list")[0];
const handleChange = (event) => {
    const inputValue = event.target.value;
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.append(inputValue);
    orderList.append(listItem);
    inputEl.value = "";
}
inputEl.addEventListener("change",handleChange);