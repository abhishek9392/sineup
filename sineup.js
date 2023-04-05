function run(){
    var name=document.getElementById("inp1").value
    var last=document.getElementById("inp2").value
    var email=document.getElementById("inp3").value
    var pass=document.getElementById("inp4").value

    var con_pass=document.getElementById("inp5").value
    // console.log(last)
    if(pass==con_pass){
        const data={name,last,email,pass,con_pass};
        const jsondata=JSON.stringify( data);
        localStorage.setItem('data',jsondata)
        alert("form data saved successfully")
        var get_item=localStorage.getItem("name")
        console.log(get_item)
    }

}
// console.log(localStorage.getItem("data"))