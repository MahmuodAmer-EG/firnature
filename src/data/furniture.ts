export interface FurnitureItem {
  id: string;
  image: string;
  category: string;
  subcategory?: string;
}

export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  subcategories?: {
    id: string;
    nameAr: string;
    nameEn: string;
  }[];
}

export const categories: Category[] = [
  {
    id: "atfal",
    nameAr: "أطفال",
    nameEn: "Children",
  },
  {
    id: "maktab",
    nameAr: "مكتب",
    nameEn: "Office",
  },
  {
    id: "neash",
    nameAr: "نيش",
    nameEn: "Living Room",
  },
  {
    id: "noum",
    nameAr: "نوم",
    nameEn: "Bedroom",
    subcategories: [
      { id: "serer", nameAr: "سرير", nameEn: "Bed" },
      { id: "serer2", nameAr: "سرير 2", nameEn: "Bed 2" },
      { id: "dolab", nameAr: "دولاب", nameEn: "Wardrobe" },
      { id: "komedino", nameAr: "كومودينو", nameEn: "Nightstand" },
      { id: "tasreha", nameAr: "تسريحة", nameEn: "Dressing Table" },
    ],
  },
  {
    id: "soufra",
    nameAr: "سفرة",
    nameEn: "Dining",
  },
];

export const furnitureItems: FurnitureItem[] = [
  // Atfal (Children)
  {
    id: "atfal-1",
    image: "/images/Atfal/1_5_db1ea3c8-4a29-4f51-8e8f-19424c5918e1.webp",
    category: "atfal",
  },
  {
    id: "atfal-2",
    image: "/images/Atfal/2._9b38a15f-4240-4242-9206-dfcf65ab7b90_1800x1800.webp",
    category: "atfal",
  },
  {
    id: "atfal-3",
    image: "/images/Atfal/3._7047be9f-35ca-4330-b7d2-e7a0f8510b7e_1800x1800.webp",
    category: "atfal",
  },
  {
    id: "atfal-4",
    image: "/images/Atfal/1_5_7f6684a3-8372-4f54-b257-6d342e76d12c_1800x1800.webp",
    category: "atfal",
  },

  // Maktab (Office)
  {
    id: "maktab-1",
    image: "/images/Maktab/1_4205c2f5-b4d9-4b32-86b4-d3cde18cdfce.webp",
    category: "maktab",
  },

  // Neash (Living Room)
  {
    id: "neash-1",
    image: "/images/Neash/6F4A3818_1800x1800.webp",
    category: "neash",
  },
  {
    id: "neash-2",
    image: "/images/Neash/10_994f13b6-96da-4df9-8bb2-072c8ef26525.jpg",
    category: "neash",
  },

  // Noum - Serer (Bedroom - Bed)
  {
    id: "noum-serer-1",
    image: "/images/Noum/Serer/e293b48a0f9a0f9a00211ec84b70b5d2_1800x1800.jpg",
    category: "noum",
    subcategory: "serer",
  },

  // Noum - Serer2 (Bedroom - Bed 2)
  {
    id: "noum-serer2-1",
    image: "/images/Noum/Serer2/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__0730840_pe737813_s5.avif",
    category: "noum",
    subcategory: "serer2",
  },
  {
    id: "noum-serer2-2",
    image: "/images/Noum/Serer2/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__1101552_pe866728_s5.avif",
    category: "noum",
    subcategory: "serer2",
  },
  {
    id: "noum-serer2-3",
    image: "/images/Noum/Serer2/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__1154405_pe886052_s5.avif",
    category: "noum",
    subcategory: "serer2",
  },
  {
    id: "noum-serer2-4",
    image: "/images/Noum/Serer2/malm-bed-frame-high-w-4-storage-boxes-black-brown-leirsund__1154412_pe886059_s5.avif",
    category: "noum",
    subcategory: "serer2",
  },

  // Noum - Dolab (Bedroom - Wardrobe)
  {
    id: "noum-dolab-1",
    image: "/images/Noum/Dolab/6F4A3749_0494e882-434f-4305-9fde-992a43857bbb_1800x1800.jpg",
    category: "noum",
    subcategory: "dolab",
  },
  {
    id: "noum-dolab-2",
    image: "/images/Noum/Dolab/6F4A3752_bd2b00d6-592f-4ebc-9ff4-58e8be78ab80_1800x1800.webp",
    category: "noum",
    subcategory: "dolab",
  },
  {
    id: "noum-dolab-3",
    image: "/images/Noum/Dolab/581d33e76f2e97cdfcc049d615dd69bc.webp",
    category: "noum",
    subcategory: "dolab",
  },
  {
    id: "noum-dolab-4",
    image: "/images/Noum/Dolab/41_b39a310d-3b52-4b3e-83d8-1a1ba16a3072.webp",
    category: "noum",
    subcategory: "dolab",
  },
  {
    id: "noum-dolab-5",
    image: "/images/Noum/Dolab/2_d121919d-0a01-498a-a6c6-1ad2d239c32e_1.webp",
    category: "noum",
    subcategory: "dolab",
  },
  {
    id: "noum-dolab-6",
    image: "/images/Noum/Dolab/1_a99bc904-48fa-49bc-8506-e678e97bbff5_1.webp",
    category: "noum",
    subcategory: "dolab",
  },

  // Noum - Komedino (Bedroom - Nightstand)
  {
    id: "noum-komedino-1",
    image: "/images/Noum/Komedino/9_eza0-t2_d73g-qj.png",
    category: "noum",
    subcategory: "komedino",
  },

  // Noum - Tasreha (Bedroom - Dressing Table)
  {
    id: "noum-tasreha-1",
    image: "/images/Noum/Tasreha/7_lv3a-ki_4z0i-qp.png",
    category: "noum",
    subcategory: "tasreha",
  },
  {
    id: "noum-tasreha-2",
    image: "/images/Noum/Tasreha/5_edhs-4d_kzbv-ct.png",
    category: "noum",
    subcategory: "tasreha",
  },
  {
    id: "noum-tasreha-3",
    image: "/images/Noum/Tasreha/PH164948-crop004.avif",
    category: "noum",
    subcategory: "tasreha",
  },

  // Soufra (Dining)
  {
    id: "soufra-1",
    image: "/images/Soufra/5_b4e353f9-8b20-493a-b793-68384a8447d0_1800x1800.jpg",
    category: "soufra",
  },
  {
    id: "soufra-2",
    image: "/images/Soufra/8_98c86534-8f3c-4a39-884c-6ca491b70632.webp",
    category: "soufra",
  },
];
