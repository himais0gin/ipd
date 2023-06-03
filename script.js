const menuItems = document.querySelectorAll("#menu li");
const content = document.getElementById("content");

function openMusic() {
  content.innerHTML = "Music content goes here";
  content.classList.add("visible");
}

function openVideos() {
  content.innerHTML = "Videos content goes here";
  content.classList.add("visible");
}

function openPhotos() {
  content.innerHTML = "Photos content goes here";
  content.classList.add("visible");
}

function openSettings() {
  content.innerHTML = "Settings content goes here";
  content.classList.add("visible");
}

function selectItem() {
  const selectedItem = document.querySelector("#menu li.selected");
  if (selectedItem) {
    const itemName = selectedItem.innerText;
    switch (itemName) {
      case "Music":
        openMusic();
        break;
      case "Videos":
        openVideos();
        break;
      case "Photos":
        openPhotos();
        break;
      case "Settings":
        openSettings();
        break;
    }
  }
}

function previousItem() {
  const selectedItem = document.querySelector("#menu li.selected");
  if (selectedItem) {
    selectedItem.classList.remove("selected");
    const previousItem = selectedItem.previousElementSibling;
    if (previousItem) {
      previousItem.classList.add("selected");
    } else {
      const lastItem = document.querySelector("#menu li:last-child");
      lastItem.classList.add("selected");
    }
  } else {
    const firstItem = document.querySelector("#menu li:first-child");
    firstItem.classList.add("selected");
  }
}

function nextItem() {
  const selectedItem = document.querySelector("#menu li.selected");
  if (selectedItem) {
    selectedItem.classList.remove("selected");
    const nextItem = selectedItem.nextElementSibling;
    if (nextItem) {
      nextItem.classList.add("selected");
    } else {
      const firstItem = document.querySelector("#menu li:first-child");
      firstItem.classList.add("selected");
    }
  } else {
    const firstItem = document.querySelector("#menu li:first-child");
    firstItem.classList.add("selected");
  }
}

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const selectedItem = document.querySelector("#menu li.selected");
    if (selectedItem) {
      selectedItem.classList.remove("selected");
    }
    item.classList.add("selected");
  });
});
