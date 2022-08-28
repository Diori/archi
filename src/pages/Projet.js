import React, { useState, useEffect } from 'react'
import './Projet.css'
import {  ref,  onValue, query, orderByChild, equalTo, limitToFirst } from "firebase/database";
import fireDB from '../firebase';


function Projet(props) {
   
    const [projetIU, setProjetIU] = useState({});
    const [projetI, setProjetI] = useState({});
    const [projet, setProjet] = useState({});
    const [recuperimg, setRecuperImg] = useState();

    const lien = "../images/";
  

    useEffect(() => {
        const db = fireDB;
        const starCountRef = query(ref(db, '2/data'),orderByChild('id_projet'),equalTo(`${props.match.params.id}`));
        
        onValue(starCountRef, (snapshot) => {
            setProjetI({ ...snapshot.val() });
            
    });
    }, [props.match.params.id]);

    useEffect(() => {
        const db = fireDB;
        const starCountRef = query(ref(db, '3/data'),orderByChild('id_projet'),equalTo(`${props.match.params.id}`));
        
        onValue(starCountRef, (snapshot) => {
            setProjet({ ...snapshot.val() });
            console.log(snapshot.val())
            
        });
    }, [props.match.params.id]);
    
    useEffect(() => {
        const db = fireDB;
        const starCountRef = query(ref(db, '2/data'),orderByChild('id_projet'),equalTo(`${props.match.params.id}`),limitToFirst(1));
        
        onValue(starCountRef, (snapshot) => {
            setProjetIU({ ...snapshot.val() });
            console.log(snapshot.val())
           
        });
    }, [props.match.params.id])   
    return (
      
        <div className='conetnues'>
        
        <div className='voirImg'>
        <div className='imgVoir'> 
        {Object.keys(projetIU).map((id, index)=>{
            return recuperimg ? (<img key='0' className='img__cover' src={recuperimg}/>) : (<img className='img__cover' key={id} src={lien + projetIU[id].nom_image}/>)
        })
    }
            </div>
            <div className='divfleche'><a className='arrow down'>&#65088;</a></div>
        <div  className='app_projet'>
        {Object.keys(projetI).map((id, index)=>{
            return(
                <div className='divimgprojet' key={id}>
                    <div className='pourImg'>
                        <ul className='ulImgProjet'>
                            <li>
                                <img className='ImgProjet'  src={[lien + projetI[id].nom_image]} alt="Cinque Terre" onClick={(e)=> setRecuperImg(e.target.src)}/>
                            </li>
                        </ul>    

                    </div>         
               
                </div>
            )
        }) }
        </div>
        </div>
        {Object.keys(projet).map((id, index)=>{
            return(
                <div className='divdetail' key={id}>
                <div className='description'>                
                <h2>{projet.titre}</h2>                
                <div className='projetText'>
                <p>
                L’objectif principal de notre recherche est de montrer à tous les acteurs qui sont ou veulent s’engager dans le monde numérique, l’importance de la qualité des logiciels. A cela s’ajoute un objectif spécifique à savoir les critères déterminant la qualité software et aussi comment l’intégrer.
Le monde d’aujourd’hui et de demain sont dans un univers d’informations entre les périphériques via un réseau informatique et par le biais d’un logiciel ainsi notre motivation de recherche se porte sur l’étude de la qualité des logiciels.

                </p> 
                </div>            
                
                </div>
                <div>
                <div className='detailprojet'>
                <ul>
                        <li><strong>Localité :</strong>{projet[id].lacalite}</li>
                        <li><strong>Surface :</strong>{projet[id].surface}</li>
                        <li><strong>Phase :</strong>{projet[id].etat}</li>
                        <li><strong>durée :</strong>24 mois</li>
                        <li><strong>Maitre d'ouvrage : </strong>{projet[id].maitre_ouvrage}</li>
                        <li><strong>Maitre d'oeuvre : </strong>{projet[id].maitre_oeuvre}</li>
                    </ul>        
                </div>
                </div>   
                </div>
                )})
            }

            
        </div>
    )
}

export default Projet
