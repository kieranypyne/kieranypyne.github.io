$('.thumbnail').click(function(){
  	$('.modal-body').empty();
  	var title = $(this).attr("title");
  	$('.modal-title').html(title);
  	$(this.innerHTML).appendTo('.modal-body');
  	$('#myModal').modal({show:true});
});