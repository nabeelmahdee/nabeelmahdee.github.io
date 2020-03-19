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

        
    }  
  ); // end of doc ready