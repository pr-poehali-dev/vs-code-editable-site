import { useState } from 'react';

const Index = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами.');
    setName('');
    setPhone('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ 
        backgroundColor: '#1e90ff', 
        color: 'white', 
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1>Школа программирования CODIRUM</h1>
        <p>Научим программировать с нуля</p>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#333', borderBottom: '2px solid #1e90ff', paddingBottom: '10px' }}>
            О школе
          </h2>
          <p style={{ lineHeight: '1.6', color: '#666' }}>
            CODIRUM - это онлайн школа программирования. Мы учим с нуля до трудоустройства.
            Наши преподаватели - практикующие разработчики.
          </p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#333', borderBottom: '2px solid #1e90ff', paddingBottom: '10px' }}>
            Наши курсы
          </h2>
          
          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ color: '#1e90ff' }}>Основы программирования</h3>
            <p>Длительность: 3 месяца</p>
            <p>Python, базовые алгоритмы и структуры данных</p>
            <p><strong>Цена: 25 000 ₽</strong></p>
          </div>

          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ color: '#1e90ff' }}>Web-разработка</h3>
            <p>Длительность: 6 месяцев</p>
            <p>HTML, CSS, JavaScript, React и создание сайтов</p>
            <p><strong>Цена: 45 000 ₽</strong></p>
          </div>

          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ color: '#1e90ff' }}>Мобильная разработка</h3>
            <p>Длительность: 5 месяцев</p>
            <p>React Native, создание приложений для iOS и Android</p>
            <p><strong>Цена: 50 000 ₽</strong></p>
          </div>

          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{ color: '#1e90ff' }}>Backend разработка</h3>
            <p>Длительность: 4 месяца</p>
            <p>Node.js, базы данных, API и серверная логика</p>
            <p><strong>Цена: 55 000 ₽</strong></p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#333', borderBottom: '2px solid #1e90ff', paddingBottom: '10px' }}>
            Почему мы?
          </h2>
          <ul style={{ lineHeight: '2', color: '#666' }}>
            <li>Опытные преподаватели из крупных IT-компаний</li>
            <li>Выдаём сертификат о прохождении курса</li>
            <li>Помогаем с трудоустройством</li>
            <li>Гибкий график обучения</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#333', borderBottom: '2px solid #1e90ff', paddingBottom: '10px' }}>
            Отзывы
          </h2>
          
          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#fff'
          }}>
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              "Отличная школа! За 6 месяцев научился создавать сайты с нуля. 
              Сейчас работаю junior-разработчиком."
            </p>
            <p><strong>Алексей Иванов</strong> - Web-разработка</p>
          </div>

          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#fff'
          }}>
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              "Преподаватели объясняют сложные вещи простым языком. Очень довольна результатом!"
            </p>
            <p><strong>Мария Петрова</strong> - Основы программирования</p>
          </div>

          <div style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            marginBottom: '15px',
            backgroundColor: '#fff'
          }}>
            <p style={{ fontStyle: 'italic', color: '#555' }}>
              "Курс дал мне все необходимые знания для работы. 
              Через месяц после окончания нашёл работу."
            </p>
            <p><strong>Дмитрий Сидоров</strong> - Backend разработка</p>
          </div>
        </section>

        <section style={{ 
          marginBottom: '40px',
          border: '2px solid #1e90ff',
          padding: '20px',
          backgroundColor: '#f0f8ff'
        }}>
          <h2 style={{ color: '#333', marginTop: '0' }}>Записаться на курс</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Ваше имя:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                Телефон:
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#1e90ff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Отправить заявку
            </button>
          </form>
        </section>
      </div>

      <footer style={{ 
        backgroundColor: '#333', 
        color: 'white', 
        padding: '20px',
        textAlign: 'center',
        marginTop: '40px'
      }}>
        <p>Контакты: info@codirum.ru | +7 (999) 123-45-67</p>
        <p>© 2024 CODIRUM</p>
      </footer>
    </div>
  );
};

export default Index;
