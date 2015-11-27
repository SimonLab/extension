(function () {

  var incrButton = document.getElementsByClassName('incr-button')[0];
    incrButton.addEventListener('click', function (e){
      e.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://simplegm.herokuapp.com/click');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          if (xhr.responseText === '200') {
            console.log('yeaaaa')
          }
          console.log(xhr.responseText);
        }
      };

      xhr.send(null);
    }, false);

})();
