import { React } from 'react';
import { Wrapper, Title, Text } from 'components/App.styled';

export default function Home() {
  return (
    <div>
      <title>Phonebook</title>
      <Wrapper>
        <Title>Phonebook</Title>
        <br />
        <Text>the best App for your contacts</Text>
      </Wrapper>
    </div>
  );
}
