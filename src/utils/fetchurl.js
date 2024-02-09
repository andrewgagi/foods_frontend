const fetchData = () => {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "hk2Ytq8aHhR5tDfEzzDzak2LsbHuyuIA");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  return fetch(
    "https://api.apilayer.com/spoonacular/food/products/search?query=sandwich&addRecipeNutrition=true&addRecipeInformation=true&number=100",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => {
      throw new Error("Error fetching data: " + error.message);
    });
};

export default fetchData;
