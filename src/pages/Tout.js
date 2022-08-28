import React, { useState, useEffect } from 'react'
import {  ref,onValue,query, orderByChild,equalTo } from "firebase/database";
import fireDB from '../firebase';
import {Link} from 'react-router-dom'
import './Tout.css'

function Tout() {
    const [projetList, setProjetList] = useState({});

    const lien = "../images/";
    const lienp = '/projet/';

    useEffect(() => {
        const db = fireDB;
        const starCountRef = query(ref(db, '2/data'),orderByChild('screem'),equalTo('oui'));
        /*ref(db, '2/data/')*/
        onValue(starCountRef, (snapshot) => {
            setProjetList({ ...snapshot.val() });
            //console.log(snapshot.val())

           // updateStarCount(postElement, data);
});
    }, [])
    return (<div className='tout_main projetUmique'>
    {Object.keys(projetList).map((id, index)=>{ 
        return(
            <div className="responsive" key={id}>
            <div className="gallery" >  
                <Link to={lienp + projetList[id].id_projet} >
                <img src={lien + projetList[id].nom_image} alt="Cinque Terre"/>
                </Link>                  
                <div className="desc"> {projetList[id].titre} </div>
            </div>

        </div>
       )
        
    })}        
        <div className="clearfix"></div>            
    </div>
    )
}

export default Tout
