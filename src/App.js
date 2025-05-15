import React, { useState } from 'react';

function App() {
  const [operation, setOperation] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = (type) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Vui lòng nhập 2 số hợp lệ');
      return;
    }

    switch (type) {
      case 'add':
        setResult(a+b);
        break;
      case 'sub':
        
        break;
      case 'mul':
        
        break;
      case 'div':
        
        break;
      case 'avgAdd':
       
        break;
      case 'avgMul':
        
        break;
      case 'max':
        
        break;
      case 'min':
        
        break;
      default:
        setResult(null);
    }
  };

  const renderForm = () => (
    <div style={styles.form}>
      <input
        type="number"
        placeholder="Số thứ nhất"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Số thứ hai"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
      <button onClick={() => handleCalculate(operation)} style={styles.calculateButton}>
        Tính
      </button>
      {result !== null && <p style={styles.result}>Kết quả: {result}</p>}
    </div>
  );

  const operationLabel = {
    add: 'Phép Cộng',
    sub: 'Phép Trừ',
    mul: 'Phép Nhân',
    div: 'Phép Chia',
    avgAdd: 'Trung Bình Cộng',
    avgMul: 'Trung Bình Nhân',
    max: 'Số Lớn Hơn',
    min: 'Số Nhỏ Hơn',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🧮 Máy tính mở rộng</h2>
      <div style={styles.menu}>
        <button onClick={() => setOperation('add')} style={styles.menuButton}>Cộng</button>
        <button onClick={() => setOperation('sub')} style={styles.menuButton}>Trừ</button>
        <button onClick={() => setOperation('mul')} style={styles.menuButton}>Nhân</button>
        <button onClick={() => setOperation('div')} style={styles.menuButton}>Chia</button>
        <button onClick={() => setOperation('avgAdd')} style={styles.menuButton}>Trung Bình Cộng</button>
        <button onClick={() => setOperation('avgMul')} style={styles.menuButton}>Trung Bình Nhân</button>
        <button onClick={() => setOperation('max')} style={styles.menuButton}>Số Lớn Hơn</button>
        <button onClick={() => setOperation('min')} style={styles.menuButton}>Số Nhỏ Hơn</button>
      </div>

      {operation && (
        <div style={styles.formContainer}>
          <h3 style={styles.subtitle}>{operationLabel[operation]}</h3>
          {renderForm()}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    marginTop: '50px'
  },
  title: {
    textAlign: 'center',
    color: '#333'
  },
  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  menuButton: {
    padding: '10px 15px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
  },
  formContainer: {
    textAlign: 'center'
  },
  subtitle: {
    color: '#555'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
  },
  input: {
    padding: '8px',
    width: '80%',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  calculateButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  result: {
    marginTop: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#e74c3c'
  }
};

export default App;
