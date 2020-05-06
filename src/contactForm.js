window.addEventListener('DOMContentLoaded', function() {

    const $form = document.querySelector('#my-form');

    function success() {
        $form.reset();
        alert('Mensagem enviada com sucesso !!!');
    }
    
    function error() {
        alert("Opsss!! Houve um erro ao enviar sua mensagem, Tente novamente");
    }

    $form.addEventListener('submit', function(event) {
        event.preventDefault();
        let data = new FormData($form);
        ajax($form.method, $form.action, data, success, error);
    })
})

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}