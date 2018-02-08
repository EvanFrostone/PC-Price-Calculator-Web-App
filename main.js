//Functions must be 
function $(elementID)
{
    return document.getElementById(elementID);
}

function getPrices()
{
    var cpuGen = $('genRadio').value;
    var cpuBrand = $('cpu-brand').value;
    var cpuType = $('cpuType').value;
    var cpuSpeed = $('speed-dropdown').value;
    var sysSSD = $('sys-ssd').value;
    var sysHDD = $('sys-hdd').value;
    var sysGPU =$('sys-gpu').value;
    var sysRam = $('sys-ram').value;

    var sysArray = [cpuBrand, cpuGen, cpuType, cpuSpeed, sysSSD, sysHDD,sysGPU,sysRam]; 

     

    return sysArray;
}

function changeBrand()
{
    if($('cpu-brand'.value) == 'AMD')
    {
        $('cpu-type-intel').value = 'none';        
    }
    else if($('cpu-brand').value == 'Intel')
    {
        $('cpu-type-amd').value = 'none';
    }
}


function setBasePrice(sysArray)
{
//Function definitely needs refactoring. Has to be better/more efficient methood of choice iteration.
    var basePrice = 0;

    if(sysArray[0]=='Intel')
    {

        if(sysArray[1] == 1)
        {
            
            if(sysArray[2] == 'Celeron' && sysArray[3] >=2.0 && sysArray[3]<= 3.0)
            {
                basePrice = 45.00;
            }

            else if(sysArray[2] == 'Pentium' && sysArray[3] >= 2.0 && sysArray[3]<= 3.0)
            {
                basePrice = 50.00;
            }
            else if(sysArray[2] == 'i3' && sysArray[3]>=2.0 && sysArray[3]<=3.0)
            {
                basePrice = 70.00;
            } 
            else if(sysArray[2] == 'i5' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 90.00;
            }
            else if(sysArray[2] == 'i7' && sysArray[3] >= 2.0 && sysArray[4] <= 3.0)
            {
                basePrice = 110.00;
            }
            else{
                alert('This shouldn\'t even be possible, so undo whatever you broke and stop touching shit.');
            }

        }


        else if(sysArray[1] == 2)
        {
            
            if(sysArray[2] == 'Celeron' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 60.00;
            }

            else if(sysArray[2] == 'Pentium' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 70.00;
            }

            else if(sysArray[2] == 'i3' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 90.00;
            }

            else if( sysArray[2] == 'i5' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 110.00;
            }

            else if(sysArray[2] == 'i7' && sysArray[3] >= 2.0 && sysArray[3] <= 3.0)
            {
                basePrice = 150.00;
            }
            else
            {
                alert('How did you even do this.')
            }
            
        }
        
        else if(sysArray[1] == 3){
            if(sysArray[2] == 'Celeron' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 70.00;
            }
            else if(sysArray[2] == 'Pentium' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 80.00;
            }
            
            else if(sysArray[2] == 'i3' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 110.00;
            }

            else if(sysArray[2] == 'i5' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 160.00;
            }

            else if(sysArray[2] == 'i7' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 180.00;
            }
            else
            {
                alert('How did you even do this.')
            }

        }
        
        else if(sysArray[1] == 4)
        {
            if(sysArray[2] == 'Celeron' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 80.00;
            }

            else if(sysArray[2] == 'Pentium' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 110.00;
            }

            else if(sysArray[2] == 'i3' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 160.00;
            }
            else if(sysArray[2] == 'i5' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 180.00;
            }
            else if(sysArray[2] == 'i7' && sysArray[3] >= 2.0 && sysArray[3] >= 3.0)
            {
                basePrice = 230.00;
            }
            else
            {
                alert('How did you even do this.');
                break;
            }
        }
    }
    return basePrice;
}


function calcSysPrice(){
    var basePrice = setBasePrice(getPrices());
    var ramCost = setRamPrice(getPrices());
    var hddCost = setHDDCost(getPrices());
}