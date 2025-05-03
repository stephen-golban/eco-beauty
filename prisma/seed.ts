import prisma from "../src/lib/prisma";

async function main() {
  // Clean the database
  await prisma.deal.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // Seed categories
  const categoriesData = [
    {
      name: "Skincare",
      image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=2070&auto=format&fit=crop",
      slug: "skincare",
    },
    {
      name: "Bodycare",
      image:
        "https://images.pexels.com/photos/31851609/pexels-photo-31851609/free-photo-of-vintage-medicine-bottles-displayed-in-valletta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "bodycare",
    },
    {
      name: "Bags",
      image:
        "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "bags",
    },
    {
      name: "Shoes",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "shoes",
    },
    {
      name: "Makeup",
      image:
        "https://images.pexels.com/photos/2586073/pexels-photo-2586073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "makeup",
    },
    {
      name: "Accessories",
      image:
        "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "accessories",
    },
    {
      name: "Men",
      image:
        "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "men",
    },
    {
      name: "Women",
      image:
        "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slug: "women",
    },
  ];

  const categories = await Promise.all(categoriesData.map((cat) => prisma.category.create({ data: cat })));
  const categoryMap = Object.fromEntries(categories.map((cat) => [cat.name.toUpperCase(), cat.id]));

  // Create products (use categoryId, keep all image links and data unchanged)
  await prisma.product.createMany({
    data: [
      {
        name: "Rosehip Renewal Face Serum",
        description:
          "A luxurious organic face serum powered by rosehip oil and vitamin C to brighten, firm and rejuvenate skin. Rich in antioxidants and essential fatty acids.",
        price: 58.0,
        images: [
          "https://images.pexels.com/photos/11635426/pexels-photo-11635426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/17466036/pexels-photo-17466036/free-photo-of-transformative-makeup-for-the-bold-and-beautiful.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "UNISEX",
        ingredients: ["Organic Rosehip Oil", "Vitamin C", "Hyaluronic Acid", "Jojoba Oil", "Sea Buckthorn Oil"],
        benefits: [
          "Reduces fine lines and wrinkles",
          "Evens skin tone",
          "Boosts collagen production",
          "Deeply hydrates",
        ],
        howToUse:
          "Apply 4-5 drops to clean, damp skin morning and night. Gently press into face, neck and décolletage.",
        size: "30ml",
        sku: "RS-001",
        stock: 100,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: true,
        dealLabel: "Spring Sale",
      },
      {
        name: "Lavender Dreams Body Oil",
        description:
          "A calming body oil that nourishes skin while soothing the senses with organic lavender and chamomile. Perfect for massage or after-bath moisturizing.",
        price: 32.0,
        images: [
          "https://images.pexels.com/photos/6815658/pexels-photo-6815658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/13534889/pexels-photo-13534889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["BODYCARE"],
        gender: "UNISEX",
        ingredients: ["Organic Lavender Oil", "Sweet Almond Oil", "Chamomile Extract", "Vitamin E", "Calendula Oil"],
        benefits: ["Deeply moisturizes", "Promotes relaxation", "Soothes dry skin", "Improves skin elasticity"],
        howToUse: "Apply to damp skin after bathing. Can also be added to bath water for a luxurious soak.",
        size: "100ml",
        sku: "LB-001",
        stock: 150,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Spring Sale",
      },
      {
        name: "Purifying Clay Mask",
        description:
          "A deep-cleansing mask made with kaolin clay and activated charcoal to draw out impurities while nourishing with organic botanicals.",
        price: 42.0,
        images: [
          "https://images.pexels.com/photos/7480282/pexels-photo-7480282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/6167443/pexels-photo-6167443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "UNISEX",
        ingredients: ["Kaolin Clay", "Activated Charcoal", "Green Tea Extract", "Aloe Vera", "Tea Tree Oil"],
        benefits: ["Detoxifies skin", "Reduces pore size", "Balances oil production", "Improves skin clarity"],
        howToUse:
          "Apply even layer to clean skin. Leave for 10-15 minutes. Rinse thoroughly with warm water. Use 1-2 times weekly.",
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
        name: "Brightening Vitamin C Cream",
        description:
          "A lightweight yet powerful moisturizer featuring stabilized vitamin C and fruit extracts to brighten, protect and hydrate skin.",
        price: 64.0,
        images: [
          "https://images.pexels.com/photos/15510370/pexels-photo-15510370/free-photo-of-choice-of-cosmetics.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/16769670/pexels-photo-16769670/free-photo-of-a-bottle-with-a-vitamin-c-serum-between-lemon-slices.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "UNISEX",
        ingredients: ["Vitamin C", "Kakadu Plum Extract", "Hyaluronic Acid", "Squalane", "Niacinamide"],
        benefits: ["Brightens complexion", "Fades dark spots", "Protects from free radicals", "Boosts collagen"],
        howToUse: "Apply to clean face and neck morning and evening. Follow with sunscreen during day use.",
        size: "50ml",
        sku: "VC-001",
        stock: 200,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Best Seller",
      },
      {
        name: "Coconut Vanilla Body Butter",
        description:
          "A rich, whipped body butter that melts into skin, providing deep hydration with organic coconut oil and vanilla. Perfect for extra dry skin.",
        price: 38.0,
        images: [
          "https://nclabeauty.com/cdn/shop/products/1500px_hibutter_coconut_02_3_800x.jpg?v=1649703720",
          "https://nclabeauty.com/cdn/shop/products/1500px_hibutter_coconut_06_3_1400x.jpg?v=1649703720",
        ],
        categoryId: categoryMap["BODYCARE"],
        gender: "WOMEN",
        ingredients: ["Organic Coconut Oil", "Shea Butter", "Vanilla Extract", "Vitamin E", "Almond Oil"],
        benefits: ["Intensely moisturizes", "Softens rough skin", "Improves skin texture", "Long-lasting hydration"],
        howToUse: "Apply generously to body after bathing or as needed. Focus on dry areas like elbows and knees.",
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
        name: "Rejuvenating Eye Cream",
        description:
          "A gentle yet effective eye cream with caffeine and peptides to reduce puffiness, dark circles and fine lines around the delicate eye area.",
        price: 48.0,
        images: [
          "https://images.pexels.com/photos/9743846/pexels-photo-9743846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/10110221/pexels-photo-10110221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "WOMEN",
        ingredients: ["Caffeine", "Peptides", "Hyaluronic Acid", "Green Tea Extract", "Vitamin K"],
        benefits: ["Reduces puffiness", "Minimizes dark circles", "Smooths fine lines", "Hydrates eye area"],
        howToUse: "Gently pat small amount around eye area morning and night. Use ring finger for application.",
        size: "15ml",
        sku: "EC-001",
        stock: 150,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.7,
        isDeal: true,
        dealLabel: "Best Seller",
      },
      {
        name: "Calming Chamomile Cleanser",
        description:
          "A gentle cream cleanser that effectively removes makeup and impurities while soothing sensitive skin with chamomile and calendula.",
        price: 34.0,
        images: [
          "https://images.pexels.com/photos/11757212/pexels-photo-11757212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/5264272/pexels-photo-5264272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "UNISEX",
        ingredients: ["Chamomile Extract", "Calendula Oil", "Aloe Vera", "Green Tea", "Cucumber Extract"],
        benefits: ["Gently cleanses", "Soothes irritation", "Removes makeup", "Maintains skin barrier"],
        howToUse:
          "Massage onto damp skin in circular motions. Rinse thoroughly with warm water. Use morning and night.",
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
        name: "Hydrating Rose Mist",
        description:
          "A refreshing facial mist with rose water and hyaluronic acid to hydrate, soothe and refresh skin throughout the day.",
        price: 28.0,
        images: [
          "https://images.pexels.com/photos/17220079/pexels-photo-17220079/free-photo-of-small-vial-lying-down-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          "https://images.pexels.com/photos/17220085/pexels-photo-17220085/free-photo-of-small-vial-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
        categoryId: categoryMap["SKINCARE"],
        gender: "UNISEX",
        ingredients: ["Rose Water", "Hyaluronic Acid", "Glycerin", "Aloe Vera", "Cucumber Extract"],
        benefits: ["Instant hydration", "Soothes skin", "Sets makeup", "Refreshes complexion"],
        howToUse:
          "Hold bottle 6-8 inches from face and spray evenly. Use throughout day as needed. Can be applied over makeup.",
        size: "100ml",
        sku: "RM-001",
        stock: 200,
        isOrganic: true,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.9,
        isDeal: true,
        dealLabel: "Spring Sale",
      },
      {
        name: "Classic Vegan Leather Tote Bag",
        description: "A timeless, spacious tote bag crafted from premium vegan leather. Perfect for everyday use.",
        price: 120.0,
        images: [
          "https://cdn.shopify.com/s/files/1/0071/8821/8399/products/ProfessionalVeganLeatherWorkTote-BlackCrossgrain_1200x.jpg?v=1678830732",
          "https://cdn.shopify.com/s/files/1/0071/8821/8399/products/ProfessionalVeganLeatherWorkTote-Black_1200x.jpg?v=1678830732",
        ],
        categoryId: categoryMap["BAGS"],
        gender: "WOMEN",
        ingredients: [],
        benefits: ["Spacious", "Durable", "Stylish"],
        howToUse: "Carry your essentials in style. Wipe clean with a damp cloth.",
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
        name: "Eco Canvas Sneakers",
        description: "Comfortable, eco-friendly sneakers made from recycled canvas and natural rubber soles.",
        price: 85.0,
        images: [
          "https://images.unsplash.com/photo-1517260911205-8a3b66e8a8a7?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80",
        ],
        categoryId: categoryMap["SHOES"],
        gender: "UNISEX",
        ingredients: ["Recycled Canvas", "Natural Rubber"],
        benefits: ["Eco-friendly", "Comfortable", "Breathable"],
        howToUse: "Wear daily. Spot clean as needed.",
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
        name: "Velvet Matte Lipstick",
        description: "A richly pigmented, long-lasting vegan lipstick with a soft matte finish.",
        price: 24.0,
        images: [
          "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        ],
        categoryId: categoryMap["MAKEUP"],
        gender: "WOMEN",
        ingredients: ["Jojoba Oil", "Vitamin E", "Natural Pigments"],
        benefits: ["Long-lasting", "Moisturizing", "Vegan"],
        howToUse: "Apply directly to lips. Reapply as needed.",
        size: "3.5g",
        sku: "MU-001",
        stock: 120,
        isOrganic: false,
        isVegan: true,
        isCrueltyFree: true,
        rating: 4.8,
        isDeal: true,
        dealLabel: "Spring Sale",
      },
      {
        name: "Minimalist Gold Hoop Earrings",
        description: "Elegant, hypoallergenic gold-plated hoop earrings for everyday wear.",
        price: 35.0,
        images: [
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
        ],
        categoryId: categoryMap["ACCESSORIES"],
        gender: "WOMEN",
        ingredients: ["Gold-plated Brass"],
        benefits: ["Hypoallergenic", "Lightweight", "Timeless design"],
        howToUse: "Wear as desired. Store in a dry place.",
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
        name: "Men's Charcoal Face Wash",
        description: "A deep-cleansing face wash formulated for men's skin, with activated charcoal and aloe vera.",
        price: 29.0,
        images: [
          "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
        ],
        categoryId: categoryMap["MEN"],
        gender: "MEN",
        ingredients: ["Activated Charcoal", "Aloe Vera", "Green Tea Extract"],
        benefits: ["Cleanses deeply", "Reduces oil", "Soothes skin"],
        howToUse: "Massage onto wet face, rinse thoroughly. Use morning and night.",
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
    ],
  });

  // Create deals and link products
  await prisma.deal.create({
    data: {
      label: "Spring Sale",
      description: "Discounts on select skincare and bodycare products.",
      startsAt: new Date(),
      endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 1 week from now
      products: {
        connect: [{ sku: "RS-001" }, { sku: "LB-001" }, { sku: "RM-001" }],
      },
    },
  });

  await prisma.deal.create({
    data: {
      label: "Best Seller",
      description: "Our most popular products.",
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
