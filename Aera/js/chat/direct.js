export function initDirect() {
    leaveChatBtn();
    console.log("Direct chat initialised");
}
function leaveChatBtn(){
    const btn = document.getElementById("skipBtn");

    btn.textContent = "Leave";

    btn.onclick = ()=>{
        window.location.href = "menu.html";
    };
}