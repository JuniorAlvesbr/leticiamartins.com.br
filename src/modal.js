function activeModal() {
  const $modal = document.querySelector('[data-modal="modal"]');
  const $modalSmall = document.querySelector('[data-modal="modal-small"]');
  $modal.classList.toggle("-active");
  $modalSmall.classList.toggle("-active");
}
