import React from 'react';
// импорт ЕМОШИОН стилизация
import { Container } from './App.styled';
// импорт функции разметки
import Section from '../Section';
import Clock from '../Clock';

// =============================================================
export class App extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Section title="Clock">
          <Clock />
        </Section>
      </Container>
    );
  }
}
