$(document).ready(
    function() {
        const bars = $(".bars");
        const ddlinks = $(".ddlinks");
        const dditems = $(".dditems");
        const topbarlinks = $(".topbar a");

        ddlinks.css("color","black");
        topbarlinks.css("color","black");
        topbarlinks.css("text-decoration","none");

        bars.click(function () {
            dditems.toggle(200);
            bars.toggleClass("rotate");
        });

        $("#discord").click(function(){
            alert("Add me on discord: nabeel#6565")
        })


    }  
  ); // end of doc ready