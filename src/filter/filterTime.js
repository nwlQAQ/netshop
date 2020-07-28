export default(now)=>{
    var time=new Date(parseFloat(now));
    var year=time.getFullYear();
    var month=(time.getMonth()+1+"").padStart(2,"0");
    var day=(time.getDate()+"").padStart(2,"0");
    var hour=(time.getHours()+"").padStart(2,0);
    var minutes=(time.getMinutes()+"").padStart(2,0);
    var seconds=(time.getSeconds()+"").padStart(2,0);
    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
  
    // return `${year}-${month}-${day}`;
      
}