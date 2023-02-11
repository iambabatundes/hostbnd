const properties = [
  {
    _id: "55908732fgcd74801",
    title: "The lastest brown in the city",
    subTitle: "Entire Appartment 6 bedrooms",
    description:
      "With a spacious layout and modern amenities, you'll have everything you need for a relaxing stay....",
    tag: "Super Host",
    location: "Victory IsLand, Lagos",
    rated: true,
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74802",
    title: "Nice Appartment in the center of Lagos",
    subTitle: "Entire House 5 bedrooms",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    location: "Island, Lagos",
    rated: true,
    price: "$520",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
  },
  {
    _id: "55908732fgcd74803",
    title: "Executive Room in Lagos Island",
    subTitle: "Room and Palour Self",
    description:
      "Soak up the sun on the private balcony or curl up on the plush sofa and watch your favorite show. Book now and experience the best of both worlds!...",
    rated: true,
    location: "Lekki, Lagos",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74804",
    title: "Beautiful and Adorable Appartment",
    subTitle: "Entire House 3 bedroom flat",
    description:
      "Escape to your own private oasis in this stunning room apartment. With breathtaking views and a stylish, contemporary design, you'll feel right at home...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    rated: true,
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
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
  },
  {
    _id: "55908732fgcd74806",
    title: "Luxury Rooms in Lagos Mainland",
    subTitle: "5 Rooms Apparment",
    description:
      "Step into luxury at this beautiful room apartment. With elegant furnishings and a warm, inviting atmosphere, you'll have everything you need for a truly unforgettable stay...",
    tag: "Luxury",
    location: "Ikeja, Lagos",
    rated: true,
    price: "$40",
    image:
      "https://images.unsplash.com/photo-1560448205-17d3a46c84de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74806",
    title: "Appartment in the centre of Lagos",
    subTitle: "A Room Self-contain",
    description:
      "From the sparkling clean bathroom to the plush bed, every aspect of this apartment has been designed to provide you with the ultimate comfort and relaxation...",
    rated: true,
    location: "Lekki, Lagos",
    price: "$3500",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74806",
    title: "Beautiful and comfortable Appartment",
    subTitle: "Entire House 4 bedrooms",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Luxury",
    location: "Ikoyi, Lagos",
    rated: true,
    price: "$1000",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
  {
    _id: "55908732fgcd74806",
    title: "Cozy and comfortable Appartment near the beach",
    subTitle: "Enitre House 6 bed",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Executive",
    location: "Ikeja, Lagos",
    rated: true,
    price: "$2500",
    image:
      "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

export function getProperties() {
  return properties;
}

export function getProperty(id) {
  return properties.find((p) => p._id === id);
}
