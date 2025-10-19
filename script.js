import { db, ref, set } from "./firebase.js";

const btn = document.getElementById("saveBtn");
btn.addEventListener("click", () => {
    set(ref(db, "users/001"), {
        name: "Yuneth",
        role: "Vice President - AWS Cloud Club"
    })
        .then(() => alert("Data saved successfully!"))
        .catch((error) => alert("Error: " + error));
});
