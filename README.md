# Test Technique Pretto

Interface web responsive reproduisant le design fourni par Pretto.
<img width="883" height="605" alt="Screenshot 2026-01-08 at 16 02 52" src="https://github.com/user-attachments/assets/4b909e66-7521-4b47-a4b6-d8599ffb9e5b" />
<img width="297" height="696" alt="Screenshot 2026-01-08 at 16 03 32" src="https://github.com/user-attachments/assets/6dbc3cb8-8b8f-4e1b-ba66-762a2568f73d" /> <img width="296" height="534" alt="Screenshot 2026-01-08 at 16 04 04" src="https://github.com/user-attachments/assets/68062a51-e781-4796-a0b1-ca1962faa1a5" />

## Technologies utilisées

- React
- TypeScript
- Vite
- CSS (avec media queries pour le responsive)
- React Router (pour la navigation)
- @pretto/places (pour la recherche de villes)

## Installation

```bash
pnpm install
```

## Lancement
```bash
pnpm dev
```
Le site sera accessible sur http://localhost:5173

## Exercices réalisés

### Exercice 1 : Tableau de bord
Reproduction de la page d'accueil responsive avec :
- Header avec menu déroulant
- Section "Préparer mon projet"
- Section "Financer mon projet"
- Adaptation mobile / tablette / desktop

### Exercice 2 : Paramétrage d'alertes
Création d'une page de paramétrage d'alertes avec :
- Sélecteur de villes avec autocomplétion
- Filtres par type de bien (checkboxes)
- Filtres par type de vente (radio buttons)

**Accès :** sur `http://localhost:5173/alert-settings` ou via la navbar (clic sur le dropdown à côté de l'email ou menu burger → "Paramétrer mes alertes")

## Choix techniques

### Sélection des villes
- Utilisation de l'API `@pretto/places` pour l'autocomplétion
- Recherche déclenchée à partir de 2 caractères (pour avoir des résultats plus pertinents)
- Affichage des suggestions dans un dropdown
- Gestion des villes sélectionnées sous forme de tags supprimables pour une simplifier la suppression
- Input avec bouton de clear intégré pour une meilleure UX

### Composants
- Composants simples et réutilisables (Checkbox, Radio, CitySelector)
- CSS modulaire avec fichiers dédiés par composant (meilleure maintenabilité et isolation des styles)

### Gestion d'état
- State local avec `useState` pour les formulaires
- Réinitialisation du formulaire après enregistrement/suppression (facilite la création d'une nouvelle alerte)
