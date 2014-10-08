$(document).ready(function(){
    
    //adds in datepicker only future dates allowed
    $('#dd').datepicker({
        
        minDate:1
        
    });
    
    $('#rd').datepicker({
        
        minDate:1
        
    });
    
    //displays underline when hovering over more locations
    $('.more').hover(
        
        function(){
            $(this).addClass('hoverMore');
            
        },
        
        function(){
            
            $(this).removeClass('hoverMore');
            
        });
      
});//end jQuery

//  runs the custom alert/dialog box/popover   
    function CustomAlert(){
    
    //other places popup
    this.tag = function(title,img,info){
        
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        var boxholder = document.getElementById('boxholder');
        
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
        $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        var boxoverlay = document.getElementById('boxoverlay');
        
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        boxholder.style.left = (winW/2) - (550 * 0.50) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        $('#dialogboxhead').text(title);
        $('#dialogboxbody').append('<center><img class="img" src="' + img + '"></center>' + '<br>' + info);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    };//end tag function
        
    //controls button bar popup
    this.bar = function(title,img,info){
        
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        var boxholder = document.getElementById('boxholder');
        
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
        $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        var boxoverlay = document.getElementById('boxoverlay');
        
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        boxholder.style.left = (winW/2) - (550 * 0.5) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        $('#dialogboxhead').text(title);
        $('#dialogboxbody').append('<center><img class="img" src="' + img + '"></center>' + '<br>' + info);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    };//end bar function
        
        //controls check flights popup
        this.checkflights = function(){
            
            var winW = window.innerWidth;
            var winH = window.innerHeight;
        
            var boxholder = document.getElementById('boxholder');
            
            $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
            $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
            var boxoverlay = document.getElementById('boxoverlay');
        
            $('#boxoverlay').append('<div id="dialogoverl"></div>');
            $('#boxoverlay').addClass('dialogoverlay');
            
            boxoverlay.style.display = "block";
            boxoverlay.style.height = winH + "px";
        
            boxholder.style.left = (winW/2) - (550 * 0.5) + "px";
            boxholder.style.top = "250px";
            boxholder.style.display = "block";
            
            var fromloc = $('#fromloc').val();
            var toloc = $('#toloc').val();
            var fromdate = $('#dd').datepicker({ dateFormat: 'dd-mm-yy' }).val();
            var todate = $('#rd').datepicker({ dateFormat: 'dd-mm-yy' }).val();
            
            if (fromloc.length > 1 && toloc.length > 1){
            
            $('#dialogboxhead').text('Prices for your flight');
            $('#dialogboxbody').html('<table><tr><td>' + fromloc + '</td><td>' + toloc + '</td><td>"Prices"</td></tr><tr><td>Air Way</td><td></td><td>$59.99</td></tr><tr><td>Flight City</td><td></td><td>$89.99</td></tr><tr><td>Luxury Air</td><td></td><td>$119.99</td></tr><tr><td>' + fromdate + '</td><td>&#45;</td><td>' + todate + '</td></tr></table>');
            $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
            } else {
                $('#dialogboxhead').text('ERROR');
                $('#dialogboxbody').text('Please fill in all blanks!');
                $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
            }
            
        };//end checkflights function
    
    //this closes the dialog
    this.ok = function(){
        
        $('#boxholder').removeClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        $('#boxoverlay').removeClass('dialogoverlay');
        
        $('#boxholder').css('top','').css('left','').css('display','none');
        $('#boxoverlay').css('display','none').css('height','');
        
        $('#boxholder').empty();
        $('#boxoverlay').empty();
        
        $('#dd').datepicker().val('');
        $('#rd').datepicker().val('');
        $('#fromloc').val('');
        $('#toloc').val('');
        
    };//end okay function
    
}//end custom dialog function

//initiates dialog
var Alert = new CustomAlert();
