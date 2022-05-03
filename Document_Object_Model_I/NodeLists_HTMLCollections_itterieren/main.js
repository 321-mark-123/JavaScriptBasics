'use strict';
// array ähnliche objecte
// html collection get element by classname oder tagname
let html_collection_1 = document.getElementsByClassName('jumbotron');
let html_collection_2 = document.getElementsByTagName('li');
console.log(html_collection_1);
console.log(html_collection_2);
//for schleife
for (let i = 0; i < html_collection_1.length; i++) {
  console.log(html_collection_1[i]);
}
//for of schleife
for (let e of html_collection_1) {
  console.log(e);
}
//for schleife
for (let i = 0; i < html_collection_2.length; i++) {
  console.log(html_collection_2[i]);
}
//for of schleife
for (let e of html_collection_2) {
  //console.log(`for of loop`);
  console.log(e);
}

// node- lists for each möglich querySelectorAll
let node_list_1 = document.querySelectorAll('p');
console.log(node_list_1);
console.log('for_nodelist_1');
for (let i = 0; i < node_list_1.length; i++) {
  console.log(node_list_1[i]);
}
console.log('for_of_nodelist_1');
for (const e of node_list_1) {
  console.log(e);
}
console.log('for_Each_nodelist_1');
node_list_1.forEach((node) => {
  console.log(node);
});
