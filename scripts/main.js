$(function(){

    var toggleViewPort,
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
