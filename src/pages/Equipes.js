import React from 'react'
import './Equipes.css'

function Equipes() {
    const yacouba = '../images/yac.jpg';
    const liman = '../images/moustapha.jpg';
  return (
        <div className="app_equipe">
            <div className='titre'>
                <h2 className='h3titre'>Notre équipe</h2>
                <p className='ptitre'>
                ICONIC ARCHI-LAB est composé d’une équipe de professionnels pluridisciplinaires 
                d’architectes, d’ingénieurs et techniciens qui oeuvrent  ensemble pour la reussite
                 effective de chaque projet.
                </p>

            </div>
            <div className='corps_equipe'>
                <ul className='divul'>
                    <li className='divulli'>
                        <div className='divImg'>
                            <img src={yacouba} className='img' alt="oups"></img>
                            <h2 className='h1'>GARBA HAMIDOU Yacouba</h2>
                            <h4 className='h1'>CEO and Co-Founder</h4>
                        </div> 
                        <div className='titres'>
                            <p>
                                    Diplomé de l’Ecole d’Architecture et d’Urbanisme de Lomé (EAMAU) en 2017 et du Centre 
                                Africain d'Etudes Supérieures en Gestion (CESAG) en 2019, GARBA HAMIDOU Yacouba arbore 
                                une double casquette d’architecte et d’expert en gestion de projets. Il a travaillé en collaboration 
                                sur plusieurs projets aussi ambitieux, que riches en expérience au sein de deux cabinets d’architecture au Niger et au Sénégal.
                            </p>
                            <p>
                                  Membre de l’ordre des Architectes du Niger sous le N° 114/2017 et fort d’un parcours professionnel remarquable, il s’inscrit desormais dans une nouvelle dynamique architecturale, celle de 
                                repenser l’amenagement des villes africaines de demain en contribuant à l’édification de ces 
                                dernières à travers des projets ambitieux et durables.
                            </p>
                        </div>
                    </li>
                    <span className='bar__right'></span>
                    <li className='divulli'>
                        <div  className='divImg'>
                            <img src={liman} className='img' alt="oups" ></img> 
                            <h2 className='h1'>ABDOU LIMAN BOUBOU M.Moustapha</h2>
                            <h4 className="h1">Co-Founder, project manager</h4>
                        </div>
                        <div className='titres'>
                            <p>
                                 ABDOU LIMAN BOUBOU Mahamadou Moustapha est un architecte D.E.I.A.U diplômé de 
                                l’Ecole d’Architecture et d’Urbanisme de Lomé. Il a complété son cursus académique par un 
                                DPEA ReBuilding the World a l’Ecole Nationale Supérieure d’Architecture et de Paysage de 
                                Bordeaux qui fait de lui un expert en architecture durable et mutations environnementales
                            </p>
                            <p>
                                    Ce jeune parcours singulier est également marqué par plusieurs expériences réussies dans des 
                                agences d’architectures au Niger, au Togo puis en France en tant que stagiaires puis collaborateurs d’architecte. Résolument engagé dans la dynamique du développement durable, il prévoit 
                                l’évolution des projets avec résilience et adaptation dans ce monde en pleine mutation.
                            </p>
                        </div>
                        
                    </li>
                </ul>
           
            </div>
            
        </div>

        )

}

export default Equipes
