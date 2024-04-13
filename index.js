
let beforetimer=false;
let list=[
   {  
    
       task:"Meeting",
       description:"Client Meeting",
       duration:"00:50:43"
       },
       {
          
      task:"Project-abc",
     description:"Developing-xyz",
      duration:"01:42:02"
       },
       {
          
       task:"Personal Break",
      description:"Nil",
       duration:"00:22:15"
       },
       {
         
              task:"Meeting",
              description:"Daily Scrum",
              duration:"00:32:28"
      }
      ]
let updateindex=0;
let minutes=0;
let seconds=0;
let hours=0;
document.getElementById("time").innerHTML=`${hours}:${minutes}:${seconds}`;
let id=0;
let currenttime=0;
function start(){
   beforetimer=true;
  id=setInterval(()=>{
      seconds++;
      if(seconds>=60){
         minutes++;
         seconds=0;
     if(minutes>=60){
         hours++;
         minutes=0;
     }
      }
      currenttime=`${hours}:${minutes}:${seconds}`;
      document.getElementById("time").innerHTML=`${hours}:${minutes}:${seconds}`;
   },1000)
}
function stop(){
   console.log("time stopped");
  clearTimeout(id);
}




    schedule(list);
    function schedule(list){
   
    display(list);
  
 }
 displayoptions(list);
   function displayoptions(list)
   {
        
        let a=document.getElementById("drop");
        a.innerHTML="";
        for(let i=0;i<list.length;i++){
         let b=list[i].task;
         
      a.innerHTML+=`<a onclick="handlefilter(${i})">${list[i].task}</a>`
        }
   }


  function handlefilter(i){
   let a=list[i].task;
   let filterd=list.filter(obj=>obj.task==a);
   display(filterd);
          
  }

    function handledelete(index){

   list.splice(index,1);
   display(list);

   }
   function display(list){
      let body=document.getElementById("mybody");
      body.innerHTML="";
      for(let i=0;i<list.length;i++){
      body.innerHTML+=`<tr>
      <td>${list[i].task}</td>
      <td>${list[i].description}</td>
       <td>${list[i].duration}</td>
       <td><button onclick={handleEdit(${i})} id="edit" >Edit</button><button id="delete" onclick={handledelete(${i})}>Delete</button></td>
       </tr>`
       if(document.getElementById("btn").innerHTML.toString()=="Update"||document.getElementById("btn").innerHTML.toString()=="Add" ){
         document.getElementById("task").value="";
 document.getElementById("description").value="";
 document.getElementById("btn").innerHTML="Add";

       }
      }    
   }
   
   function handleEdit(index){
      updateindex=index;
      let a=list[index];
 document.getElementById("task").value=a.task;
 document.getElementById("description").value=a.description;
 document.getElementById("btn").innerHTML="Update";
 document.getElementById("lab").style.display="none";
 
 
   }
   function handleadd(){
      if(document.getElementById("task").value=="" || document.getElementById("description").value==""){
         alert("Please fill all the fields");
          
      }
      else{
         let newtask= document.getElementById("task").value;
         let newdescription=document.getElementById("description").value;
   
         let newduration;
         if(beforetimer==false){
            newduration="";
         }
         else{
            newduration=currenttime;
         }
         list.push({task:newtask,description:newdescription,duration:newduration});
         displayoptions(list);
         display(list);   
      }
        
   }
   function handlebutton(){
      let str=document.getElementById("btn").innerHTML;
      if(str.toString()=="Add"){
        handleadd();
      }
      else{
         handleupdate();
      }
   }
   function handleupdate(){
      
      let a=list[updateindex];
      a.task=document.getElementById("task").value;
      a.description=document.getElementById("description").value;
      a.duration=currenttime;
      displayoptions(list);
      display(list);
   }