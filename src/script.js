
const user_input_selector = document.querySelector(".user-input textarea");
const check_palindrome_btn_selector = document.querySelector(".user-input button");
const result = document.querySelector(".user-input p");

let filter_input;


user_input_selector.addEventListener("keyup", ()=>{
  if(user_input_selector.value.length == 0)
  {
    result.innerHTML = "";
  }
})


check_palindrome_btn_selector.addEventListener("click", () =>{
  let user_input = user_input_selector.value;
  filter_input = user_input.replace(/[^\w]/ig, "");
  filter_input = filter_input.toLowerCase();

  let reverse_input = filter_input.split("").reverse().join("");

  if(filter_input != reverse_input)
  {
    return result.innerHTML = "No, it's not a Palindrome";
  }
  else if(filter_input.length == 0)
  {
    return result.innerHTML = "";
  }
  result.innerHTML = "Yes, it's a Palindrome";
});
