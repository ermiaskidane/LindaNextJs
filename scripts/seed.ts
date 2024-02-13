const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "T-Shirt" },
        { name: "Shirts" },
        { name: "Jackets" },
        { name: "Hoodies" },
        { name: "polo Shirts" },
        { name: "Shorts" },
        { name: "Jumpers" },
        { name: "Football Shirts" },
        { name: "Trousers" },
        { name: "Jeans" },
        { name: "Socks" },
        { name: "Coats" },
      ]
    });

    await database.size.createMany({
      data: [
        { name: "XS", value: "xs" },
        { name: "S", value: "s" },
        { name: "M", value: "m" },
        { name: "L", value: "l" },
        { name: "XL", value: "xl" },
        { name: "2XL", value: "2xl" },
      ]
    });

    await database.color.createMany({
      data: [
        { name: "Black", value: "black" },
        { name: "Blue", value: "blue" },
        { name: "Green", value: "green" },
        { name: "White", value: "white" },
        { name: "Pink", value: "pink" },
        { name: "Grey", value: "grey" },
        { name: "Red", value: "red" },
        { name: "Brown", value: "brown" },
        { name: "Cream", value: "cream" },
        { name: "Orange", value: "orange" },
        { name: "Yellow", value: "yellow" },
        { name: "Gold", value: "gold" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}


main();

