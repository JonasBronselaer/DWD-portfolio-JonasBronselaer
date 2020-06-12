(function() {
    'use strict';

    window.addEventListener('load', function() {
        let frmSearch = document.querySelector('#frmSearch');
        let inpArtist = frmSearch.querySelector('#inpArtist');
        let btnSearch = frmSearch.querySelector('#btnSearch');
        let table = document.querySelector('#songs');
        let tBody = document.querySelector('#results tbody');
        let message = document.querySelector('.message');
        let spinner = document.querySelector('#spinner');

        function handleResults(data){
            message.innerHTML = data.length + ' result(s) found';
            spinner.classList.add('hidden');
            table.classList.remove('hidden');
            let html = "";

            for (let row of data) {
                html += '<tr>' + '<td>' + row.title
                 + '</td>' + '<td>' + row.artist.name
                  + '</td>' + '<td>' + row.tabTypes
                   + '</td>' + '</tr>';
            }
            tBody.innerHTML = html;
        }

        frmSearch.addEventListener('submit', function(e){
            e.preventDefault();
            spinner.classList.remove('hidden');
            let searchVal = inpArtist.value;
            let url = `http://www.songsterr.com/a/ra/songs/byartists.json?artists=${searchVal}`;
            fetch(url)
                .then(function(resp){
                    return resp.json();
                })
                .then(function handleSucces(data){
                    handleResults(data);
                    console.log('data received: ', data);
                })
                .catch(function(err){
                    console.log('request failed', err)
                });
        });
    });
})();


/*let url = 'https://www.songsterr.com/a/ra/songs/byartists.json?artists=%22powerwolf"';
let table = document.querySelector('#songs');
//append parameters
let params = new URLSearchParams();
POWERWOLF POG EZAEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZEZE POWERWOLLLLLLFFFFF
fetch(url)
  // handle response
  .then(function(resp) {
      console.log('response status: ', resp.status);
      return resp.json();
  })
  // handle response data
  .then(function handleSuccess(data) {
      console.log('data received: ', data);
      table.classList.remove('hidden');
      
  })
  // catch errors
  .catch(function(err) {
      console.log('request failed: ', err)
  });*/
  
