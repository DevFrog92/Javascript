function SearchInput ($app){

  this.$target = $app;
  const inputTag = document.createElement('input');
  inputTag.classList.add("search__input");
  this.$target.appendChild(inputTag);

  
}

export default SearchInput;