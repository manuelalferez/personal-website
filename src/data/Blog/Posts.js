const posts = [
  /*  {
     //COPY AND PASTE TO CREATE ANOTHER POST
    title: "",
    summary: ["", ""],
    key: "",
    date: {
      year: "",
      month: "",
      day: ""
    }
  }, */
  {
    title: "What is [at] and [dot]?",
    category: 'Computing',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "1",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "The true about reality?",
    category: 'Reflections',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "2",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "El perro y el dueño",
    category: 'Books',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "3",
    date: {
      year: "2019",
      month: "6",
      day: "3"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "La niña y el niño",
    category: 'Books',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "4",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Por qué la economía funciona así?",
    category: 'Politics',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "5",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Como hacer un blog",
    category: 'Computing',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "6",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Un vistazo al amor",
    category: 'Reflections',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "7",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "What is [at] and [dot]?",
    category: 'Computing',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "8",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "The true about reality?",
    category: 'Reflections',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "9",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "El perro y el dueño",
    category: 'Books',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "10",
    date: {
      year: "2019",
      month: "6",
      day: "3"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "La niña y el niño",
    category: 'Books',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "11",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Por qué la economía funciona así?",
    category: 'Politics',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "12",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Como hacer un blog",
    category: 'Computing',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "13",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  },
  {
    title: "Un vistazo al amor",
    category: 'Reflections',
    summary: [
      "When we share our mail over the internet it is very important to offer it securely. A very simple and useful way and in this way avoid being spammed."
    ],
    key: "14",
    date: {
      year: "2019",
      month: "6",
      day: "2"
    },
    link: "https://telegra.ph/What-is-at-and-dot--Qu%C3%A9-es-at-y-dot-06-02",
    languages: {
      spanish: true,
      english: true
    }
  }
];

export default posts;
