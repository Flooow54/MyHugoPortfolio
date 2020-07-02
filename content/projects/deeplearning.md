---
hero: /assets/images/heros/ai_hero.jpg
date: 2020-06-22T19:07:32+02:00
title: "Expérimentations en Deep Learning"
---

Afin d'apprendre les concepts de base du Deep Learning j'ai suivi un cours en ligne sur la plateforme Udemy : [Le Deep Learning de A à Z](https://www.udemy.com/course/le-deep-learning-de-a-a-z/).  
Au fil de ce cours j'ai appris à construire différents types de réseaux de neuronnes et je me suis ensuite entrainné en les implémentant dans différents contextes.

## Prédiction du taux d'attrition
**Artificial Neural Network : Modèle de classification**

**<ins>Etude de cas :</ins>** Une banque a remarqué que de plus en plus de ses clients partent pour la concurrence. Cette banque souhaite donc identifier le segment de sa clientèle le plus susceptible de partir afin par exemple de pouvoir leur faire une offre les incitant à rester. Pour cela elle fournit un dataset contenant des informations sur 10000 clients (*11 features*) et une variable indiquant si ces personnes sont toujours clientes de la banque ou non.

Après une préparation adéquate des do11nes chacunes utilisant la fonction Redresseur (*relu*) et une régularisation par Dropout de 10%, ainsi qu'une couche de sortie constituée d'un seul neurone utiisant le fonction d'action Sigmoïde.  
L'entrainnement du modèle s'est fait en utilisant la fonction de cout logistique (*binary cross entropy*) avec 100 passages du jeu d'entrainnement (comprenant 80% du dataset avec les données choisies au hasard) et une rétropropagation toutes les 10 observations. J'ai obtenu une précision de 86,1% sur le jeu d'entrainnement.  
Ensuite, en effectuant des prédictions sur le jeu d'entrainnement (en appliquant un seuil de 50% aux prédictions pour leur attribuer une classe), la **matrice de confusion m'a indiquer une précision de 86,4% sur de nouvelles observations**.

![ANN](/assets/images/projects/dl/ann.png "Réseau de neuronne utilisé")

Par la suite, j'ai cherché à améliorer l'évaluation de mon modèle en implémentant une **Cross-validation** ainsi qu'une recherche des *hyperparamètres* par **Grid-Serach** en jouant sur le nombre d'observations par lots, le nombre de *folds* et de passage du dataset, ou encore le type d'algorithme du gradient stochastic, ce qui m'a permi d'atteindre l'objectif fixé par le cours : dépasser le seuil de **90% de précision sur la généralisation** à de nouvelles observations.
  
    
## Classification d'images : Chiens / Chats
**Convolutionnal Neural Network**

**<ins>Etude de cas :</ins>** On souhaite disposer d'un programme sachant différencier une image montrant un chien d'une image montrant un chat. On dispose pour cela d'un jeu de 10000 images avec un répartition à peu près égale de chiens et de chats.

![CNN](/assets/images/projects/dl/cnn.png "Réseau de neuronne à convolution utilisé")


## Prédiction des tendances de l'action Google
**Recurrent Neural Network : Long Short-Term Memory**

**<ins>Etude de cas :</ins>** À partir de 5 ans d'historique des données boursières de l'action Google, on souhaite prédire les valeurs d'ouverture pour chaque jours du mois de janvier 2017.


[Parler des tests sur les cryptos et ajouter les zolies courbes !]


## Détection de fraudes
**Modèle hybride, apprentissage non-supervisé puis supervisé : SOM + ANN**

**<ins>Etude de cas :</ins>** Une banque donne un formulaire à remplir à ses clients avant leur vendre un certain type de service. La banque dispose d'un sytème manuel de vérification des des formulaires mais souhaiterai un système automatisé afin de vérifier qu'aucun cas frauduleux ne passe à travers la vérification humaine et qu'aucun cas non-frauduleux soit refusé par erreur. On dispose d'un **dataset anonymisé** (pas de nom de colonne et encodage des réponses) de 700 lignes contenant les réponses aux 15 questions du formulaire.

Ce modèle a été construit en deux parties : 
1. Premièrement, une carte auto-adaptative (SOM ou *Self Organizing Maps*) m'a permi d'étudier la répartition des données dans cet espace à 15 dimensions. En utilisant la **Mean Interneuron Distance** j'ai ensuite été capable d'identifier les valeurs un peu extrèmes ou abérrantes que la banque pourrait considérer comme de la fraude  
    > Dans la carte ci-dessous, les espaces blanc représentent les neurones les plus éloignés des autres : les clients avec des valeurs considérées comme sortant de la normale.  
    > ![Marked SOM](/assets/images/projects/dl/marked_som.png "SOM avec marqueurs du traitement manuel")  
    > Les marqueurs montrent le traitement manuel préalable de la banque : vert = clients acceptés / rouge = clients refusés.  
    > Cela permet de mettre en valeur des cas où le traitement manuel de la banque aurait été défaillant (carré vert sur neurone blanc ou rond rouge sur neurone noir).

2. Ensuite, à partir des résultats obtenus précedemment (le fait qu'un client faude ou non) il a été possible de construire un réseaux de neurones afin de fournir à la banque une liste ordonnée indiquant la probabilité qu'un client fraude pour tout le dataset. Cet ANN se composait d'une couche cachée et d'un neurone de sortie et a été entrainné en utilisant la fonction de coût logistique.  

Ici, la taille du dataset a été problématique car n'ayant détecté que peu de cas frauduleux, les prédictions ont été faites sur les données d'entrainnement (pas de séparation possible). Il en a résulté de grandes probabilités sur les clients déja identifiés comme fraudeurs et de beaucoup plus petites nuances sur les valeurs des autres clients.