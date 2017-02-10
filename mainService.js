angular.module('userProfiles')
.service('mainService', function() {

  const data = [
    {
        "id": 0,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        "isFavorite": false
    },
    {
        "id": 1,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        "isFavorite": false
    },
    {
        "id": 2,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
        "isFavorite": false
    }
  ]



  this.getUsers = function(){
    // return copy
    return data.slice();
  }

  this.toggleFavorite = function(userId){
    // update data here in service
    const found = data.find(item => item.id === userId);
        data.forEach(item => {
        if(item.id === userId) {
          item.isFavorite = !item.isFavorite;
        }
          return item;

      });
      return data.slice();
  }
});
