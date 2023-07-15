import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-r, #0491EA, #F001EC)"
        bgClip="text"
        mt={4}
      >
        Trello App
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={100} />
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" px={0} py={8}>
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 1, md: 4 }}
          >
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;