import React from 'react';
import './Presentation.css';


function Presentation() {
    const presentation = '../images/a0.jpg';
    return (
        <div className="conteneur_presentation">
            <div className="img">
            <img src={presentation} alt="oups" className="img_logo"></img>            
            </div>
            <div className="texte ">
                <p className='p_pst'>
                Fondée en 2018 à Niamey, <strong> ICONIC ARCHI-LAB</strong> est une 
agence d’Architecture dont la vision est d’offrir les meilleurs 
services d’architecture et de design dans une approche à la 
fois créative et singulière pour chaque projet.
                
                </p>
            <p className='p_pst'>
            Riche d’un savoir-faire et d’une équipe
professionnelle pluridisciplinaire de jeunes talents architectes et ingénieurs, <strong>ICONIC ARCHI LAB</strong> accompagne de 
manière dynamique depuis trois (3) ans ses clients et partenaires dans la réalisation effective de leurs projets immobiliers de la phase étude jusqu’à la livraison du chantier
                
                </p>
                <p className='p_pst'>
                Soucieux de garantir à chaque projet une identité architecturale unique, <strong>ICONIC ARCHI-LAB</strong> s’investit dans une 
démarche collaborative et proactive avec des consultants 
d’autres corps de métier pour mener à bien chaque projet.Il 
s’agit notamment d’ingénieurs génie civil, énergétiques et 
fluides ; urbanistes, architectes d’intérieurs, économistes, 
paysagistes etc.
                </p>
                <p className='p_pst'>
                <strong> ICONIC ARCHI-LAB </strong>se veut également d’être un Hub 
d’excellence, de recherches et développement de projets 
d’architecture et d’urbanisme novateurs pour les secteurs 
publics, institutionnel et privé dont le but visé est d’apporter 
des solutions concrètes, à l’égard des défis en matière de 
logements, d’équipements et d’aménagements urbains 
auxquels font face les villes africaines.
                </p> 
                
            </div>
        </div>
    )
}

export default Presentation;
