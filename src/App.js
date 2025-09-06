import logo from "./assets/logo.png"
import work from "./assets/work_tree.png"
import style from './App.module.scss';
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(300);
  const [effects, setEffects] = useState([]);

  const handleClick = () => {
    setBalance(prev => prev + 0.1);
  
    const id = Date.now();
    const offsetX = Math.floor(Math.random() * 40 - 20);
  
    setEffects(prev => [...prev, { id, value: 0.1, offsetX }]);
  
    setTimeout(() => {
      setEffects(prev => prev.filter(e => e.id !== id));
    }, 1000);
  };

  return (
    <div className={style.layout}>
      <div className={style.layoutContainer}>
        <div className={style.containerLogo}>
          <img src={logo} alt='logo'/>
          <h1>Конопляна Ферма</h1>
        </div>

        <div className={style.workWrapper}>
          <img 
            onClick={handleClick} 
            className={style.work} 
            src={work} 
            alt="work tree"
          />
          {effects.map(e => (
            <span 
              key={e.id} 
              className={style.effect} 
              style={{ '--offsetX': `${e.offsetX}px` }}>+{e.value.toFixed(1)}
            </span>
          ))}
        </div>

        <div className={style.bottomPanel}>
          <div>
            <div className={style.profile}>
              <div className={style.nickname}>👤 Farmer123</div>
              <div className={style.balance}>💰 {balance.toFixed(1)}$</div>
            </div>
            <div className={style.menu}>
              <button>🛒 Магазин</button>
              <button>📦 Склад</button>
              <button>🌱 Ферма</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
