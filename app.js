$(document).ready(function() {
    var $tabs = $('#t_draggable2')
    $("tbody.t_sortable").sortable({
      connectWith: ".t_sortable",
      items: "> tr",
      appendTo: $tabs,
      helper:"clone",
      zIndex: 999990
    }).disableSelection();
    
    var $tab_items = $(".nav-tabs > li", $tabs).droppable({
      accept: ".t_sortable tr",
      hoverClass: "ui-state-hover",
      drop: function( event, ui ) { return false; }
    });

    $("#button").click(function(e){
        var arr = [];
        $("#t_draggable1 tbody").each(function(){
            $(this).find("tr").each(function(){
                let id = $(this).find("td:eq(0)").text();
                let name = $(this).find("td:eq(1)").text();
                let desc = $(this).find("td:eq(2)").text();
                arr.push({
                    id: id,
                    name: name,
                    desc: desc
                });
            });
        });


        for(i = 0; i < arr.length; i++){
            alert(arr[i].id + ` ` + arr[i].name + ` ` + arr[i].desc);
        }
    });
  });