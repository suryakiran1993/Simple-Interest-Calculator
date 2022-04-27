function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    
    output = (p*r*y)/100
    
    document.getElementById("result").value = output
}
        
