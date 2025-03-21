import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import texttospeech from "@/public/text-to-speech.png";
import importcsv from "@/public/Import-csv.png";

import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import { FaBriefcase } from "react-icons/fa";

import {
  SiNestjs,
  SiAngular,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import {BsLinkedin} from "react-icons/bs";

export const links = [
  {
    name: "Accueil",
    hash: "#accueil",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Competences",
    hash: "#competences",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Veille",
    hash: "#veille",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Stage, Developpeuse Full-Stack",
    location: "PLR Conseil",
    description:
      "Développement de nouvelles fonctionnalités d’une application web de services à domicile.\n" +
        "Gestion de l’affichage et la sélection des prestataires déjà rencontrés lors de la réservation de services d’aide à domicile par le client (NestJs, Angular, Html, Css).\n" +
        "Mise en place de l’envoi de mail aux prestataires choisis par le client avec SendGrid.",
    icon: React.createElement(CgWorkAlt),
    date: "Janvier - Février 2025",
    technos: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "SendGrid", icon: "logos:sendgrid-icon" },
    ],

    reportUrl: "/DIABATE-Fatoumata-2324-Rapport de stage.pdf",


  },
  {
    title: "Stage, Developpeuse Full-Stack",
    location: "La tête dans la toile",
    description:
        "Développement d’une application de réalité augmentée (Unity, Vuforia, Ar Foundation).\n" +
        "Refonte de la page d’accueil du site vitrine du théâtre Francine Vasse : www.leslaboratoiresvivants.com (HTML, CSS, Media Queries)\n" +
        "Amélioration de l’interface utilisateur de l’espace de covoiturage du site (PHP, MySQL).",
    icon: React.createElement(CgWorkAlt),
    date: "Avril - Mai 2024",

    technos: [
      { name: "Unity", icon: "logos:unity" },
      { name: "Vuforia", icon: "simple-icons:vuforia" },
      { name: "AR Foundation", icon: "mdi:augmented-reality" },
      { name: "HTML", icon: "vscode-icons:file-type-html" },
      { name: "CSS", icon: "vscode-icons:file-type-css" },
      { name: "Media Queries", icon: "mdi:responsive" },
      { name: "PHP", icon: "logos:php" },
      { name: "MySQL", icon: "logos:mysql" },
    ],

    reportUrl: "/DIABATE-Fatoumata-2425-Rapport de stage.pdf",
  },

] as const;

export const projectsData = [
  {
    title: "Text-To-Speech",
    description: `Text-To-Speech est une application web de conversion de texte en parole.
            Elle permet aux utilisateurs de saisir du texte, de choisir la voix, la vitesse et la tonalité, puis d'écouter la lecture audio générée.
            L'application est développée avec React et intègre une API Text-to-Speech. Elle offre une interface simple et intuitive, pensée pour une utilisation par des community managers souhaitant améliorer leur accessibilité et productivité.`,
    tags: ["JavaScript", "React", "MySQL",
    ],
    icons: [
      "logos:javascript",
      "logos:react",
      "logos:mysql",
    ],

  imageUrl: texttospeech,
    githubLink: "https://github.com/FatoumataDIABATE/Text-To-Speech",
  },
  {
    title: "Application Import CSV",
    description:
      "L'application Import CSV permet d’importer les données d’événements et de billets vendus à partir de fichiers CSV distincts (un fichier pour les billets et un autre pour les événements et leurs programmations).\n" +
        "\n" +
        "Les informations sont ensuite stockées dans une base de données relationnelle SQL Server, structurée pour gérer efficacement les données relatives aux événements, à leur planification, et à la billetterie.\n" +
        "\n" +
        "Une procédure stockée intégrée permet de détecter les chevauchements de planifications sur un même lieu, garantissant ainsi la cohérence et la fiabilité des données.",
    tags: ["C#", "SQL Server", ".NET","Entity Framework"],
    icons: ["devicon:csharp", "devicon:dotnetcore", "devicon:microsoftsqlserver", "devicon:entityframework"
    ],
    imageUrl: importcsv,
    githubLink: "https://dev.azure.com/fatoumatadiabate/_git/Projet%20WPF",
  },

] as const;

export const skillsData = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Symfony",
    icon: "logos:symfony",
  },
  {
    name: "Angular",
    icon: "logos:angular-icon",
  },
  {
    name: "SQL Server",
    icon: "devicon:microsoftsqlserver",
  },
  {
    name: ".NET",
    icon: "devicon:dotnetcore",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },

] as const;

// data.ts
export const rssFeed = {
  url: "https://www.developpez.com/index/rss.xml",  // URL du flux RSS Developpez.com
  // Tu peux ajouter d'autres configs si besoin (ex: nombre max d'articles, filtre, etc.)
  maxItems: 10,
};

