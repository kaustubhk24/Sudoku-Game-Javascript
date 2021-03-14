var nodeM=document.getElementById("r1c1");
var rowFlag=true;
var columnFlag=true;
var matrixFlag=true;
//arrays
var m1=  ["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"];
var m2= ["r1c4","r1c5","r1c6","r2c4","r2c5","r2c6","r3c4","r3c5","r3c6"];
var m3=  ["r1c7","r1c8","r1c9","r2c7","r2c8","r2c9","r3c7","r3c8","r3c9"];
var m4= ["r4c1","r4c2","r4c3","r5c1","r5c2","r5c3","r6c1","r6c2","r6c3"];
var m5=  ["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"];
var m6=  ["r4c7","r4c8","r4c9","r5c7","r5c8","r5c9","r6c7","r6c8","r6c9"];
var m7=["r7c1","r7c2","r7c3","r8c1","r8c2","r8c3","r9c1","r9c2","r9c3"];
var m8= ["r7c4","r7c5","r7c6","r8c4","r8c5","r8c6","r9c4","r9c5","r9c6"];
var m9= ["r7c7","r7c8","r7c9","r8c7","r8c8","r8c9","r9c7","r9c8","r9c9"];
var arr=[m1,m2,m3,m4,m5,m6,m7,m8,m9];
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
    checkIsWon();

    
}
function NotDisabled(node){return !node.classList.contains("disabled");}
function num(noder){if(NotDisabled(noder)){nodeM.innerHTML=noder.innerHTML;    checkIsWon();}}


function checkIsWon()
{
    var current=nodeM.innerHTML;
    var varname=nodeM.id;
    //window.alert(varname);

    checkRow(varname);
    checkColumn(varname);
    checkMatrix(varname);
    if (rowFlag && matrixFlag && columnFlag)
    {
        //window.alert("You won");
    }
}

function checkRow(varname){
    var num=document.getElementById(varname).innerHTML;

   // #r1c1
    for(i=1;i<10;i++){
       var temp=varname.slice(0,-1)+i;
       var tempVal=document.getElementById(temp).innerHTML;

if(tempVal==="&nbsp;" || varname==temp || tempVal==="&nbsp;&nbsp;")
{}
else{
    if(num==tempVal)
    {
        rowFlag=false;
        document.getElementById(varname).classList.add("duplicate");
        document.getElementById(temp).classList.add("duplicate");     
    }
    else
    {
        document.getElementById(varname).classList.remove("duplicate");
        document.getElementById(temp).classList.remove("duplicate");       
    }
}
    }

}
function checkColumn(varname){
    var num=document.getElementById(varname).innerHTML;
    // #r1c1
     for(i=1;i<10;i++){
        var temp=varname.replaceAt(1,i);
        var tempVal=document.getElementById(temp).innerHTML;
 
 if(tempVal==="&nbsp;" || varname==temp || tempVal==="&nbsp;&nbsp;")
 {}else{
     //window.alert(temp+" : "+tempVal+" : "+num);
 
     if(num==tempVal)
     {
         columnFlag=false;
        document.getElementById(varname).classList.add("duplicate");
         document.getElementById(temp).classList.add("duplicate");
        // window.alert("duplicate in column");
     }
     else
     { document.getElementById(varname).classList.remove("duplicate");
     document.getElementById(temp).classList.remove("duplicate");
 
         
     }
 }
     }
    
}
function checkMatrix(varname){
    var num=document.getElementById(varname).innerHTML;

    for (var i=0;i<arr.length;i++)
    {
        var tempArray=arr[i];
        if(tempArray.includes(varname))
        {
            //window.alert("Found in :"+tempArray);
            for(var j=0;j<arr[i].length;j++)
            {
               // window.alert(arr[i][j]);
               var tempVarVal=document.getElementById(arr[i][j]).innerHTML;
               if(tempVarVal==="&nbsp;" || varname==arr[i][j] || tempVarVal==="&nbsp;&nbsp;")
               {}else{
                   //window.alert(temp+" : "+tempVal+" : "+num);
               
                   if(num==tempVarVal)
                   {
                       matrixFlag=false;
                    document.getElementById(varname).classList.add("duplicate");
                    document.getElementById(arr[i][j]).classList.add("duplicate");
                }
                else
                {
                    document.getElementById(varname).classList.remove("duplicate");
                    document.getElementById(arr[i][j]).classList.remove("duplicate");
              
                }
               }
                   }


            
        }
        
    }


}



String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
 
    return this.substring(0, index) + replacement + this.substring(index + 1);
}