// импорт масива данных для разметки (для пропсов)
import user from '../json/user.json';
// импорт функции разметки
import Section from './Section';
import ProfileList from './ProfileList';

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
      <Section title="Топ недели">
        <ProfileList items={user} />
      </Section>
    </div>
  );
};
