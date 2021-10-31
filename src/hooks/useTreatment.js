import {useState, useEffect} from 'react';

const useTreatment = () =>{
    const [treatment, setTreatment] = useState([]);
    useEffect(() => {
      fetch('/treatment.json')
        .then(res=>res.json())
        .then(data=>setTreatment(data))
    }, [treatment])

    return [treatment, setTreatment];
}

export default useTreatment;