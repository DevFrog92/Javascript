async function getData(searchText){
  let data;
  await fetch(`https://jjalbot.com/api/jjals?text=${searchText}`)
  .then(response => response.json())
  .then(dataJson => {
    data = dataJson
  })
  return data;
};

export default getData;