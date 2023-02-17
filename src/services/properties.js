const properties = [
  {
    _id: "55908732fgcd74801",
    title: "The lastest brown in the city",
    subTitle: "6 Bedroom.",
    description:
      "With a spacious layout and modern amenities, you'll have everything you need for a relaxing stay....",
    tag: "Executive",
    location: "V.I, Lagos",
    rated: true,
    isRented: true,
    guest: 4,
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74802",
    title: "Nice Appartment in the center of Lagos",
    subTitle: "Entire House 5beds.",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    location: "Island, Lagos",
    rated: true,
    guest: 5,
    price: "$520",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
  },
  {
    _id: "55908732fgcd74803",
    title: "Executive Room in Lagos Island",
    subTitle: "Room & Palour Self",
    description:
      "Soak up the sun on the private balcony or curl up on the plush sofa and watch your favorite show. Book now and experience the best of both worlds!...",
    rated: true,
    tag: "Executive",
    location: "Lekki, Lagos",
    guest: 2,
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74804",
    title: "Beautiful and Adorable Appartment",
    subTitle: "Entire House 3beds",
    description:
      "Escape to your own private oasis in this stunning room apartment. With breathtaking views and a stylish, contemporary design, you'll feel right at home...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    isRented: true,
    rated: true,
    guest: 3,
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=913&q=80",
  },
  {
    _id: "55908732fgcd74805",
    title: "Appartment Next Lagos Beach",
    subTitle: "Entire House 6 bedroom",
    description:
      "From the fully equipped kitchen to the luxurious bedding, every detail has been carefully thought out to provide you with the ultimate comfort and convenience...",
    location: "Ikoyi, Lagos",
    rated: true,
    guest: 4,
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  },
  {
    _id: "55908732fgcd74806",
    title: "Luxury Rooms in Lagos Mainland",
    subTitle: "5 Bedrooms",
    description:
      "Step into luxury at this beautiful room apartment. With elegant furnishings and a warm, inviting atmosphere, you'll have everything you need for a truly unforgettable stay...",
    tag: "Luxury",
    location: "Ikeja, Lagos",
    rented: true,
    rated: true,
    guest: 2,
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74807",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    guest: 5,
    price: "$3500",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74808",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rated: true,
    guest: 4,
    price: "$14000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74809",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6bed",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "V.I, Lagos",
    rented: true,
    rated: true,
    guest: 5,
    price: "$2500",
    image:
      "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748010",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    guest: 5,
    price: "$3500",
    image:
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
  },
  {
    _id: "55908732fgcd748011",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rated: true,
    guest: 3,
    price: "$1000",
    image:
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748012",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6bed",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "V.I, Lagos",
    rated: true,
    guest: 5,
    price: "$2500",
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748013",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    guest: 5,
    price: "$3500",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748014",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rated: true,
    guest: 6,
    price: "$1000",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd748015",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    rated: true,
    guest: 5,
    price: "$3500",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
  },
  {
    _id: "55908732fgcd748016",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    guest: 7,
    price: "$4500",
    image:
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
  },
  {
    _id: "55908732fgcd748017",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rated: true,
    guest: 2,
    price: "$2000",
    image:
      "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748018",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    rated: true,
    guest: 5,
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748019",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    guest: 3,
    price: "$300",
    image:
      "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd748020",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4beds",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rented: true,
    rated: true,
    guest: 4,
    price: "$100",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd748021",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6bed",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    rated: true,
    guest: 3,
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80",
  },
];

export function getProperties() {
  return properties;
}

export function getProperty(id) {
  return properties.find((p) => p._id === id);
}
