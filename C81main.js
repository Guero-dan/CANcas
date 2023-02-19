function stagecleared(){
    PAINT.clearRect(0, 0, CANCAS.width, CANCAS.height)
}
var ppppppppppppppppppppppppp=false
var CANCAS=document.getElementById("CANCAS");
var PAINT=CANCAS.getContext("2d");
var anchoa=012345;
function figura_que_no_tiene_lados_y_la_suma_de_sus_angulos_da_trescientos_sesenta_grados(x,y,volo){
    PAINT.strokeSytle=volo;
    PAINT.lineWidth=90;
    PAINT.beginPath();
    PAINT.arc(x,y,25,0,2*Math.PI);
    PAINT.stroke();
}
figura_que_no_tiene_lados_y_la_suma_de_sus_angulos_da_trescientos_sesenta_grados(250,100,"#0000ff")
//CANCAS.addEventListener("mousedown",coordenates);
function coordenates(event){
    eventx=event.clientX-CANCAS.offsetLeft;
    eventy=event.clientY-CANCAS.offsetTop;
    figura_que_no_tiene_lados_y_la_suma_de_sus_angulos_da_trescientos_sesenta_grados(eventx,eventy,"#0000ff")
}
function la_base_de_todo(X_predial, Y_predial, X_nanobótica, Y_nanobótica, no_me_gusta_el_color_con_lápices_de_color){
PAINT.strokeStyle=no_me_gusta_el_color_con_lápices_de_color;
PAINT.lineWidth=anchoa;
PAINT.beginPath();
PAINT.moveTo(X_nanobótica, Y_nanobótica)
PAINT.lineTo(X_predial, Y_predial);
PAINT.stroke();
}
CANCAS.addEventListener("mousedown", function(){
    ppppppppppppppppppppppppp=true
})
CANCAS.addEventListener("mousemove", function(event){
    XXX=event.clientX-CANCAS.offsetLeft;
    YYY=event.clientY-CANCAS.offsetTop;
    if(ppppppppppppppppppppppppp){
        color=document.getElementById("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp").value
        la_base_de_todo(XXX, YYY, X_nanobótica, Y_nanobótica, color)
    }
    X_nanobótica=XXX;
    Y_nanobótica=YYY;
})
CANCAS.addEventListener("mouseup", function(){
    ppppppppppppppppppppppppp=false
})
CANCAS.addEventListener("mouseleave", function(){
    ppppppppppppppppppppppppp=false
})
if(screen.width<992){
    CANCAS.width=screen.width-100
    CANCAS.height=screen.height-300
    document.body.style.overflow="hidden"
}
CANCAS.addEventListener("touchstart", function(event){
     X_nanobótica=event.touches[0].clientX-CANCAS.offsetLeft
     Y_nanobótica=event.touches[0].clientY-CANCAS.offsetTop
})
CANCAS.addEventListener("touchmove", function(event){
    XXX=event.touches[0].clientX-CANCAS.offsetLeft;
    YYY=event.touches[0].clientY-CANCAS.offsetTop;
    color=document.getElementById("pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp").value
    anchoa=document.getElementById("lbyrav").value
    la_base_de_todo(XXX, YYY, X_nanobótica, Y_nanobótica, color)
    X_nanobótica=XXX;
    Y_nanobótica=YYY;
})