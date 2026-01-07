const toggle = document.getElementById("darkToggle");

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "mode",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
};
