import Title from './components/Title';
import NewYear from './assets/new-year1.jpg';
import Contador from './components/Contador';
import useCountDown from './hooks/useCountDown';
import Span from './components/Title';
import './App.css';

function App() {
  // Defina a data inicial e os meses a serem adicionados
  const initialDate = '11/15/2025 00:00:01'; /* MM/DD/YYY      */
  const monthsToAdd = 0; // Exemplo: 6 meses para frente

  const [day, hour, minute, second] = useCountDown(initialDate, monthsToAdd);

  return (
    <div className='App' style={{ backgroundImage: `url(${NewYear})` }}>
      <div className='container'>
        <Title title="Aniversário de 50 Anos Waltercon" />
        <Span span="15/11/2025" />

        <div className='contagem-regressiva'>
          <Contador title="Dias" number={day} />
          <Contador title="Horas" number={hour} />
          <Contador title="Minutos" number={minute} />
          <Contador title="Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;



/*import Title from './components/Title'
import NewYear from './assets/new-year1.jpg'
import Contador from './components/Contador'
import useCountDown from './hooks/userCountDown'
import Span from './components/Title'
import './App.css'

function App() {
  const [day, hour, minute, second] = useCountDown('01/01/2025 00:00:00')
  return (
    <div className='App' style={{ backgroundImage: `url(${NewYear})` }}>
      <div className='container'>
        <Title title="Aniversário de 50 Anos" />
        <Span span="2025" />

        <div className='contagem-regressiva'>
          <Contador title="Dias" number={day} />

          <Contador title="Horas" number={hour} />

          <Contador title="Minutos" number={minute} />

          <Contador title="Segundos" number={second} />

        </div>

      </div>
    </div>
  )
}

export default App */
