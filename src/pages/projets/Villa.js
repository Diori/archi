import React, { useState, useEffect } from 'react'
import {  ref,  onValue, query, orderByChild, equalTo } from "firebase/database";
import fireDB from '../../firebase';
import {Link} from 'react-router-dom'

function Villa() {
    const [projetList, setProjetList] = useState({});

    const lien = "../images/";
    const lienp = '/projet/';

    useEffect(() => {
        const db = fireDB;
        const starCountRef = query(ref(db, '2/data'),orderByChild('type'),equalTo('villa'));
        
        onValue(starCountRef, (snapshot) => {
            setProjetList({ ...snapshot.val() });
            
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

export default Villa
