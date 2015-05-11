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
    var el = $('#contactHead');
    el.prepend(templateHTML);
    el.children().children('#name').append(contactData.info.name);
    el.children().children('#email').append(contactData.info.email);
    el.children().children('#phone').append(contactData.info.phone);
    el.children().find('#address').append(contactData.info.address);
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
    //if(!templateHTML){
        $.ajax({
            url: '/templates',
            success: function(response) {
                console.log("success is working");
                templateHTML = response;
                getContent();
            }
        });
    //}

});