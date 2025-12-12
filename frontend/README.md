# Green Project Frontend

Interface web développée avec React et Vite pour le projet Green Project de l'Appen'Isen.

## 📋 Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## 🚀 Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd frontend

# Installer les dépendances
npm install
```

## 🛠️ Scripts disponibles

### Développement

```bash
# Démarrer le serveur de développement (http://localhost:5173)
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

### Qualité du code

```bash
# Vérifier le linting
npm run lint

# Corriger automatiquement les erreurs de linting
npm run lint:fix

# Vérifier le formatage
npm run format

# Formater automatiquement le code
npm run format:fix

# Vérifier tout (linting + formatage + imports)
npm run check

# Corriger tout automatiquement
npm run check:fix

# Vérification CI/CD (lecture seule)
npm run ci
```

## 📦 Structure du projet

```
frontend/
├── biome.json              # Configuration Biome (formatage + linting)
├── eslint.config.js        # Configuration ESLint (qualité code)
├── vite.config.js          # Configuration Vite
├── index.html              # Point d'entrée HTML
├── public/                 # Assets statiques
│   └── vite.svg           # Logo Vite
├── src/
│   ├── main.jsx           # Point d'entrée React
│   ├── App.jsx            # Composant principal
│   ├── App.css            # Styles du composant App
│   ├── index.css          # Styles globaux
│   └── assets/            # Images, fonts, etc.
├── package.json           # Dépendances et scripts
└── README.md             # Documentation
```

## 🧰 Technologies utilisées

### Dépendances principales

- **React** (v19.1.0) - Bibliothèque UI
- **React DOM** (v19.1.0) - Rendu React dans le DOM

### Outils de développement

- **Vite** (v6.3.5) - Build tool ultra-rapide et dev server
- **Biome** (v2.3.8) - Formatage et linting (remplace ESLint + Prettier)
- **@vitejs/plugin-react** (v4.4.1) - Support React pour Vite

## ⚙️ Configuration

### Vite

Le projet utilise Vite pour un développement rapide avec :
- Hot Module Replacement (HMR)
- Build optimisé pour la production
- Support natif des modules ES

### Biome

Configuration de qualité de code :
- Formatage automatique
- Linting des erreurs
- Organisation des imports
- Support React/JSX natif

## 🎨 Développement

### Ajouter un nouveau composant

```javascript
// src/components/MonComposant.jsx
function MonComposant() {
  return (
    <div>
      <h1>Mon Composant</h1>
    </div>
  );
}

export default MonComposant;
```

Puis l'importer dans `App.jsx` :

```javascript
import MonComposant from './components/MonComposant';

function App() {
  return (
    <div>
      <MonComposant />
    </div>
  );
}
```

### Ajouter des styles

```css
/* src/components/MonComposant.css */
.mon-composant {
  padding: 20px;
  background-color: #f0f0f0;
}
```

```javascript
import './MonComposant.css';
```

### Importer des assets

```javascript
import logo from './assets/logo.png';

function App() {
  return <img src={logo} alt="Logo" />;
}
```

## 🏗️ Build et déploiement

### Build de production

```bash
npm run build
```

Génère les fichiers optimisés dans le dossier `dist/`.

### Prévisualiser le build

```bash
npm run preview
```

Lance un serveur local pour tester le build de production.

### Déploiement

Le dossier `dist/` peut être déployé sur :
- Vercel
- Netlify
- GitHub Pages
- Tout hébergement statique

## 🔧 Workflow recommandé

### Avant chaque commit

```bash
# Vérifier et corriger automatiquement
npm run check:fix

# Ou manuellement
npm run format:fix
npm run lint:fix
```

### En CI/CD

```bash
# Vérification stricte (ne modifie rien)
npm run ci
```

## 📊 Performance Vite

- ⚡ Démarrage instantané du serveur de dev
- 🔥 Hot Module Replacement (HMR) ultra-rapide
- 📦 Build optimisé avec code splitting automatique
- 🎯 Tree-shaking natif

## 🎯 Conventions de code

### Formatage (Biome)

- Indentation : 2 espaces (par défaut)
- Guillemets : selon config Biome
- JSX : Support natif
- Imports : Organisation automatique

### Structure des composants

```javascript
// Imports externes
import { useState } from 'react';

// Imports internes
import MonComposant from './components/MonComposant';

// Styles
import './App.css';

// Composant
function App() {
  const [state, setState] = useState(null);
  
  return <div>...</div>;
}

// Export
export default App;
```

## 🌐 Ports par défaut

- **Développement** : http://localhost:5173
- **Preview** : http://localhost:4173

## 📄 Licence

GPL-3.0

## 👥 Auteur

Appen'Isen

---

**Version :** 1.0.0

💡 **Astuce :** Utilisez `npm run check:fix` avant chaque commit pour garantir la qualité du code !