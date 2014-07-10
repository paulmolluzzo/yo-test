Template.home.events({
    'click #yoall': function(){
        var yoKey = document.getElementById('api-key').value;
        if (yoKey.length > 1) {
            Meteor.call('yoAll', yoKey, function(err, result){
                if(!err){
                    console.log(result);
                    if (result.statusCode == '201') {
                        $('#yoall').html('Yo Sent!')
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
    },
    'click #yo': function(){
        var yoKey = document.getElementById('api-key').value;
        var user = document.getElementById('one-user').value;
        if (yoKey.length > 1 && user.length > 0) {
            Meteor.call('yoOne', yoKey, user, function(err, result){
                if(!err){
                    if (result.statusCode == '201') {
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
    },
    'click #count': function(){
        var yoKey = document.getElementById('api-key').value;
        if (yoKey.length > 1) {
            Meteor.call('yoSubscribers', yoKey, function(err, result){
                if(!err){
                    alert('You have '+result.data.result+' subscribers, yo.')
                }
            });
        } else {
            alert('You need to enter an API Key');
        }
    }
})

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');