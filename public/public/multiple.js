function repeat() {       
 var myvar=  setInterval(magicsquare,250);
 document.getElementById("test").addEventListener("click", function() {
   clearInterval(myvar)
});
         
           
            
}
     
    

     function magicsquare() {

        var m  = Math.floor(Math.random()*100);
        var n  = Math.floor(Math.random()*100);
         

           console.log("m");
            console.log(m);
             console.log("n");
           console.log(n);


 
        var constantmatrix =[ [0,   0,   0,   0],
    	                        [m+n, -m-n, n-m, m-n],
    	                        [-m,  m,   m,  -m],
    	                        [-n,  n,   -n,  n]
    	                     ];


     	var r11 = document.getElementById("dd").valueAsNumber;
     	var r12=  document.getElementById("mm").valueAsNumber;
     	var r21=  document.getElementById("yyyy").valueAsNumber;
     	var r13= Math.floor(r21*0.01);
     	var r14= r21-(r13*100);

     	 
		var variablematrix = [ [r11 , r12 , r13 , r14],
		                       [r14 , r13 , r12 , r11],
		                       [r12 , r11 , r14 , r13],
		                       [r13 , r14 , r11 , r12]
		                     ];

                         var body = document.getElementsByTagName("body")[0];


                         var tbl = document.createElement("table");
                          

		                    
	                   var result=[];
	                    
	                    for(i=0;i< variablematrix.length;i++){
	                    	result[i]= Array(variablematrix.length);
                         var row = document.createElement("tr");
                           for(j=0;j<result[i].length;j++){
                           	 
	                    	 result[i][j] = variablematrix[i][j] + constantmatrix[i][j];
                          if(result[i][j]>=0&&result[i][j]<9) {
                      result[i][j] ="0" + result[i][j]; 
                     }
                          var data = document.createElement("td");
                          var sol = document.createTextNode(result[i][j]);
                          data.appendChild(sol);
                          row.appendChild(data);
                         
 
	                }
                     tbl.appendChild(row);
	                   
	                 } 

           

 
	                             
     
  body.appendChild(tbl);
  
   
    
                }
                        
 




      