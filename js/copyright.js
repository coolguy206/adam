export function copyright() {
    let date = new Date();
    document.getElementById("copyright").textContent = date.getFullYear();
};