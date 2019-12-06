

var array= [[1, 1, 0, 0, 0],
	        [1, 1, 0, 0, 0],
	        [0, 0, 1, 0, 0],
	        [0, 0, 0, 1, 1]];

   
var height = array.length;
var width  = array[0].length;

  var num = 0 ;
  var connect = 0;
  array.forEach((item ,index,arr)=>{
     //console.log(item);

  for(var i=0 ;i<item.length ; i++ ){
     connect = 0;
     if(item[i]==1){
         i>0 && arr[index][i-1]>0 ? connect+=1 :0;  
         /*if( i>0 ){
           // check before
           if(arr[index][i-1]>0){connect+=1} 
         }*/
         index>0 && arr[index-1][i]>0 ? connect+=1 :0;
         /*if(index>0){
           // check upper
           if(arr[index-1][i]>0){connect+=1}
         }*/
        !connect ? num+=1 :0 ;
        /*if(connect==0){ 
           num+=1;
           console.log( "index "+index+"  i ="+i );
        }*/

     }


  }  



  }); 



  console.log(num);
