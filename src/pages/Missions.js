import React from 'react'
import './Mission.css'

function Missions() {
    const mission = '../images/b0.jpg';
    return (
        <div className="conteneur_presentation">
        <div className="img">
        <img src={mission} alt="oups" className="img_mission"></img>            
        </div>
        <div className="texte ">
            <p className='p_msi'>
            développe ses interventions au Niger et 
dans la sous-région dans plusieurs domaines d’amenagement de l’espace dont entre autres: 
                <ul>
                    <li>Etudes architecturales</li>
                    <li>Design d’intérieur</li>
                    <li>Etudes techniques</li>
                    <li>Aménagement urbain</li>
                    <li>Infographie 3D</li>
                     <li>Formation BIMs</li>
                    <li>Expertise immobilière</li>
                    <li>Assistance à la maitrise d’ouvrage (AMO)</li>
                    <li>Maitrise d’œuvre d’Exécution (MOE</li>
                    <li>Direction d’Exécution des Travaux (DET).</li>
                </ul>
            
            </p>
            
        </div>
    </div>
    )
}

export default Missions
