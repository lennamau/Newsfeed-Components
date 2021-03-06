// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your 
    //expandButton to say "expand"
    this.expandButton.textContent = 'Click to Expand';
    
    // Set a click handler on the expandButton reference, calling the 
    //expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    
  }

  expandArticle() {
    if (this.expandButton.textContent =="Click to Expand") {
      this.expandButton.textContent = "Click to Close";
    } else {
      this.expandButton.textContent = "Click to Expand";
    }
    this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by passing 
in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.article').forEach(article => {
  new Article(article)
}); 

/*
articles.forEach((domElement) => {
  let article = new Article(domElement);
  console.log(domElement);

});
*/