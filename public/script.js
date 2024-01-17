$(document).ready(function(){















  $('#repos_button').click(function(){

                  var githubUsername=$('#githubUsername').val();

              $.ajax({
                  url: 'https://api.github.com/users/'+githubUsername+'/repos',
                  method: 'GET',
                  success: function(data) {
                    console.log(data);
                    $('#repoTableBody').empty();

                    for(i=0;i<data.length;i++){
                      var repo=data[i];
                      var repoName=repo.name;
                      var repoDescription=repo.desciption || 'No description';
                      var repoFollowers=repo.watchers_count;
                      var newRow = '<tr><td>' + repoName + '</td><td>' + repoDescription + '</td><td>' + repoFollowers + '</td></tr>';
                      $('#repoTableBody').append(newRow);
                    }
                  },
                  error: function(error) {
                    // Maneja los errores aquí
                    console.log('Error',error);
                  }
                });



  });

});