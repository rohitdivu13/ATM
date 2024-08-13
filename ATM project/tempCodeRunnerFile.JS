const input=require("readline-sync");
console.log(" ** welcome to Reserve Bank of india ** ");
console.log("Insert your Card Here");
let pin=input.questionInt("Enter four digit pin here:- ");
 let AcBalance=10000;
    let password="1234"
 if(pin==password){
    console.log(" ** Succesfully login ** ")
    console.log("Select language");
    console.log("for English press 1 or English");
    console.log("for hindi press 2 or Hindi ");
    
    let Language=input.question("Enter Language here:- ").toLowerCase()
    if(Language== "english" || Language==1){
      console.log("Thank You");  
        console.log("press 1 for deposite \n press 2 for withdrawal  ");
        console.log("press 3 for check balance \n press 4 for change pin");
        let option=input.questionInt("choose your Option:- ")
        if (option==1) {
            console.log("Enter Your Deposite Amount");
            let DepositeAmount=input.questionInt("Enter here:-  ")
                AcBalance+=DepositeAmount;
                console.log("you Desopite amount__"+DepositeAmount);
                console.log("and now Your Account Balance is__"+AcBalance );

        }
        else if(option==2){
            console.log("Enter Your withdrawal Amount");
        let withdrawalamount=input.questionInt("Enter Withdrawl amount here:-  ");
            if(withdrawalamount>AcBalance){
                console.log("insufficiant balance \n pls check amount...");
            }
            AcBalance-=withdrawalamount;
            console.log("you withdrawl amount__"+withdrawalamount);
            console.log("and now Your Account Balance is__"+AcBalance );
        
        }
        else if(option==3){
            console.log(AcBalance+"__is your Account Balance");
        }
        else if(option==4){
            console.log("pls select Your new password");
            let newpassword=input.question("enter the new password:- ");
            if(password.length <= newpassword.length){
                console.log("Your password change succesfully !!! ");
            }
            else{
                console.log("enter more than 4 digit number only");
                console.log("pls try Again ");
            }
            password===newpassword;
            console.log("thank You");

        }
    }
    else if(Language=="hindi" || Language==2){
        console.log("This language is not Available" );
        console.log("continue with english");
        console.log("press 1 for deposite \n press 2 for withdrawal  ");
        console.log("press 3 for check balance \n press 4 for change pin");
        let option=input.questionInt("choose your Option:- ")
        if (option==1) {
            console.log("Enter Your Deposite Amount");
            let DepositeAmount=input.questionInt("Enter here:-  ")
                AcBalance+=DepositeAmount;
                console.log("you Desopite amount__"+DepositeAmount);
                console.log("and now Your Account Balance is__"+AcBalance );

        }
        else if(option==2){
            console.log("Enter Your withdrawal Amount");
        let withdrawalamount=input.questionInt("Enter Withdrawl amount here:-  ");
            if(withdrawalamount>AcBalance){
                console.log("insufficiant balance \n pls check amount...");
            }
            else{
                AcBalance=AcBalance-withdrawalamount;
            console.log("you withdrawl amount__"+withdrawalamount);
            console.log("and now Your Account Balance is__"+AcBalance );
            }
            
        
        }
        else if(option==3){
            console.log(AcBalance+"__is your Account Balance");
        }
        else if(option==4){
            console.log("pls select Your new password");
            let newpassword=input.question("enter the new password:- ");
            if(password.length <= newpassword.length  ){
                console.log("Your password change succesfully !!! ");
            }
            else{
                console.log("enter more than 4 digit number only");
                console.log("pls try Again ");
            }
            password===newpassword;
            
        }
    
    }
}
else{
    console.log("Your password is incorrect \n pls try again....");
}

