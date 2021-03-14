var nodeM=document.getElementById("r1c1");
function start(node)
{

    nodeM=node;
   selectNode(node);

}


function selectNode(node)
{
    var j=document.getElementsByClassName("on");
    for(var i=0;i<j.length;i++){
      j[i].className="";
      }  
    node.className="on";  
}

document.onkeypress = function(e) {
  
    var key = e.keyCode || e.charCode;
    if (key >= 49 && key <= 57) {
        writeThere(nodeM,String.fromCharCode(key));

    }


};

function writeThere(node,chr)
{
    if(NotDisabled(node))
    {
        node.innerHTML=chr;

    }
    
}
function NotDisabled(node){return !node.classList.contains("disabled");}
function num(noder){if(NotDisabled(noder)){nodeM.innerHTML=noder.innerHTML; }}


