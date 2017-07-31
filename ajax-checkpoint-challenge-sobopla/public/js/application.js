

$(document).ready(function() {

	// GET HORSE HANDLER
	$(".add_horse_button").submit(function(event) {
		event.preventDefault();
		var form = $(this);
		form.hide();

		$.ajax({
       url: form.attr('action'), 
       type: form.attr('method')
		 })
    .done(function(response) {
      $(".container-for-add-horse").append(response);
    })
	});

	//JOEL'S
	// $("#get-horse-form").on("submit", function(event){
 //        event.preventDefault();

 //        var $form = $(this); 
 //        if ($form.hasClass("clicked")) {
 //            $(".new-horse-form-wrapper").toggle();
 //            $form.hide();
 //        }
 //        else {
 //            $.ajax({
 //                url: $form.attr('action'),
 //                method: $form.attr('method') 
 //            })
 //            .done(function(response){
 //                $form.hide();
 //                $form.addClass('clicked');
 //                $(".container").append(response);
 //            });
 //        }
 //    });

	// NEW HORSE POST HANDLER 
	$(".container-for-add-horse").on("submit", "#new-horse-form", function(event) {
		event.preventDefault();
		var form = $(this);
		$("add_horse_button").show();
		form.remove();
		var form_data = form.serialize();

		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form_data
		})
		.done(function(response){
			$(".add_horse_button").show();
			$(".horse-list").append(response);
		})
	});

	// JOEL'S
	// $(".container").on("submit", "#new-horse-form", function(event){
 //        event.preventDefault();

 //        var $form = $(this);
        
 //        $.ajax({
 //            url: $form.attr('action'),
 //            method: $form.attr('method'),
 //            data: $form.serialize()
 //        })
 //        .done(function(response){
 //            $form.parent().toggle();
 //            $form.trigger('reset');
 //            $("#get-horse-form").show();
 //            $(".list").append(response);
 //        });
 //    });


	//SHOW HORSE INFO SPECS HANDLER
	$(".list").on("click", "a", function(event){
		event.preventDefault();
		horsename = $(this);

		$.ajax({
			url: horsename.attr('href'), 
		})
		.done(function(response){
			horsename.parent().append(response);
		})
	});

	// JOEL'S
	// $('.list').on("click", 'a.big.fancy-text.light-link', function(event){
 //        event.preventDefault();

 //        var $link = $(this);

 //        $(".list .list").hide();
        
 //        if ($link.hasClass('clicked')) {
 //            $link.siblings('.list').toggle();
 //        }
 //        else {
 //            $.ajax({
 //                url: $link.attr('href'),
 //                method: 'GET',
 //            })
 //            .done(function(response){
 //                $link.addClass("clicked");
 //                $link.parent().append(response);
 //            });
 //        }
 //    })


});
