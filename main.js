nameOfTheStudentArray = [];

function submit () {
  var displayStudentArray =[];

        for (var j = 1; j<=4; j++){
     var nameOfTheStudent = document.getElementById ("nameOfTheStudent"+j).value;
     console.log(nameOfTheStudent);
     nameOfTheStudentArray.push(nameOfTheStudent);}

     console.log (nameOfTheStudentArray);

     var lengthOfNameOfTheStudentsArray = nameOfTheStudentArray.length;
     console.log(lengthOfNameOfTheStudentsArray);

     for (var k = 0; k < lengthOfNameOfTheStudentsArray; k++) {
        displayStudentArray.push("<h4> NOME -" + nameOfTheStudentArray [k] + "</h4>");
        console.log (displayStudentArray);
     }
      console.log (displayStudentArray);
      document.getElementById("displayNameWithCommas").innerHTML = displayStudentArray;

      var removeCommas = displayStudentArray.join("");
      console.log (removeCommas);
      document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

      document.getElementById("submitButton").style.displayStudentArray ="none"
} 

function sorting () {

   nameOfTheStudentArray.sort();
   console.log(nameOfTheStudentArray);

   var displayStudentArraySorting = [];

   var lengthOfNameOfTheStudentsArray = nameOfTheStudentArray.length;
   console.log(lengthOfNameOfTheStudentsArray);

   for (var k = 0; k < lengthOfNameOfTheStudentsArray; k++)
   {
      displayStudentArraySorting.push("<h4> NOME -" + nameOfTheStudentArray[k] + "</h4>")
      ;
      console.log (displayStudentArraySorting);
   }
   var removeCommas = displayStudentArraySorting.join ("");
   console.log(removeCommas);

   document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;
}
