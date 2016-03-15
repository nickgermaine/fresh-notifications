// Write your package code here!
FreshNotify = function(params){
    console.log('params are ', params);
    console.log('testing');

    var Notification = $('#fresh-notification');
    Notification.html('');
    Notification.removeClass();

    if(params.style){ Notification.addClass(params.style);}
    if(params.top){ Notification.css({
            'top': params.top
    });}
    if(params.bottom){ Notification.css({
        'bottom': params.bottom
    });
    Notification.css({
        'top': 'auto'
    });
    }
    if(params.icon){
        Notification.append('<span class="fa fa-' + params.icon + '"></span>');
        Notification.addClass('fresh-iconify');
    }
    if(params.title){ Notification.append('<h3>' + params.title + '</h3>');}
    if(params.content){ Notification.append('<p>' + params.content + '</p>');}
    if(params.buttons){
        var buttons, trueButton, falseButton;

        // Define true button
        trueButton = '<button class="btn btn-primary fresh-true-button">';
        trueButton += (params.trueText) ? params.trueText : 'Ok';
        trueButton += '</button>';

        // Define false button
        falseButton = '<button class="btn btn-default fresh-false-button">';
        falseButton += (params.falseText) ? params.falseText : 'Cancel';
        falseButton += '</button>';

        // Define button set
        buttons = '<div class="fresh-buttons">' + falseButton + trueButton + '</div>';

        Notification.append(buttons);
        Notification.addClass('buttons');
    }


    // When notification is built ->
    Notification.fadeIn('fast');
    if(params.duration){
        setTimeout(function(){
            Notification.fadeOut('fast');
        }, params.duration);
    }
}
