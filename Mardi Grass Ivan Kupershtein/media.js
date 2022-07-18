var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var img = event.relatedTarget.src
  exampleModal.getElementsByTagName("img")[0].src=img
})