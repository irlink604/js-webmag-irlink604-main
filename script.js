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

      let hero = document.getElementById("article-principal");

      let heroCard = `
    <img id="hero-image" src="${journal.feature.imageHero}" alt="${journal.feature.headline}">
    <div class="hero-info">
        <h2 id="hero-titre">${journal.feature.headline}</h2>
        <p id="hero-description">${journal.feature.summary}</p>
        <p id="hero-auteur">Par <strong>${journal.feature.author}</strong> | ${journal.feature.date}</p>
    </div>
`;

      hero.insertAdjacentHTML("beforeend", heroCard);

      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let grille = document.getElementById(`articles-grid`)
      journal.stories.forEach(storie => {
        let carte = `
        <div class="article-card">
            <img src="${storie.image}" alt="${storie.titre}">
            <h3 class="article-title">${storie.titre}</h3>
            <p class="article-description">${storie.description}</p>
            <p class="article-author">${storie.author} - ${storie.date}</p>
        </div>
    `;
        grille.insertAdjacentHTML("beforeend", carte);
      });



      // TODO 5: REMPLIR LES THEMES

      let themesContainer = document.getElementById("themes-list");

      journal.topics.forEach(topic => {
        let carte = `
        <div class="theme-item">
            <span class="theme-icon">${topic.icon}</span>
            <h3>${topic.title}</h3>
            <p>${topic.desc}</p>
        </div>
    `;
        themesContainer.insertAdjacentHTML("beforeend", carte);
      });






      // TODO 6: REMPLIR LES AUTEURS

      let AuteurContainer = document.getElementById("authors-list");

      journal.contributors.forEach(author => {
        let carte = `
        <div class="authors-card">
           <img class="author-image" src="${author.avatar}" alt="${author.firstName}">
            <h3>${author.firstName}</h3>
            <p class ="author-role" >${author.expertise}</p>
            <div class="author-socials">
                <a href="${author.email}"></a>
            </div>
        
        </div>
    `;
        AuteurContainer.insertAdjacentHTML("beforeend", carte);
      });

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      let ctaContainer = document.getElementById("call-to-action");

      let ctaHTML = `
  <p>${journal.cta.text} </p>
  <button class="cta-button">${journal.cta.label}</button>
`;

      ctaContainer.innerHTML = ctaHTML;

      /// FIN DU CODE
    })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
}

getData();

// BONUS: 
// Alert quand on appuie sur le bouton CTA
// Fonction de filtrage par thème
// Classer les articles par popularité ou notation

