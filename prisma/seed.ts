import prisma from "../src/lib/prisma";

async function main() {
  // Clean the database
  await prisma.deal.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // Seed categories
  const categoriesData = [
    {
      name: "Îngrijirea pielii",
      image: "/images/categories/4f0b405d-1db0-4e89-9c22-f56555d1de8f.png",
      slug: "skincare",
    },
    {
      name: "Îngrijirea corpului",
      image: "/images/categories/b7ebe4ee-3731-4204-8f1b-396d7b698786.png",
      slug: "bodycare",
    },
    {
      name: "Genți",
      image: "/images/categories/5c3b78a6-c808-4030-9800-bacb23d20918.png",
      slug: "bags",
    },
    {
      name: "Încălțăminte",
      image: "/images/categories/aab83726-9584-4e8a-84a2-9d45c8374d3e.png",
      slug: "shoes",
    },
    {
      name: "Machiaj",
      image: "/images/categories/ee14e44a-18c4-499d-8daa-2f0f2325b925.png",
      slug: "makeup",
    },
    {
      name: "Accesorii",
      image: "/images/categories/155ef57c-e785-4a23-bd82-f0bf618a9f34.png",
      slug: "accessories",
    },
    {
      name: "Bărbați",
      image: "/images/categories/man.png",
      slug: "men",
    },
    {
      name: "Femei",
      image: "/images/categories/woman.png",
      slug: "women",
    },
  ];

  const categories = await Promise.all(categoriesData.map((cat) => prisma.category.create({ data: cat })));
  const categoryMap = Object.fromEntries(categories.map((cat) => [cat.name.toUpperCase(), cat.id]));

  // Create products (use categoryId, keep all image links and data unchanged)
  await prisma.product.createMany({
    data: [
      {
        name: "Ser pentru față cu ulei de măceșe",
        description:
          "Un ser facial organic luxos, cu ulei de măceșe și vitamina C pentru a ilumina, fermiza și reîntineri pielea. Bogat în antioxidanți și acizi grași esențiali.",
        price: 58.0 * 18,
        images: ["/images/products/86fb5032-538b-49f6-8f14-0d28b708c447.png"],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "UNISEX",
        ingredients: ["Ulei de măceșe organic", "Vitamina C", "Acid hialuronic", "Ulei de jojoba", "Ulei de cătină"],
        benefits: [
          "Reduce liniile fine și ridurile",
          "Uniformizează tonul pielii",
          "Stimulează producția de colagen",
          "Hidratează în profunzime",
        ],
        howToUse:
          "Aplicați 4-5 picături pe pielea curată și umedă dimineața și seara. Masați ușor pe față, gât și decolteu.",
        size: "30ml",
        sku: "RS-001",
        stock: 100,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: true,
        dealLabel: "Reduceri de primăvară",
      },
      {
        name: "Ulei de corp cu lavandă",
        description:
          "Un ulei de corp calmant care hrănește pielea și liniștește simțurile cu lavandă organică și mușețel. Perfect pentru masaj sau hidratare după baie.",
        price: 32.0 * 18,
        images: [
          "/images/products/40196cbe-85dc-4e3a-9d98-477e8ae31600.png",
          "/images/products/8dfddb59-fd7f-4d03-858a-3b4c05b165b0.png",
        ],
        categoryId: categoryMap["ÎNGRIJIREA CORPULUI"],
        gender: "WOMEN",
        ingredients: [
          "Ulei de lavandă organic",
          "Ulei de migdale dulci",
          "Extract de mușețel",
          "Vitamina E",
          "Ulei de gălbenele",
        ],
        benefits: [
          "Hidratează în profunzime",
          "Promovează relaxarea",
          "Calmează pielea uscată",
          "Îmbunătățește elasticitatea pielii",
        ],
        howToUse: "Aplicați pe pielea umedă după baie. Poate fi adăugat și în apa de baie pentru o experiență luxoasă.",
        size: "100ml",
        sku: "LB-001",
        stock: 150,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Reduceri de primăvară",
      },
      {
        name: "Mască purificatoare cu argilă",
        description:
          "O mască de curățare profundă cu argilă kaolin și cărbune activ pentru a elimina impuritățile și a hrăni pielea cu extracte botanice organice.",
        price: 42.0 * 18,
        images: [
          "/images/products/46d3bfc6-2664-4e24-9063-39f1b21e3880.png",
          "/images/products/cb9c2900-d75b-4745-bdea-5e73f7bfbb26.png",
        ],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "WOMEN",
        ingredients: ["Argilă kaolin", "Cărbune activ", "Extract de ceai verde", "Aloe vera", "Ulei de arbore de ceai"],
        benefits: [
          "Detoxifică pielea",
          "Reduce porii",
          "Echilibrează producția de sebum",
          "Îmbunătățește claritatea pielii",
        ],
        howToUse:
          "Aplicați un strat uniform pe pielea curată. Lăsați 10-15 minute. Clătiți bine cu apă caldă. Utilizați de 1-2 ori pe săptămână.",
        size: "60ml",
        sku: "CM-001",
        stock: 75,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.7,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Cremă iluminatoare cu vitamina C",
        description:
          "O cremă hidratantă ușoară, dar puternică, cu vitamina C stabilizată și extracte de fructe pentru a ilumina, proteja și hidrata pielea.",
        price: 64.0 * 18,
        images: [
          "/images/products/90779807-1fe5-423f-bba4-8334931db782.png",
          "/images/products/818cfee4-1537-4d27-8404-67f2a632d474.png",
        ],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "WOMEN",
        ingredients: ["Vitamina C", "Extract de prune Kakadu", "Acid hialuronic", "Squalan", "Niacinamidă"],
        benefits: [
          "Iluminează tenul",
          "Estompează petele pigmentare",
          "Protejează împotriva radicalilor liberi",
          "Stimulează colagenul",
        ],
        howToUse:
          "Aplicați pe față și gât curate dimineața și seara. Folosiți cremă cu protecție solară pe timpul zilei.",
        size: "50ml",
        sku: "VC-001",
        stock: 200,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Cel mai vândut",
      },
      {
        name: "Unt de corp cu cocos și vanilie",
        description:
          "Un unt de corp bogat, spumos, care se topește în piele, oferind hidratare profundă cu ulei de cocos organic și vanilie. Perfect pentru pielea foarte uscată.",
        price: 38.0 * 18,
        images: ["/images/products/fd7a294c-c82a-4cac-87e5-72e7c6d5a67a.png"],
        categoryId: categoryMap["ÎNGRIJIREA CORPULUI"],
        gender: "WOMEN",
        ingredients: ["Ulei de cocos organic", "Unt de shea", "Extract de vanilie", "Vitamina E", "Ulei de migdale"],
        benefits: [
          "Hidratează intens",
          "Catifelează pielea aspră",
          "Îmbunătățește textura pielii",
          "Hidratare de lungă durată",
        ],
        howToUse:
          "Aplicați generos pe corp după baie sau ori de câte ori este nevoie. Insistați pe zonele uscate precum coatele și genunchii.",
        size: "200ml",
        sku: "BB-001",
        stock: 120,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Cremă de ochi rejuvenantă",
        description:
          "O cremă de ochi delicată, dar eficientă, cu cofeină și peptide pentru a reduce pungile, cearcănele și liniile fine din jurul ochilor.",
        price: 48.0 * 18,
        images: [
          "/images/products/a304a6a8-0b71-4383-8bce-f29328fddcb8.png",
          "/images/products/cliniccare-crema-rejuvenanta-de-ochi-si-buze-hyal-800200.jpg",
        ],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "WOMEN",
        ingredients: ["Cofeină", "Peptide", "Acid hialuronic", "Extract de ceai verde", "Vitamina K"],
        benefits: ["Reduce pungile", "Minimizează cearcănele", "Netezește liniile fine", "Hidratează zona ochilor"],
        howToUse:
          "Aplicați ușor o cantitate mică în jurul ochilor dimineața și seara. Folosiți degetul inelar pentru aplicare.",
        size: "15ml",
        sku: "EC-001",
        stock: 150,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.7,
        isDeal: true,
        dealLabel: "Cel mai vândut",
      },
      {
        name: "Demachiant calmant cu mușețel",
        description:
          "Un demachiant cremos, delicat, care îndepărtează eficient machiajul și impuritățile, calmând pielea sensibilă cu mușețel și gălbenele.",
        price: 34.0 * 18,
        images: [
          "/images/products/07b42571-e825-4996-8e43-c3c11c1abc5f.png",
          "/images/products/6bba9b46-5982-44b0-9759-7e31b8e38519.png",
        ],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "UNISEX",
        ingredients: ["Extract de mușețel", "Ulei de gălbenele", "Aloe vera", "Ceai verde", "Extract de castravete"],
        benefits: ["Curăță delicat", "Calmează iritațiile", "Îndepărtează machiajul", "Menține bariera pielii"],
        howToUse:
          "Masați pe pielea umedă cu mișcări circulare. Clătiți bine cu apă caldă. Utilizați dimineața și seara.",
        size: "120ml",
        sku: "CC-001",
        stock: 180,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Spray hidratant cu apă de trandafiri",
        description:
          "Un spray facial revigorant cu apă de trandafiri și acid hialuronic pentru a hidrata, calma și reîmprospăta pielea pe parcursul zilei.",
        price: 28.0 * 18,
        images: [
          "/images/products/4d8b542a-cafe-4aba-88f1-e7bec91b4421.png",
          "/images/products/5be3fde2-4d23-44ec-9221-15cfdc73200b.png",
        ],
        categoryId: categoryMap["ÎNGRIJIREA PIELII"],
        gender: "UNISEX",
        ingredients: ["Apă de trandafiri", "Acid hialuronic", "Glicerină", "Aloe vera", "Extract de castravete"],
        benefits: ["Hidratare instantă", "Calmează pielea", "Fixează machiajul", "Reîmprospătează tenul"],
        howToUse:
          "Țineți sticla la 15-20 cm de față și pulverizați uniform. Utilizați pe tot parcursul zilei, după nevoie. Poate fi aplicat peste machiaj.",
        size: "100ml",
        sku: "RM-001",
        stock: 200,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Reduceri de primăvară",
      },
      {
        name: "Geantă tote clasică din piele vegană",
        description:
          "O geantă tote spațioasă, atemporală, realizată din piele vegană premium. Perfectă pentru utilizarea zilnică.",
        price: 120.0 * 18,
        images: [
          "/images/products/0adf8a36-ef14-42d1-94de-20a66bc3a42e.png",
          "/images/products/639cba3f-764d-4f53-925f-1cb709ec94a2.png",
          "/images/products/d79e1eb1-3bee-472d-911c-50a349d8b3c6.png",
        ],
        categoryId: categoryMap["GENȚI"],
        gender: "WOMEN",
        ingredients: [],
        benefits: ["Spațioasă", "Durabilă", "Elegantă"],
        howToUse: "Transportați-vă lucrurile esențiale cu stil. Curățați cu o cârpă umedă.",
        size: "40x30x15cm",
        sku: "BG-001",
        stock: 50,
        isOrganic: false,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.6,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Adidași ecologici din pânză",
        description: "Adidași comozi și ecologici, realizați din pânză reciclată și tălpi din cauciuc natural.",
        price: 85.0 * 18,
        images: [
          "/images/products/e66342aa-b72b-4f0e-a5e2-d429953398a8.png",
          "/images/products/372a75c4-63e3-4fec-b8e3-2b0e30c9527e.png",
        ],
        categoryId: categoryMap["ÎNCĂLȚĂMINTE"],
        gender: "UNISEX",
        ingredients: ["Pânză reciclată", "Cauciuc natural"],
        benefits: ["Eco-friendly", "Confortabili", "Respirabili"],
        howToUse: "Purtați zilnic. Curățați local după nevoie.",
        size: "US 6-12",
        sku: "SH-001",
        stock: 80,
        isOrganic: false,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.7,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Ruj mat catifelat",
        description: "Un ruj vegan, bogat pigmentat, cu rezistență îndelungată și finisaj mat catifelat.",
        price: 24.0 * 18,
        images: [
          "/images/products/4f4e7918-df6a-4d7d-9485-419783061f45.png",
          "/images/products/0d19f8b0-72eb-4138-8514-9cc952e6562d.png",
        ],
        categoryId: categoryMap["MACHIAJ"],
        gender: "WOMEN",
        ingredients: ["Ulei de jojoba", "Vitamina E", "Pigmenți naturali"],
        benefits: ["Rezistență îndelungată", "Hidratant", "Vegan"],
        howToUse: "Aplicați direct pe buze. Reaplicați după nevoie.",
        size: "3.5g",
        sku: "MU-001",
        stock: 120,
        isOrganic: false,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: true,
        dealLabel: "Reduceri de primăvară",
      },
      {
        name: "Cercei rotunzi minimalisti din aur",
        description: "Cercei rotunzi, eleganți, placați cu aur, hipoalergenici, pentru purtare zilnică.",
        price: 35.0 * 18,
        images: [
          "/images/products/86a279cb-de3f-495d-b968-0dd3c0ba0094.png",
          "/images/products/af0b47fc-201d-436d-b246-b78c6ecd0be7.png",
        ],
        categoryId: categoryMap["ACCESORII"],
        gender: "WOMEN",
        ingredients: ["Alamă placată cu aur"],
        benefits: ["Hipoalergenici", "Ușori", "Design atemporal"],
        howToUse: "Purtați după preferință. Depozitați într-un loc uscat.",
        size: "2cm diameter",
        sku: "AC-001",
        stock: 100,
        isOrganic: false,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Gel de curățare cu cărbune pentru bărbați",
        description: "Un gel de curățare profundă pentru bărbați, cu cărbune activ și aloe vera.",
        price: 29.0 * 18,
        images: ["/images/products/16a8b8f4-7427-447a-a96c-63dc5a9f7de5.png"],
        categoryId: categoryMap["BĂRBAȚI"],
        gender: "MEN",
        ingredients: ["Cărbune activ", "Aloe vera", "Extract de ceai verde"],
        benefits: ["Curăță în profunzime", "Reduce sebumul", "Calmează pielea"],
        howToUse: "Masați pe fața umedă, clătiți bine. Utilizați dimineața și seara.",
        size: "150ml",
        sku: "MN-001",
        stock: 90,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.7,
        isDeal: false,
        dealLabel: null,
      },
      {
        name: "Loțiune după ras pentru ten sensibil",
        description:
          "Loțiune după ras pentru ten sensibil, fără alcool, ce calmează pielea după bărbierit, stimulează vindecarea micro-tăieturilor și previne iritațiile. Oferă o senzație de prospețime și bunăstare pentru întreaga zi.",
        price: 224,
        images: [
          "/images/products/1cddf033-b3ae-4aab-9737-57a06d352460.png",
          "/images/products/eb2fcf02-320c-4c15-a9d8-eaa55302857d.png",
        ],
        categoryId: categoryMap["BĂRBAȚI"],
        gender: "MEN",
        ingredients: ["Hamamelis (nucul vrăjitoarelor)", "Muşeţel", "Pantenol", "Ricin", "Vitamina E"],
        benefits: [
          "Calmează pielea sensibilă după bărbierit",
          "Stimulează vindecarea micro-tăieturilor",
          "Previne iritațiile și roșeața",
          "Nu conține alcool",
          "Oferă prospețime și confort",
        ],
        howToUse: "După ras, se aplică o cantitate mică de produs pe pielea curată și uscată. Se masează ușor.",
        size: "100ml",
        sku: "NIVEA-MEN-001",
        stock: 50,
        isOrganic: false,
        isVegan: false,
        isCrueltyFree: false,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Reducere primăvară",
      },
      {
        name: "Casete de rezervă pentru aparat de ras",
        description:
          "Set de 8 casete de rezervă pentru aparatul de ras Gillette Fusion, cu 5 lamele și bandă de gel reconfortant. Asigură un bărbierit fin, confortabil și protejează pielea împotriva iritațiilor. Gelul hidratant înmoaie firele de păr și facilitează alunecarea lamelor.",
        price: 1335,
        images: [
          "/images/products/06a230e8-7a25-4c8c-84dc-635e1aa6fb5a.png",
          "/images/products/f1e1e1bb-dddc-4794-9d6f-9b4fca55c653.png",
        ],
        categoryId: categoryMap["BĂRBAȚI"],
        gender: "MEN",
        ingredients: [
          "PEG-115M",
          "PEG-7M",
          "PEG-100",
          "Silica",
          "Tocopheryl Acetate (Vitamina E)",
          "Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate",
          "Tris(Di-T-Butyl)Phosphite",
          "Aloe Barbadensis Leaf Juice (Aloe Vera)",
          "BHT",
          "Glycol",
        ],
        benefits: [
          "Bărbierit fin și confortabil",
          "Protejează pielea împotriva iritațiilor",
          "Gel hidratant pentru o alunecare ușoară",
          "Păstrează pielea moale și hidratată",
          "Ușor de înlocuit",
        ],
        howToUse:
          "Înlăturați caseta veche a aparatului de ras, amplasați caseta nouă, apoi aplicați o cantitate mică de cremă/loțiune sau balsam pentru ras pe piele. După câteva secunde, radeți ușor. Clătiți la final cu apă.",
        size: "8 buc",
        sku: "GILLETTE-FUSION-8-001",
        stock: 30,
        isOrganic: false,
        isVegan: false,
        isCrueltyFree: false,
        rating: 4.8,
        isDeal: false,
        dealLabel: null,
      },
    ],
  });

  // Create deals and link products
  await prisma.deal.create({
    data: {
      label: "Reduceri de primăvară",
      description: "Reduceri la produse selectate pentru îngrijirea pielii și a corpului.",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week from now
      products: {
        connect: [{ sku: "RS-001" }, { sku: "LB-001" }, { sku: "RM-001" }],
      },
    },
  });

  await prisma.deal.create({
    data: {
      label: "Cel mai vândut",
      description: "Cele mai populare produse ale noastre.",
      products: {
        connect: [{ sku: "VC-001" }, { sku: "EC-001" }],
      },
    },
  });

  console.log("Seeding completed with categories, products, and deals.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
