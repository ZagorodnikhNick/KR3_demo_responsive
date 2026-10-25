// Открытие нативного HTML-диалога (<dialog>) через метод showModal().
// showModal() добавляет элемент на верхний слой (top layer) — поверх
// любого контента, включая position: fixed. Фокус автоматически
// переходит внутрь диалога (на первый focusable-элемент или autofocus).
const dialog = document.querySelector("#quick-dialog");
const openDialogButton = document.querySelector("[data-open-dialog]");

if (dialog && openDialogButton) {
  openDialogButton.addEventListener("click", () => {
    dialog.showModal();
  });
}
