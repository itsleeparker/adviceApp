var advice;

$(document).ready(()=>{
	let count = 1;
	let url = "https://api.adviceslip.com/advice";
	fetchApi(url);
	$('span').text(count);
	$('#dice').click((e)=>{
		fetchApi(url);
		count+=1;
		$('span').text(count);
	})

});

const fetchApi= (url)=>{
	$.get(url , function(data){
    	let obj = JSON.parse(data)
    	let advice = obj.slip.advice   
    	$('#advice').fadeIn(200 , function(){
		$(this).text(advice);
	});
		
  })
}
