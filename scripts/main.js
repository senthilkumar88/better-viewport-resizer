$(function() {
    init();
});



/*----------------------------------------------------------------------

 VAR initialisations

----------------------------------------------------------------------*/

  var DesktopObj = [{"xWidth":"1366","yHeight":"768"},{"xWidth":"1280","yHeight":"800"},{"xWidth":"1440","yHeight":"900"},{"xWidth":"1600","yHeight":"900"},{"xWidth":"1680","yHeight":"1050"},{"xWidth":"1920","yHeight":"1080"},{"xWidth":"1920","yHeight":"1200"},{"xWidth":"2560","yHeight":"1700"},{"xWidth":"2560","yHeight":"1440"},{"xWidth":"2560","yHeight":"1600"},{"xWidth":"2560","yHeight":"1800"}],

    TabObj = [{"xWidth":"600","yHeight":"800"},{"xWidth":"600","yHeight":"1024"},{"xWidth":"768","yHeight":"1024"}],

    MobObj = [{"xWidth":"400","yHeight":"800"},{"xWidth":"480","yHeight":"800"},{"xWidth":"720","yHeight":"1280"},{"xWidth":"540","yHeight":"960"},{"xWidth":"720","yHeight":"720"}],

    toggleViewPort, viewPort = $('#prjContainer'),
    mobRes = $('#mobileRes'),
    resetViewPort = $('#resReset'),
    tabRes = $('#tabRes'),
    laptopRes = $('#laptopRes'),
    desktopRes = $('#desktopRes'),
    selectRes = $('#selectRes');



/*----------------------------------------------------------------------

 changeScreenSize Fn

----------------------------------------------------------------------*/


  function changeScreenSize(selector, xParam, yParam) {

    selector.on('click', function() {

    //------To remove '.rotateScreen' class from other elements------
        if (selector.siblings().hasClass('rotateScreen')) {
            selector.siblings().removeClass('rotateScreen');
        }



        //------ NORMAL HARCODED VAL for ViewPort Sizing------
        selector.toggleClass('rotateScreen');
        if (toggleViewPort) {
            viewPort.width(yParam).height(xParam);
            toggleViewPort = 0;
        }
        else {
            viewPort.width(xParam).height(yParam);
            toggleViewPort = 1;
        }


        //------Load JSON val based on 'selector'------
        if (selector.attr('id') == 'mobileRes') {
            var JSONObj = MobObj,
                DeviceTxt = 'other mobile';
        }
        else if (selector.attr('id') == 'tabRes') {
            var JSONObj = TabObj,
                DeviceTxt = 'other tablet';
        }

        //-- ###### GOT TO IMPLEMENT LAPTOP RESOLUTIONS LATER ######

        else {
            var JSONObj = DesktopObj,
                DeviceTxt = 'other laptop/desktop';
        }



      //------Append JSON val based on ABOVE Condition------
        selectRes.empty();
        selectRes.append('<option>Select ' + DeviceTxt + ' resolution</option>');

        $.each(JSONObj, function(key, val) {
            selectRes.append('<option>' + val.xWidth + 'x' + val.yHeight + '</option>');
        });//each



      //------Change Viewport from JSON val using <select>ed val------
        selectRes.on('change', function() {
            var xParam = $(this).val().split('x')[0];
            var yParam = $(this).val().split('x')[1];
            viewPort.width(xParam).height(yParam);
        });//<select> change event



    });//click


  }//changeScreenSize

/*----------------------------------------------------------------------

 INIT Fn

----------------------------------------------------------------------*/

function init(){
    changeScreenSize(mobRes, 480, 320);
    changeScreenSize(tabRes, 1024, 600);
    changeScreenSize(laptopRes, 1366, 768);
    changeScreenSize(desktopRes, 1920, 1200);
    changeScreenSize(resetViewPort, '100%', '100%');
}





