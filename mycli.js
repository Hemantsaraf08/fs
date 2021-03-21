//view --> tree or --> flat
//organize --> media, apps, docs, others
//help

let importedfunction=require("./drivercode");

let input=process.argv.slice(2); // gives whatever is typed in command line interface as array
let command = input[0],dirpath = input[1],type = input[2]
switch(command){
    case "view":
        if(input[input.length-1]=="tree"){
            console.log("Flat view of given file path is below:");
            importedfunction.viewT(dirpath,"");
        }
        else if(input[input.length-1]=="flat"){
            console.log("Tree view of given file path is below:");
            importedfunction.viewF(dirpath);            
        }
        break;
        
    case "organize":
        importedfunction.organizeF(dirpath);
        break;
    case "help":    //note below we used ` (backtick) to display/print lines in requried order without using \n 
        console.log(`list of all commands:
        1. node mycli.js view <dirname> tree
        2. node mycli.js view <dirname> flat
        3. node mycli.js organize <dirname>
        4. node mycli.js help`)
        break;
    default:
        console.log("Wrong command, type help to see list of valid commands")
        break;
}

