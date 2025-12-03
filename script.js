// Переключение вкладок
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Чекбоксы
document.querySelectorAll(".checkbox").forEach(box => {
  box.addEventListener("click", () => {
    box.classList.toggle("checked");
  });
});
