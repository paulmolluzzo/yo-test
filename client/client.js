Template.home.events({
    'click #yo': function(){
        var yoKey = document.getElementById('api-key').value;
        Meteor.call('yoAll', yoKey, function(err, result){
            if(!err){
                console.log(result);
            } else {
                console.error(err)
            }
        });
    }
})