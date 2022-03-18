var timeNow=moment().hour();
//putting current date on the top of the page
$('#currentDay').html(moment().format("dddd, MMMM Do YYYY"));

//save task in local storage
$('.saveBtn').on("click",function(){
    var time =$(this).parent().attr("id");
    var task=$(this).siblings(".description").val();
    localStorage.setItem(time, task);
  
});
//keep task on page when refresh
var showSavedTask=function(){
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
};


//Color code time block based on current time
var colorCode=function(){
    $('.time-block').each(function(){
        var timeBlockNumber=parseInt($(this).attr('id'));
        console.log(timeBlockNumber);
        if(timeBlockNumber===timeNow){
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        }
        else if (timeBlockNumber<timeNow){
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
        else{
            $(this).addClass('future');
            $(this).removeClass('present');
            $(this).removeClass('present');
        }
    });

};
showSavedTask();
colorCode();
