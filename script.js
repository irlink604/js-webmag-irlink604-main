function getData() {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);


      // TODO 1: REMPLIR LE HEADER
      let title = document.getElementById(`nom-journal`)
      title.textContent = data.title;
      let subtitle = document.getElementById(`phrase-accroche`)
      subtitle.textContent = data.subtitle
      // TODO 2: REMPLIR LA NAVIGATION

      function remplirNavigation(topics) {

        let nav = document.getElementById("themes-nav");


        topics.forEach(topic => {
          let button = `<button class="nav-theme-btn">${topic.title}</button>`;
          nav.insertAdjacentHTML("beforeend", button);
        });
      }

      remplirNavigation(journal.topics);




      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      function remplirHero(feature) {
        let hero = document.getElementById("article-principal");
        let heroCard = `
    <img id="hero-image" src="${feature.imageHero}" alt="${feature.headline}">
    <div class="hero-info">
        <h2 id="hero-titre">${feature.headline}</h2>
        <p id="hero-description">${feature.summary}</p>
        <p id="hero-auteur">Par <strong>${feature.author}</strong> | ${feature.date}</p>
        <p class="theme-badge">${feature.topic}</p>
        <p class="date">${feature.date}</p>
    </div>`;
        hero.insertAdjacentHTML("beforeend", heroCard);
      }

      remplirHero(journal.feature)

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES
      function remplirArticles(stories) {
        let grille = document.getElementById("articles-grid");
        stories.forEach(storie => {
          let carte = `
      <div class="article-card">
        <img src="${storie.image}" alt="${storie.titre}">
        <div class="article-content">
          <p class="theme-badge">${storie.theme}</p>
          <h3>${storie.titre}</h3>
          <p>${storie.description}</p>
          <p class="article-author">Par ${storie.author} - ${storie.date}</p>
          <button class="read-btn">Lire l'article</button>
        </div>
      </div>`;
          grille.insertAdjacentHTML("beforeend", carte);
        });
      }
      remplirArticles(journal.stories)

      // TODO 5: REMPLIR LES THEMES

      function remplirThemes(topics) {
        let themesContainer = document.getElementById("themes-list");
        topics.forEach(topic => {
          let carte = `
      <div class="theme-item">
        <p class="theme-icon">${topic.icon}</p>
        <h3>${topic.title}</h3>
        <p>${topic.desc}</p>
      </div>`;
          themesContainer.insertAdjacentHTML("beforeend", carte);
        });
      }
      remplirThemes(journal.topics)


      // TODO 6: REMPLIR LES AUTEURS

      function remplirAuteurs(contributors) {
        let AuteurContainer = document.getElementById("authors-list");
        contributors.forEach(author => {
          let carte = `
      <div class="author-card">
        <img class="author-image" src="${author.avatar}" alt="${author.firstName}">
        <h3>${author.firstName}</h3>
        <p class="author-role">${author.expertise}</p>
        <div class="author-socials">
          <a href="${author.email}">nico-leboss@gmail.com</a>
        </div>
      </div>`;
          AuteurContainer.insertAdjacentHTML("beforeend", carte);
        });
      }

      remplirAuteurs(journal.contributors)

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      function remplirCTA(cta) {
        let ctaContainer = document.getElementById("call-to-action");
        let ctaHTML = `
    <p>${cta.text}</p>
    <button class="cta-button">${cta.label}</button>`;
  
        ctaContainer.innerHTML = ctaHTML;
          let boutonCTA = ctaContainer.querySelector(".cta-button");

  boutonCTA.addEventListener("click", () => {
    alert("merci bcp !!!");
  });

      }

      remplirCTA(journal.cta)
      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

// BONUS: 
// Alert quand on appuie sur le bouton CTA
// Fonction de filtrage par thème
// Classer les articles par popularité ou notation

