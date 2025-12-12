# Green Project API

API REST développée avec Express.js pour le projet Green Project de l'Appen'Isen.

## 📋 Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm ou yarn

## 🚀 Installation

```bash
# Cloner le projet
git clone <url-du-repo>
cd api

# Installer les dépendances
npm install
```

## ⚙️ Configuration

Créer un fichier `.env` à la racine du projet parent avec les variables suivantes :

```env
PORT=3000
```

Le fichier `config/env.js` gère automatiquement le chargement des variables d'environnement avec des valeurs par défaut si nécessaire.

## 📦 Structure du projet

```
api/
├── biome.json           # Configuration Biome (formatage)
├── eslint.config.js     # Configuration ESLint (qualité code)
├── config/
│   └── env.js          # Gestion des variables d'environnement
├── index.js            # Point d'entrée de l'application
├── router.js           # Définition des routes
├── package.json        # Dépendances et scripts
└── README.md          # Documentation
```

## 🛠️ Scripts disponibles

```bash
# Démarrer le serveur
npm start

# Vérifier la qualité du code (ESLint)
npm run lint

# Corriger automatiquement les erreurs ESLint
npm run lint:fix

# Formater le code (Biome)
npm run format

# Vérifier et corriger le code (Biome + ESLint)
npm run check
```

## 🔌 Routes disponibles

### Health Check

```http
GET /ping
```

**Réponse :**
```
Pong!
```

Utilisée pour vérifier que l'API est opérationnelle.

## 🧰 Technologies utilisées

### Dépendances principales

- **Express.js** (v5.2.1) - Framework web minimaliste
- **dotenv** (v17.2.3) - Gestion des variables d'environnement

### Outils de développement

- **ESLint** (v9.39.1) - Analyse statique du code JavaScript
- **Biome** (v2.3.8) - Formatage et linting rapide (alternative à Prettier)

## 📝 Conventions de code

### Formatage (Biome)

- Indentation : 2 espaces
- Guillemets : doubles (`"`)
- Points-virgules : toujours
- Largeur de ligne : 100 caractères
- Trailing commas : ES5

### Qualité de code (ESLint)

- Variables inutilisées interdites (sauf préfixées par `_`)
- `console.*` génère un warning
- Utilisation des modules ES6 (`import`/`export`)

## 🔧 Développement

### Ajouter une nouvelle route

Éditer le fichier `router.js` :

```javascript
import { Router } from "express";

export default Router()
  .get("/ping", (_req, res) => {
    res.send("Pong!");
  })
  .get("/nouvelle-route", (req, res) => {
    // Votre logique ici
    res.json({ message: "Hello World" });
  });
```

### Utiliser les variables d'environnement

```javascript
import { getEnv } from "./config/env.js";

const port = getEnv("PORT", "3000"); // Valeur par défaut: "3000"
const apiKey = getEnv("API_KEY", "default-key");
```

## 📄 Licence

GPL-3.0

## 👥 Auteur

Appen'Isen

---

**Version :** 1.0.0

💡 **Astuce :** Utilisez `npm run check:fix` avant chaque commit pour garantir la qualité du code !