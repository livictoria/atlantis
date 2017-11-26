const mainIntitialState = {
  user: [
    {
      id: 0,
      name: 'Jim Halpert',
      numStars: 4,
      time: '9:30am - 1:00pm',
      skills: ['Wiring', 'Lighting', 'Fast Response'],
      image:
        'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    },
    {
      id: 1,
      name: 'Michelle Harris',
      numStars: 3,
      time: '2:00pm - 5:00pm',
      skills: ['Wiring', 'Technician'],
      image:
        'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    },
    {
      id: 2,
      name: 'Jim Halpert',
      numStars: 5,
      time: '9:30am - 1:00pm',
      skills: ['Wiring', 'lighting', 'fast response'],
      image:
        'https://images.unsplash.com/photo-1496361060943-f0ae4e7228f4?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    },
  ],
}

export const main = (state = mainIntitialState, action) => {
  switch (action.type) {
    default:
      return mainIntitialState
  }
}
