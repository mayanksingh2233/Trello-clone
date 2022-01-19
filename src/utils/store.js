const cards = [
  {
    id: 'card-1',
    title: 'Trying to create trello ',
  },
  {
    id: 'card-2',
    title: 'Making  clone of trello board',
  },
  {
    id: 'card-3',
    title: 'Today i am creating a trello board  ',
  },
   {
    id: 'card-4',
    title: 'Today i am creating a trello board using Material Ui and Tailwind css  ',
  },
   {
    id: 'card-5',
    title: 'Material Ui and Chakra Ui is Used for creating User Interfaces   ',
  },
];

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'First Card',
      cards,
    },
    'list-2': {
      id: 'list-2',
      title: 'Second Card',
      cards: [ {
        id: 'card-1',
        title: 'Material Ui and Chakra Ui is Used for creating User Interfaces   ',
      },
       {
    id: 'card-2',
    title: 'Material Ui and Chakra Ui is Used for creating User Interfaces   ',
  },
  ],
    },
  },
  listIds: ['list-1', 'list-2'],
};

export default data;
