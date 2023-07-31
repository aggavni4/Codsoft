var string="";
var buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='AC')
        {
            string="";
            $(":input").val(string);
        }
        else if(e.target.innerHTML=='=')
        {
            var x=0;
            try{
                string=eval(string);
            }catch{
                x=1;
                // string="Error";
                $(":input").val('Error');
                string="";
            }
            // document.querySelector("input").value=string;
            if(x!=1)
            {$(":input").val(string);
            string="";}

        }
        else
        {
            console.log(e.target);
            string=string+e.target.innerHTML;
            // document.querySelector("input").value=string;
            $(":input").val(string);
        }
    })
})