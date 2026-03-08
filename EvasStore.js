document.querySelectorAll('.ajouter-panier').forEach(button => {
    button.addEventListener('click', function() {
        const produitId = this.parentElement.getAttribute('data-id');
        alert('Produit ajouté au panier : ' + produitId);
        // Logique d'ajout au panier à implémenter ici
    });
});
