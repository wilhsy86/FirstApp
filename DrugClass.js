/* 
  constructor for a Drug object.
  Example usage:
  
  var drug = new Drug("Red", "amiodarone", "Pacerone", "Antiarrhythia", "Class III Proarrhythmic");
  
  drug.getColor();
  >>>"Red"
  
  drug.gradeAnswer("Pacerone", "Antiarrhythia", "Antihypertensive");
  >>>false
  
*/
function Drug(color, genericName, brandName, pharmClass, therapeuticClass) {
    this.color = color;
    this.genericName = genericName;
    this.brandName = brandName;
    this.pharmClass = pharmClass;
    this.therapeuticClass = therapeuticClass;
    
    // getters
    this.getColor = function() {
        return this.color;
    }
    
    this.getGenericName = function() {
        return this.genericName;
    }
    
    this.getBrandName = function() {
        return this.brandName;
    }
    
    this.getPharmClass = function() {
        return this.pharmClass;
    }
    
    this.getTherapeuticClass = function() {
        return this.therapeuticClass;
    }
    
    /* 
        Function for grading an answer. 
        Returns true if the answer is correct
    */
    
    this.gradeAnswer = function(brandName, pharmClass, therapeuticClass) {
        return (this.brandName === brandName && this.pharmClass === pharmClass && this.therapeuticClass === therapeuticClass);
        
    }
}


/*
    INPUT:
        arrays containing colors, generic names, etc in order
            
            
    RETURNS:
        Drug[]

        
*/
var makeDrugObjects = function(colors, genericNames, brandNames, pharmClasses, therapeuticClasses) {
    var drugs = [];
    var length = colors.length;
    
    // create the array and populate it with drug objects
    for (i = 0; i < length; i++) {
        drug = new Drug(colors[i], genericNames[i], brandNames[i], pharmClasses[i], therapeuticClasses[i]);
        drugs.push(drug);   
    }
    
    return drugs;
}




/* 
    AUTOMATED TEST for the drug object
    where colors, genericNames etc. are files
*/
function testDrugs(colors, genericNames, brandNames, pharmClasses, therapeuticClasses) {
    var drugs = makeDrugObjects(colors, genericNames, brandNames, pharmClasses, therapeuticClasses);
    var length = colors.length;
    // test that it worked as expected
    for (i = 0; i < length; i++) {
        if (drugs[i].getColor() !== colors[i] ||
            drugs[i].getGenericName() !== genericNames[i] ||
            drugs[i].getBrandName() !== brandNames[i] ||
            drugs[i].getPharmClass() !== pharmClasses[i] ||
            drugs[i].getTherapeuticClass() !== therapeuticClasses[i]) 
        {
            //something went wrong
            console.log("test failed: drugs objects are inconsistent with input data");
            return false;
        }
    }
    
    // test that gradeAnswer works as expected
    for (i = 1; i < length; i++) {
        if (!drugs[i].gradeAnswer(brandNames[i], pharmClasses[i], therapeuticClasses[i]) ||
            drugs[i].gradeAnswer("INCORRECT BRAND NAME", pharmClasses[i], therapeuticClasses[i]) ||
            drugs[i].gradeAnswer(brandNames[i], "INCORRECT PHARM CLASS", therapeuticClasses[i]) ||
            drugs[i].gradeAnswer(brandNames[i], pharmClasses[i], "INCORRECT THERAPEUTIC CLASS"))
        {
            console.log("gradeAnswer() test failed");
            return false;
        }    
    }
    
    // print out all the drug objects
    for (i = 1; i < length; i++) {
       console.log(JSON.stringify(drugs[i])); 
    }
    
    console.log("Test passed! Number of cases:" + length);
    return true;
    
}

/* run a simple test to make sure it works ok!

var colors = ["Red", "Red", "Red", "Red"];
var genericNames = ["amiodarone","sotalol HCl","lisinopril","ramipril"];
var brandNames = ["Pacerone, Cordarone, Nexterone", "Betapace","Prinivil", "Zestril","Altace"];
var pharmClasses = ["Antiarrhythia","Antiarrhythmic","ACE inhibitor","ACE inhibitor"];
var therapeuticClasses = ["Class III Proarrhythmic","Class II and II, non selective beta blocker","Antihypertensive","Antihypertensive"];

console.log(testDrugs(colors, genericNames, brandNames, pharmClasses, therapeuticClasses));

*/
