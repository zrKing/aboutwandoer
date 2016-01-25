function changeImgBox(){
	var imgUrl1 = "imgs/bg";
	var imgUrl3=".jpg";
	var imgflag="<img id='imgone' src='imgs/bg1.jpg'/>";
	var photoone = document.getElementsByClassName("photo-box-one");
	var i;
	var div_array = Array.prototype.slice.call(photoone);
	
	for(i=0;i<div_array.length;i++)
	{
		var imgel=div_array[i];
		var imgflag = imgel.getElementsByTagName("img");
	
		var	imgUrl=imgUrl1+Math.ceil( Math.random()*10)+imgUrl3;
		imgflag[0].setAttribute("src", imgUrl);
	}
	
	$('.photo-box-one').hide();
	$('.photo-box-one').slideDown();
}
