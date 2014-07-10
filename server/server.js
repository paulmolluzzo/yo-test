Meteor.methods({
    yoAll: function(key){
        var yo = new yoAPI(key);
        return yo.all()
    },
    yoOne: function(key, user) {
        var yo = new yoAPI(key);
        return yo.one(user)
    },
    yoSubscribers: function(key){
        var yo = new yoAPI(key);
        return yo.subscribers()
    }
});