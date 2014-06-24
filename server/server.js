Meteor.methods({
    yoAll: function(yoKey){
        var yo = new yoAPI(yoKey);
        return yo.all()
    }
});