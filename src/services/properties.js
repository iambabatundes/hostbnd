const properties = [
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",

    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    _id: "55908732fgcd74833",
    title: "The lastest brown in the city",
    subTitle: "Private Room",
    description:
      "Cozy and comfortable, this room apartment is the perfect retreat from the hustle and bustle of city life...",
    tag: "Super Host",
    rated: true,
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

export function getProperties() {
  return properties;
}

export function getProperty(id) {
  return properties.find((p) => p._id === id);
}
