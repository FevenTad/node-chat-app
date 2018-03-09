class Users{
    constructor(){
        this.users = [];
    }
    // this.users is the original array of users 
    addUser(id, name, room){
        var user = {id,name,room};
        this.users.push(user);  
        return user;
    }
    getUsersList(room){
        var users = this.users.filter((user)=>{
            return user.room === room;   //takes the user and if the comparison is true user will be added to users
        });
        var nameArr = users.map((user)=>{
                return user.name;
        });
        return nameArr;
    }
    getUser(id){
        var userArr = this.users.filter((user)=>{
            return user.id === id;
        });
        var user = userArr[0];
        return user;
    }
    removeUser(id){
          var user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user)=>{
                return user.id !== id;
            });
       }
        return user;
    }
    
}
module.exports = {Users}