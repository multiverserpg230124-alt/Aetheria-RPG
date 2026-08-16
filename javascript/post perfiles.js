$(document).ready(function(){
$(".GvC .label span").each(function() {
    $(this).parents(".GvC").addClass($(this).text().split(" ")[0].toLowerCase().replace(/'/g, "").replace(/\(|\)/g, ""));
});
});
