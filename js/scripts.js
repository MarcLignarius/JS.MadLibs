$(document).ready(function() {
  $("#formOne").submit(function(event){

      var person1Input= $("input#person1").val();
      var person2Input= $("input#person2").val();
      var animalInput= $("input#animal").val();
      var person3Input= $("input#person3").val();
      var person4Input= $("input#person4").val();
      var person5Input= $("input#person5").val();

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".person3").append(person3Input);
    $(".person4").append(person4Input);
    $(".person5").append(person5Input);
    // console.log(  $(".person1").append);
    $(".panel-body").show();

    event.preventDefault();
});

});
