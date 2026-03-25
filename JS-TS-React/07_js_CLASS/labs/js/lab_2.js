import { backupRepo, notify } from "./utils.js";
const items = document.getElementById("items");
const removeBackup = document.getElementById("remove-backup");

const ob = {
  backupArr: [],
  handleClick({ target }) {
    switch (target.id) {
      case "backup":
        this.backup();
        break;
      case "restore":
        this.restore();
        break;
    }
  },

  backup() {
    const arr = [...items.querySelectorAll("a")].map((item) => ({
      href: item.href,
      content: item.textContent,
    }));
    backupRepo.set(arr, "backup");
    notify.show("backup has created");
  },
  restore() {
    if (!backupRepo.has("backup")) {
      notify.show("Restore is not possible", {
        bgClass: "alert-danger",
        delay: 4000,
      });
    }
    const arr = backupRepo.get("backup");
    items.innerHTML = arr
      .map(
        (item) => `<li class="item list-group-item">
              <a href="${item.href}" target="_blank">${item.content}</a>
            </li>`
      )
      .join("");
    notify.show("Items was restored");
    if (removeBackup.checked) {
      backupRepo.delete("backup");
      notify.show("backup has been deleted", {
        bgClass: "alert-danger",
        delay: 5000,
      });
      removeBackup.checked = false;
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    const { target } = e;
    if (target.name !== "myform") {
      return;
    }
    if (!backupRepo.has("backup")) {
      notify.show("backup is empty", { bgClass: "alert-danger" });
      return;
    }
    const newText = target.newtext;
    if (!newText.value.trim()) {
      notify.show("Fill field text", { bgClass: "alert-success" });
      return;
    }

    let isChanged = false;
    [...items.querySelectorAll("a")].some((item) => {
      if (item.dataset.changed !== "1") {
        item.dataset.changed = "1";
        item.textContent = newText.value.trim();
        isChanged = true;
        return true;
      }
    });
    if (!isChanged) {
      notify.show("No empty slots for changed");
    }
    newText.value = "";
  },
};

document.addEventListener("click", ob.handleClick.bind(ob));
document.addEventListener("submit", ob.handleSubmit.bind(ob));
