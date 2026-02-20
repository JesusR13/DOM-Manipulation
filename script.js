function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  // show filter, hide add form
  filterForm.style.display = "block";
  addForm.style.display = "none";
}

function showAddNew() {
  const filterForm = document.getElementById("filterContent");
  const addForm = document.getElementById("newContent");

  // show add form, hide filter
  addForm.style.display = "flex";
  filterForm.style.display = "none";
}

function filterArticles() {
  // see which checkboxes are checked
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  // get all the articles
  const articles = document.querySelectorAll("#articleList article");

  // loop through them and hide/show based on type
  articles.forEach((article) => {

    if (article.classList.contains("opinion")) {
      article.style.display = showOpinion ? "" : "none";
    } 
    else if (article.classList.contains("recipe")) {
      article.style.display = showRecipe ? "" : "none";
    } 
    else if (article.classList.contains("update")) {
      article.style.display = showUpdate ? "" : "none";
    }

  });
}

function addNewArticle() {

  // grab input values
  const title = document.getElementById("inputHeader").value.trim();
  const text = document.getElementById("inputArticle").value.trim();

  const opinionRadio = document.getElementById("opinionRadio").checked;
  const recipeRadio = document.getElementById("recipeRadio").checked;
  const lifeRadio = document.getElementById("lifeRadio").checked;

  // if something is empty, stop
  if (!title || !text) return;

  let typeText = "";
  let typeClass = "";

  // check which type was selected
  if (opinionRadio) {
    typeText = "Opinion";
    typeClass = "opinion";
  } 
  else if (recipeRadio) {
    typeText = "Recipe";
    typeClass = "recipe";
  } 
  else if (lifeRadio) {
    typeText = "Update";
    typeClass = "update";
  } 
  else {
    return; // nothing selected
  }

  const articleList = document.getElementById("articleList");

  // make new article
  const article = document.createElement("article");
  article.classList.add(typeClass);

  const marker = document.createElement("span");
  marker.classList.add("marker");
  marker.textContent = typeText;

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const p = document.createElement("p");
  p.textContent = text;

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(p);

  // add it to the page
  articleList.appendChild(article);

  // reset the form
  document.getElementById("inputHeader").value = "";
  document.getElementById("inputArticle").value = "";
  document.getElementById("opinionRadio").checked = false;
  document.getElementById("recipeRadio").checked = false;
  document.getElementById("lifeRadio").checked = false;

  // run filter again in case something is hidden
  filterArticles();
}