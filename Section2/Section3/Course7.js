//Existence and booleans.
Boolean(undefined) //false
Boolean(null)//false
Boolean("")//false
var a;
//a=null;
//a='';
//a=0;
//a="hi";
if(a){
    console.log('something is there');
}
//highest precedence === (a === 0)true
//(a || true) 
//(0 || true) //coresed
//(false || true) //output : true
if(a || a === 0){
    console.log('something is there.')
}
