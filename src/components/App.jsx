// импорт масива данных для разметки (для пропсов)
import user from '../json/user.json';
// импорт функции разметки
import Section from './Section/Section';
// import ProfileList from './ProfileList';
import Profile from './Profile/Profile';

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
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
    </div>
  );
};
