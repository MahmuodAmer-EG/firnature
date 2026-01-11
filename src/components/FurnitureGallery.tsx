import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { categories, furnitureItems, type Category } from "@/data/furniture";

export function FurnitureGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentCategory = categories.find((c) => c.id === selectedCategory);

  const filteredItems = furnitureItems.filter((item) => {
    if (selectedCategory === "all") return true;
    if (item.category !== selectedCategory) return false;
    if (selectedSubcategory && item.subcategory !== selectedSubcategory) return false;
    return true;
  });

  const getCategoryLabel = (cat: Category) => {
    return (
      <span className="flex flex-col items-center gap-0.5 text-sm">
        <span className="font-arabic">{cat.nameAr}</span>
        <span className="text-xs text-muted-foreground">{cat.nameEn}</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            <span className="font-arabic">معرض الأثاث</span>
          </h1>
          <p className="text-xl text-muted-foreground">Furniture Gallery</p>
        </header>

        {/* Category Tabs */}
        <Tabs
          value={selectedCategory}
          onValueChange={(value) => {
            setSelectedCategory(value);
            setSelectedSubcategory(null);
          }}
          className="w-full"
        >
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-6">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border"
            >
              <span className="flex flex-col items-center gap-0.5 text-sm">
                <span className="font-arabic">الكل</span>
                <span className="text-xs opacity-80">All</span>
              </span>
            </TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3 rounded-lg border"
              >
                {getCategoryLabel(category)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Subcategory Pills for Bedroom */}
          {currentCategory?.subcategories && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Button
                variant={selectedSubcategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSubcategory(null)}
                className="rounded-full"
              >
                <span className="font-arabic ml-1">الكل</span>
                <span className="text-xs">All</span>
              </Button>
              {currentCategory.subcategories.map((sub) => (
                <Button
                  key={sub.id}
                  variant={selectedSubcategory === sub.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSubcategory(sub.id)}
                  className="rounded-full"
                >
                  <span className="font-arabic ml-1">{sub.nameAr}</span>
                  <span className="text-xs">{sub.nameEn}</span>
                </Button>
              ))}
            </div>
          )}

          {/* Gallery Grid */}
          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => {
                const category = categories.find((c) => c.id === item.category);
                const subcategory = category?.subcategories?.find(
                  (s) => s.id === item.subcategory
                );

                return (
                  <Card
                    key={item.id}
                    className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${category?.nameEn} furniture`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-arabic text-lg font-semibold">
                            {subcategory?.nameAr || category?.nameAr}
                          </p>
                          <p className="text-sm opacity-90">
                            {subcategory?.nameEn || category?.nameEn}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* All Tab Content */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => {
                const category = categories.find((c) => c.id === item.category);
                const subcategory = category?.subcategories?.find(
                  (s) => s.id === item.subcategory
                );

                return (
                  <Card
                    key={item.id}
                    className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={`${category?.nameEn} furniture`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-arabic text-lg font-semibold">
                            {subcategory?.nameAr || category?.nameAr}
                          </p>
                          <p className="text-sm opacity-90">
                            {subcategory?.nameEn || category?.nameEn}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Furniture preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-muted-foreground font-arabic">
              لا توجد منتجات في هذه الفئة
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              No products in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
