# Site Web TraceField

Site web officiel de TraceField - Solutions digitales sur-mesure pour artisans et PME.

## Technologies utilisées

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS** pour le style
- **Framer Motion** pour les animations
- **React Hook Form** pour la gestion des formulaires
- **Web3Forms** pour l'envoi d'emails (gratuit)

## Structure du projet

```
tracefield-site/
├── app/                        # Pages Next.js (App Router)
│   ├── a-propos/              # Page À propos
│   ├── solutions/             # Page Solutions (7 modules)
│   ├── contact/               # Page Contact avec formulaire
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Page d'accueil
│   ├── globals.css            # Styles globaux
│   ├── sitemap.ts             # Génération du sitemap
│   ├── robots.ts              # Fichier robots.txt
│   ├── icon.tsx               # Génération du favicon
│   └── opengraph-image.tsx    # Image Open Graph
├── components/                 # Composants réutilisables
│   ├── Header.tsx             # Navigation sticky
│   └── Footer.tsx             # Footer avec liens
├── public/                     # Fichiers statiques
├── .env.example               # Variables d'environnement exemple
├── tailwind.config.ts         # Configuration Tailwind
├── tsconfig.json              # Configuration TypeScript
└── package.json               # Dépendances
```

## Installation

1. **Cloner le projet ou naviguer dans le dossier**

```bash
cd tracefield-site
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer Web3Forms (pour le formulaire de contact)**

   a. Créez un compte gratuit sur [Web3Forms](https://web3forms.com)

   b. Obtenez votre clé d'accès (Access Key)

   c. Créez un fichier `.env.local` à la racine du projet :

```bash
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_web3forms_ici
```

   d. Modifiez également les fichiers suivants pour mettre à jour le domaine :
   - `app/sitemap.ts` : ligne 4, remplacez `https://tracefield.fr` par votre domaine
   - `app/robots.ts` : ligne 9, remplacez `https://tracefield.fr` par votre domaine

4. **Lancer le serveur de développement**

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Commandes disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Construire pour la production
npm start        # Lancer en mode production
npm run lint     # Vérifier le code avec ESLint
```

## Déploiement

### Option 1 : Vercel (Recommandé)

Vercel est la plateforme officielle de Next.js et offre un déploiement gratuit et simple.

1. **Créer un compte sur [Vercel](https://vercel.com)**

2. **Installer Vercel CLI** (optionnel)

```bash
npm install -g vercel
```

3. **Déployer depuis le terminal**

```bash
vercel
```

Ou depuis l'interface web :
- Connectez votre dépôt Git (GitHub, GitLab, Bitbucket)
- Vercel détectera automatiquement Next.js
- Ajoutez votre variable d'environnement `NEXT_PUBLIC_WEB3FORMS_KEY` dans les paramètres
- Déployez !

### Option 2 : Netlify

1. **Créer un compte sur [Netlify](https://netlify.com)**

2. **Installer Netlify CLI**

```bash
npm install -g netlify-cli
```

3. **Construire le projet**

```bash
npm run build
```

4. **Déployer**

```bash
netlify deploy --prod
```

Ou depuis l'interface web :
- Connectez votre dépôt Git
- Build command : `npm run build`
- Publish directory : `.next`
- Ajoutez la variable d'environnement `NEXT_PUBLIC_WEB3FORMS_KEY`

### Option 3 : Hébergement traditionnel (VPS, serveur dédié)

1. **Construire le projet**

```bash
npm run build
```

2. **Installer Node.js sur le serveur** (version 18+)

3. **Transférer les fichiers**

Transférez tous les fichiers sauf `node_modules`

4. **Sur le serveur**

```bash
npm install --production
npm start
```

5. **Configurer un reverse proxy** (Nginx ou Apache)

Exemple Nginx :

```nginx
server {
    listen 80;
    server_name votredomaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Configuration de Web3Forms

Le formulaire de contact utilise Web3Forms, un service gratuit et simple pour envoyer des emails.

### Configuration

1. Créez un compte sur [https://web3forms.com](https://web3forms.com)
2. Obtenez votre Access Key
3. Ajoutez la clé dans `.env.local` :

```
NEXT_PUBLIC_WEB3FORMS_KEY=votre_cle_ici
```

4. Les emails seront envoyés à l'adresse email associée à votre compte Web3Forms

### Alternative : Utiliser votre propre backend

Si vous préférez utiliser votre propre backend pour envoyer les emails :

1. Modifiez le fichier `app/contact/page.tsx`
2. Remplacez l'URL dans la fonction `onSubmit` :

```typescript
const response = await fetch("https://votre-api.com/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

## Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    red: "#DC2626",    // Rouge principal
    black: "#0A0A0A",  // Noir profond
  },
}
```

Vous pouvez les modifier selon vos préférences.

### Contenu

Tous les textes sont directement dans les fichiers de page :
- `app/page.tsx` - Page d'accueil
- `app/a-propos/page.tsx` - Page À propos
- `app/solutions/page.tsx` - Page Solutions
- `app/contact/page.tsx` - Page Contact

### Icônes

Le site utilise des icônes SVG personnalisées au lieu d'emojis pour un rendu plus professionnel. Toutes les icônes sont dans `components/icons/Icons.tsx`.

**Icônes disponibles :**
- `ReportIcon` - Rapports d'intervention
- `CalendarIcon` - Gestion de planning
- `BoxIcon` - Gestion de stock
- `UsersIcon` - Suivi clients
- `ToolIcon` - Suivi matériel
- `GlobeIcon` - Intranet
- `AutomationIcon` - Automatisation
- `LightningIcon` - Gain de temps
- `BadgeCheckIcon` - Conformité
- `TargetIcon` - Sur-mesure
- `DeviceConnectIcon` - Connectivité
- `ExperienceIcon` - Expérience
- `InnovationIcon` - Innovation
- `RocketIcon` - Développement agile
- `HandshakeIcon` - Accompagnement

**Utilisation :**

```tsx
import { ReportIcon } from "@/components/icons/Icons";

<ReportIcon className="text-red-600" size={48} />
```

Vous pouvez personnaliser la couleur avec `className` et la taille avec `size`.

### Logo

Le logo est actuellement un texte "TraceField". Pour ajouter un logo image :

1. Placez votre logo dans `public/logo.png`
2. Modifiez `components/Header.tsx` :

```tsx
<Link href="/" className="flex items-center space-x-2">
  <Image src="/logo.png" alt="TraceField" width={150} height={50} />
</Link>
```

## SEO

Le site est optimisé pour le SEO avec :

- Meta tags définis dans `app/layout.tsx`
- Sitemap généré automatiquement (`app/sitemap.ts`)
- Fichier robots.txt (`app/robots.ts`)
- Images Open Graph (`app/opengraph-image.tsx`)
- Structure sémantique HTML
- Favicon dynamique (`app/icon.tsx`)

### Améliorer le SEO

1. **Mettez à jour le domaine** dans :
   - `app/sitemap.ts`
   - `app/robots.ts`

2. **Ajoutez Google Analytics** (optionnel)

Dans `app/layout.tsx`, ajoutez avant `</head>` :

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

## Performance

Le site est optimisé pour les performances :

- Images optimisées automatiquement par Next.js
- Code splitting automatique
- Chargement paresseux des composants
- CSS optimisé avec Tailwind
- Animations fluides avec Framer Motion

### Test de performance

```bash
npm run build
npm start
```

Puis testez avec [Lighthouse](https://developers.google.com/web/tools/lighthouse) ou [PageSpeed Insights](https://pagespeed.web.dev/).

## Support

Pour toute question ou problème :

- Email : tracefield31@gmail.com
- Téléphone : 07 69 80 63 34

## Licence

ISC License - TraceField 2025

---

Développé avec ❤️ pour TraceField
