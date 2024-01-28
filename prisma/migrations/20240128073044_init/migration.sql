-- CreateTable
CREATE TABLE "GroceryList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "checked" BOOLEAN DEFAULT false,

    CONSTRAINT "GroceryList_pkey" PRIMARY KEY ("id")
);
