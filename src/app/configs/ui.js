import images from "../images";

const WISH_API_LINK = "/api/wishes"; // local api endpoint
const cdnLink =
  "https://res.cloudinary.com/do6sozxbo/image/upload/f_auto,q_auto/v1/wedding5";

// common

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const weddingInfo = [
  {
    time: {
      date: "22/03",
      year: "2026",
      time: "11:00",
      full: "Chủ nhật, Ngày 22 Tháng 03 năm 2026",
    },
    address: "Sảnh 1 - Promes Center",
    street: "122 - 124 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
    phone: "1234 567 890",
    posision: "bottom left",
  },
];

// March 2026
const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 31],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 28, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

// invitation intro (first section)
const introSection = {
  mainImage:
    "https://res.cloudinary.com/dir9qcxah/image/upload/v1772618107/3_ncxs4u.jpg",
  brideFirstLetter: "P",
  groomFirstLetter: "M",
};

// profile section

const profileSection = {
  description:
    "Hôn nhân không phải là một điểm đến mà là một cuộc hành trình nơi mà hai người cùng xây dựng và phát triển",
  profiles: [
    {
      title: "groom",
      name: "Tuấn Minh",
      avatar: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772610518/DSC04920_aaiswu.jpg`,
      images: [`https://res.cloudinary.com/dir9qcxah/image/upload/v1772611047/DSC05358_dke4ic.jpg`, `https://res.cloudinary.com/dir9qcxah/image/upload/v1772611152/DSC05375_wydax1.jpg`],
    },
    {
      title: "bride",
      name: "Hà Phượng",
      avatar: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772610524/DSC04910_rm9qdt.jpg`,
      images: [`https://res.cloudinary.com/dir9qcxah/image/upload/v1772610970/-_FIX_LJF08104_qhedrp.jpg`, `https://res.cloudinary.com/dir9qcxah/image/upload/v1772533439/LJF07808_bjoodz.jpg`],
    },
  ],
};

// invitation section

const invitationSection = {
  activeDay: 22,
  activeDay2: 21
};

// album section

const albumSection = {
  images: [
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616837/8_m87hek.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616841/11_tkjge6.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616837/8_m87hek.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616840/10_ltogmw.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616838/7_dy1ygp.jpg`,    
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616839/9_nylma2.jpg`,
  ],
};

// guestbook section

const guestbookSection = {
  image: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616847/DSC05245_jnfdpl.jpg`,
  time: "23/03/2026",
};

// timer
const timerSection = {
  weddingTime: {
    year: 2026,
    day: 22,
    month: 3,
  },
};

// final section

const finalSection = {
  images: [
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616858/LJF07562_bgulks.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616860/LJF07895_fv1xew.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616846/DSC05057_i84lw7.jpg`,
    `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616845/DSC04997_opozmh.jpg`,
  ],
};

// Album Page

const albumPage = {
  topImage: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621760/LJF08605_bkyjuu.jpg`,
  bottomImage: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621987/LJF09069_nm8awe.jpg`,
  mainImage: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616841/11_tkjge6.jpg`,
};

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618092/LJF08840_k52eom.jpg`,
      },

      {
        id: 2,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618089/LJF08779_crlgpz.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 3,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772620640/LJF09116_ctqyql.jpg`,
      },
      {
        id: 4,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618090/LJF08799_iw0ulg.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618098/LJF09059_jijv5i.jpg`,
      },
      {
        id: 6,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618085/LJF08688_j9dvnv.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 7,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618087/LJF08725_zggl0m.jpg`,
      },
      {
        id: 8,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618095/LJF09002_obijhw.jpg`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 9,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616846/DSC05057_i84lw7.jpg`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 10,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772616844/DSC04957_iulcgr.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 11,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618079/LJF08256_cqkbgg.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 12,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621042/LJF07836_qqest9.jpg`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 13,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772618098/LJF09059_jijv5i.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 14,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621127/LJF09107_vwy9rx.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 15,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621512/LJF09098_yhdv3z.jpg`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 16,
        img: `https://res.cloudinary.com/dir9qcxah/image/upload/v1772621130/LJF09087_uupeed.jpg`,
      },
    ],
  },
];

const albums = [...albumA, ...albumB, ...albumC]; // for preview

const metaData = {
  main: {
    title: "Đám Cưới Minh Phượng | Kính Mời",
    graphImage:
      "https://res.cloudinary.com/dir9qcxah/image/upload/v1772616841/11_tkjge6.jpg",
  },

  wish: {
    title: "Tất cả lời chúc dành cho Minh Phượng",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/am11.jpg",
  },

  invitation: {
    title: "Báo Hỉ | Form Nhập Tên",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730394150/wedding5_1/a3.jpg",
  },
  album: {
    title: "Album của Minh Phượng",
    graphImage:
      "https://res.cloudinary.com/do6sozxbo/image/upload/v1730558395/wedding5/final3.jpg",
  },
};

export {
  weddingInfo,
  daysInMonth,
  albumPage,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  introSection,
  profileSection,
  invitationSection,
  albumSection,
  guestbookSection,
  timerSection,
  finalSection,
  WISH_API_LINK,
  metaData,
};
