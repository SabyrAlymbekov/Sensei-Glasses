// types/subscription.ts

interface SubscriptionItem {
  popular: boolean;
  name: string;
  price: number;
  description: string;
  included: string[];
}


const subscription: SubscriptionItem[] = [
  {
    name: 'Member',
    description: 'This is a member This is a member This is a member This is a member This is a member This is a member This is a member ',
    price: 9.99,
    included: ['Exclusive content', '5% Discount on Merch', 'Join the Community', 'Livestreaming Access'],
    popular: false,
  },
  {
    name: 'Family',
    description: 'This is a member This is a member This is a member This is a member This is a member This is a member Th',
    price: 9.99,
    included: ['Exclusive content', '5% Discount on Merch', 'Join the Community', 'Livestreaming Access'],
    popular: true
  },
  {
    name: 'Official',
    description: 'This is a member This is a member This is a member This is a member This is a member This is a member This is a member ',
    price: 9.99,
    included: ['Exclusive content', '5% Discount on Merch', 'Join the Community', 'Livestreaming Access'],
    popular: false
  }
]

export default subscription