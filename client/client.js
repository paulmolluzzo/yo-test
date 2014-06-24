Template.home.events({
    'click #yo': function(){
        var yoKey = document.getElementById('api-key').value;
        if (yoKey.length > 1) {
            Meteor.call('yoAll', yoKey, function(err, result){
                if(!err){
                    if (result.data.result == "OK") {
                        $('#yo').html('Yo Sent!')
                    } else {
                        alert('Something went wrong. Try again.')
                    }
                } else {
                    alert('Something went wrong. Try again.')
                }
            });
        } else {
            alert('You need to enter an API Key');
        }
    }
})