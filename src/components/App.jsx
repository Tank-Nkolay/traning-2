// импорт масива данных для разметки (для пропсов)
import user from '../json/user.json';
// импорт функции разметки
import Section from './Section';
// import PantingsList from './PantingsList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* общий контейнер */}
      <Section title="Топ недели">
        {/* <PantingsList items={pantings} /> */}
      </Section>
    </div>
  );
};
