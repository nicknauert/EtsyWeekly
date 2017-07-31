// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let price = 0;
  let avg = 0;
  for (i = 0; i < data.length; i++){
    price = price + data[i].price;
    avg = price / data.length;
    avg = avg.toFixed(2);
  }
  console.log("The average price is $" + avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let price = 0;
  let arr = [];
  for (i = 0; i < data.length; i++){
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      arr.push(data[i].title);
    }
  } console.log(arr);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let item;
  for (i=0; i < data.length; i++){
    if (data[i].currency_code == "GBP"){
      item = data[i].title + " costs " + data[i].price + " pounds.";
    }
  } console.log(item);

}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let items = "";

  for (i=0; i<data.length; i++){
    for (n=0; n<data[i].materials.length; n++){
      if (data[i].materials[n] === "wood"){
        items = items + data[i].title;
      }
    }
  } console.log(items);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let items = [];
  let arr = [];
    for (i=0; i<data.length; i++){
        if (data[i].materials.length >= 8){
          items.push(data[i].materials);
          arr.push(data[i].title + data[i].quantity + items);
        }
    } console.log(arr);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
let sellerCount = 0;
  for (i = 0; i<data.length; i++){
    if (data[i].who_made === "i_did"){
      sellerCount += 1;
    }

  } console.log(sellerCount + " items were made by their sellers.");
}
