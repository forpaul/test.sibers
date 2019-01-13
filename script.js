var request = new XMLHttpRequest();

  request.open('GET', 'users.json')
  request.onreadystatechange = function(){
      if ((request.readyState==4) && (request.status==200))
        var items=JSON.parse(request.responseText);
        var output = '<ul>';
        for (var key in items){
          output += '<li>' + items[key].name + '</li>';
        }
        output += '</ul>'
        document.getElementById('fullinfo').innerHTML = output;
  }
  request.send();