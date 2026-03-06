import React, { useState, useEffect } from 'react';
import axios from 'Axios';

export default function App() {

  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setNomes(res.data);
      })
  }
  )


  const [hora, setHora] = useState(12);
  const [minuto, setMinuto] = useState(59);
  const [segundo, setSegundo] = useState(57);

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundo(segundo + 1);
      if (segundo == 59) {
        setSegundo(0);
        setMinuto(minuto + 1)
        if (minuto == 59) {
          setMinuto(0);
          setHora(hora + 1);
        }
      }
    }, 1000);
    return () => clearInterval(interval);

  }, []);



  /* TESTE DE HOOKS
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Paulo");
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6]);
  const [obj, setObj] = useState({ nome: 'Paulo', idade: 28 });
  
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });
  */
  return (
    <div>
      <h2>{hora}:{minuto}:{segundo}</h2>

      {
        nomes.map(function (data) {
          return (
            <div>
              <h2>{data.name}</h2>
            </div>
          )
        })
      }
    </div>

  );
}



/* TESTE DE HOOKS

    <div>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count + 1)}>

        Click me

      </button>

    </div>

    */