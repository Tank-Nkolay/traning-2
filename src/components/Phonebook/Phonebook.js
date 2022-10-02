import React from 'react';
// import PropTypes from 'prop-types';
import Section from '../Section/Section';
import Name from '../Name';

import { Markup, TitleContacts } from './Phonebook.styled.jsx';

class Phonebook extends React.Component {
  render() {
    const { contacts } = this.props;
    console.log(contacts);
    return (
      <Markup>
        <TitleContacts>Contacts</TitleContacts>
        <Section title="">
          <Name names={contacts} />
        </Section>
      </Markup>
    );
  }
}

export default Phonebook;

// ===================================
// ДЕФОЛТНОЕ значение ПРОПС
//   static defaultProps = {
//     initialValue: 5,
//   };
// static propTypes = {
//   //
// };
// ===================================

/* {this.countTotalFeedback() > '0' ? (
<Statistics
good={this.state.good}
neutral={this.state.neutral}
bad={this.state.bad}
total={this.countTotalFeedback()}
positivePercentage={this.countPositiveFeedbackPercentage()}
/>
) : (
<Notification message="There is no feedback" />
)} */
