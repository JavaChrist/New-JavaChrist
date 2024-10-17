// Ouvrir le chat en affichant la modale
function openChat() {
    document.getElementById("chat-modal").style.display = "flex";
}

// Fermer le chat en cachant la modale
function closeChat() {
    document.getElementById("chat-modal").style.display = "none";
}

// Fonction pour envoyer un message
function sendMessage() {
    const message = document.getElementById("message").value.toLowerCase();
    const chatbox = document.getElementById("chatbox");

    if (message) {
        // Afficher le message de l'utilisateur
        chatbox.innerHTML += "<div><strong>Vous:</strong> " + message + "</div>";
        document.getElementById("message").value = ''; // Réinitialiser le champ texte
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas

        // Appeler la fonction pour obtenir une réponse
        const response = getResponse(message);

        // Ajouter la réponse du bot
        chatbox.innerHTML += "<div><strong style='color: #37757a;'>Christ:</strong> " + response + "</div>";
        chatbox.scrollTop = chatbox.scrollHeight; // Scroll vers le bas
    }
}

// Écouter le clic sur le bouton envoyer
document.getElementById("send").addEventListener("click", sendMessage);

// Ajouter un écouteur d'événements pour la touche Enter
document.getElementById("message").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le saut de ligne
        sendMessage(); // Appeler la fonction d'envoi
    }
});

// Fonction pour générer une réponse en fonction des mots-clés
function getResponse(message) {
    // Mots-clés et réponses correspondantes (avec plusieurs options pour chaque  const responses = {mot-clé)

    const responses = {
"site": [
"I offer services for the creation of websites tailored to your needs. Can you specify the type of site you want to create (showcase, e-commerce, etc.)?",
"I can help you create a modern and responsive website. What is your project exactly ?",
"I help with website design. Do you have a clear idea of what you want ?"
],
"price": [
"Cost depends on features. For a custom quote, visit my contact page : <a href='/en/contact.html'>Page de contact</a>.",
"Each project is unique. Contact me to discuss your project and get a quote : <a href='/en/contact.html'>Page de contact</a>."
],

"languages": [
    "I work mainly with HTML, CSS, JavaScript, as well as frameworks like React and Node.js. Do you already use a particular language or technology ?",
    "For web development, I use modern technologies such as JavaScript, HTML5, CSS3, and frameworks like React. Do you have a preference for a language or technology ?",
    "Languages and frameworks like JavaScript, React, and Node.js are my specialty. What kind of technology are you looking for for your project ?"
],
"seo": [
    "To improve the SEO of your site, I offer content optimization services, tags and structure. Would you like to know more about my SEO services ?",
    "SEO is essential for online visibility. I can help you improve your site’s performance on search engines. You have specific questions about this ?",
    "I offer full services to optimize the referencing of your site. Do you already have a site or would you like to create one ?"
],
 
"services": [
    "I offer a wide range of services, including website creation, SEO optimization, and web application development.",
    "My services include responsive website creation, UI/UX design, and much more. Check out my services page for more details.",
    "I offer customized services for website and web application creation. Check my services page for more information."
],
"temps de developpement": [
    "Development time varies depending on the complexity of the project. A showcase site usually takes 2 to 4 weeks.",
    "The development duration depends on the project. Generally, for a simple site, expect 2 to 4 weeks.",
    "Development time is adjusted based on the requested features. We will establish a timeline together."
],
"demarrer un projet": [
    "To start, we can schedule a meeting via Calendly to discuss your needs in detail: <a href='https://calendly.com/ton-calendly'>Schedule a meeting</a>.",
    "To kick off the project, I invite you to book a slot on my Calendly so we can discuss your expectations: <a href='https://calendly.com/ton-calendly'>Schedule a meeting</a>.",
    "We can get started quickly. Schedule a meeting to discuss it here: <a href='https://calendly.com/ton-calendly'>Schedule a meeting</a>."
],
"type de site web": [
    "I can create showcase websites, e-commerce sites, web applications, and more. What type of site do you have in mind?"
],
"cms": [
    "I work with various CMS platforms like WordPress, Drupal, and others, depending on your needs."
],
"maintenance": [
    "Yes, I offer maintenance services to ensure your website remains secure and regularly updated."
],
"technologies préférées": [
    "I use modern technologies such as HTML5, CSS3, JavaScript, React, Node.js, and Flutter Flow for mobile development."
],
"processus de travail": [
    "My process includes project discovery, goal definition, design, development, testing, and finally, deployment."
],
"tarifs": [
    "My rates vary depending on the complexity of the project. For a customized quote, feel free to contact me via my contact page."
],
"exemples projets": [
    "Yes, you can view my online portfolio to see some of my recent projects."
],
"besoins spécifiques": [
    "We will start by defining your needs, then I will propose a tailored solution with a quote."
],
"delai site web": [
    "A showcase site can take between 2 to 4 weeks, while a more complex project will take longer."
],
"cout projet": [
    "The cost varies depending on the features and specifics of your project. I recommend requesting a personalized quote."
],
"integration logo charte": [
    "Yes, I can integrate your logo and brand guidelines into the website design."
],
"assistance informatique": [
    "Of course! I support you throughout the project to make things as simple as possible."
],
"contact": [
    "You can contact me via my contact page or book a meeting directly on Calendly."
],
"delai livraison": [
    "The timeline depends on the complexity of the project, but a simple project typically takes 2 to 4 weeks."
],
"garanties": [
    "I offer quality and satisfaction guarantees, as well as support after the site is launched."
],
"referencement naturel": [
    "Yes, I ensure natural referencing (SEO) so that your site is well positioned in search engines."
],
"outils performance": [
    "Yes, I use tools like Google Analytics to track your site's performance."
],
"situation": [
    "I am based in Portet-sur-Garonne, but I work with clients all over France."
],
"tarifs horaires": [
    "My hourly rates are adjusted based on the project. Contact me to discuss your needs."
],
"forfaits": [
    "Yes, I offer packages for certain types of projects, such as showcase or e-commerce site creation."
],
"devis": [
    "The quote is based on the complexity of the project, the number of pages, features, and technologies used."
],
"paiements echelonnes": [
    "Yes, staggered payments are possible for some projects."
],
"delai estimation": [
    "I can provide you with an estimate after discussing the details of your project."
],
"service urgence": [
    "Yes, for urgent needs, I offer expedited services with shorter deadlines."
],
"technologies mobile": [
    "For mobile development, I use Flutter, Flutter Flow, and React Native."
],
"compatibilite navigateurs": [
    "All the sites I develop are compatible with major web browsers."
],
"contrat maintenance": [
    "I offer maintenance contracts to ensure the security and regular updates of your site."
],
"support technique": [
    "I provide technical support by email and phone to answer your questions or resolve issues."
],
"collaboration": [
    "I work closely with my clients, remaining available at every stage of the project."
],
"outils gestion projet": [
    "I use tools like Trello, Notion, and TimeMate, our custom time management solution, to track project progress."
],
"avancement projet": [
    "I provide regular updates according to a schedule that we define together."
],
"etapes livraison": [
    "After the final validation, I launch the site and provide training so you can manage its content."
],
"mise en ligne": [
    "I handle the website launch on your hosting and ensure that everything works correctly."
],
"formats livraison": [
    "I provide the website files downloadable from the client area on my site, as well as a copy on a USB drive."
],
"confidentialite donnees": [
    "I comply with data protection regulations and ensure that your site is secure."
],
"tendances web": [
    "Current trends include responsive design, SEO optimization, and the integration of artificial intelligence."
    ]
    
 };

    // Boucler sur les mots-clés pour trouver une réponse
    for (let keyword in responses) {
        if (message.includes(keyword)) {
            // Sélectionner une réponse aléatoire parmi les options disponibles
            const options = responses[keyword];
            return options[Math.floor(Math.random() * options.length)];
        }
    }

    // Réponse par défaut si aucun mot-clé trouvé
    return "Je suis désolé, je n'ai pas compris votre question. Pouvez-vous préciser votre besoin concernant un site internet ou une application web ?";
}