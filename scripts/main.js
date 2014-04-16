$(function(){

    var DesktopObj = [{"xWidth":"1366","yHeight":"768"},{"xWidth":"1280","yHeight":"800"},{"xWidth":"1440","yHeight":"900"},{"xWidth":"1600","yHeight":"900"},{"xWidth":"1680","yHeight":"1050"},{"xWidth":"1920","yHeight":"1080"},{"xWidth":"1920","yHeight":"1200"},{"xWidth":"2560","yHeight":"1700"},{"xWidth":"2560","yHeight":"1440"},{"xWidth":"2560","yHeight":"1600"},{"xWidth":"2560","yHeight":"1800"}],

        TabObj = [{"xWidth":"1024","yHeight":"768"},{"xWidth":"1024","yHeight":"600"},{"xWidth":"800","yHeight":"600"},{"xWidth":"1366","yHeight":"768"},{"xWidth":"1680","yHeight":"1050"},{"xWidth":"1920","yHeight":"1080"},{"xWidth":"1920","yHeight":"1200"},{"xWidth":"2560","yHeight":"1700"},{"xWidth":"2560","yHeight":"1440"},{"xWidth":"2560","yHeight":"1600"},{"xWidth":"2560","yHeight":"1800"}],

        MobObj = [{"xWidth":"800","yHeight":"400"},{"xWidth":"800","yHeight":"480"},{"xWidth":"1280","yHeight":"720"},{"xWidth":"960","yHeight":"540"},{"xWidth":"720","yHeight":"720"}],





        toggleViewPort,
        viewPort = $('#prjContainer'),
        mobRes = $('#mobileRes'),
        resetViewPort = $('#resReset'),
        tabRes = $('#tabRes'),
        laptopRes = $('#laptopRes'),
        desktopRes = $('#desktopRes');




        function changeScreenSize(selector,xParam,yParam){


            selector.on('click',function(){
                selector.toggleClass('rotateScreen');
                if(toggleViewPort){
                    viewPort.width(xParam).height(yParam);
                    toggleViewPort = 0;
                }
                else{
                    viewPort.width(yParam).height(xParam);
                    toggleViewPort = 1;
                }

            });

        }

        changeScreenSize(mobRes,480,320);
        changeScreenSize(tabRes,1024,600);
        changeScreenSize(laptopRes,1366,768);
        changeScreenSize(desktopRes,1920,1200);
        changeScreenSize(resetViewPort,'100%','100%');



});
