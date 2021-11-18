function convert(input, base) {
  let number = parseInt(input);
  const answer = (number).toString(base);
  console.log(answer);
  return answer;
}

$(document).ready(function(){
  $("#conversion-form").submit(function(event){
    event.preventDefault();
    const binaryNumber = $("input:radio[name=unit]:checked").val();
    const inputNumber = $("#binary-input").val();
    $("#result").text(convert(inputNumber, binaryNumber));
    $("#result").show();
  });
});