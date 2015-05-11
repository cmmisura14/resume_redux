var templateHTML, contactData;

function getContent (){
    console.log("Template", templateHTML);
    $.ajax({
        url:'/data',
        dataType: 'json',
        success: function(response){
            console.log("getContent success ", response);
            contactData = response;
            appendData();
        },
        error: function (xhr, status) {
            alert('Error: ' + status);
        },
        complete: function(){
            console.log("Ajax call #1 complete");
        }
    });
}

function appendData (){
    console.log("This ran ", contactData);
    console.log("Template", templateHTML);
    var el = $('#contact');
    el.prepend(templateHTML);
    el.children().children('#name').append(contactData.info.title);
    el.children().children('#phone').append(contactData.info.phone);
    el.children().children('#address').append(contactData.info.address);
    el.children().find('#email').append(contactData.info.email);
}

$(document).ready(function(){
    $("ul").hide();

    $(".lagoon").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });

    $(".keys").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });

    $(".mamas").on("click", ".btn", function(){
        $(this).next().slideToggle("slow");
    });
    $(".getContact").on('click', function(){
        if(!templateHTML){
            $.ajax({
                url: '/template',
                success: function(response) {
                    templateHTML = response;
                    getContent();
                }
            });
        }
    });
});