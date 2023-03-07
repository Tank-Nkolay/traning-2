import React from 'react';
// импорт ЕМОШИОН стилизация
import { Container } from './App.styled';
// импорт функции разметки
import Section from '../Section';
import Clock from '../Clock';
import SummTs from '../SummTs/SummTs';

// =============================================================
export class App extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Section title="Clock">
          <Clock />
          <SummTs />
        </Section>
      </Container>
    );
  }
}
