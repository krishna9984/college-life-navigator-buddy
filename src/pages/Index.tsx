
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CategoryCard from '@/components/CategoryCard';
import QuoteBanner from '@/components/QuoteBanner';
import { collegeCategories } from '@/data/collegeData';
import { GraduationCap, Search, BookOpen, HeartPulse, Users, Wallet, Briefcase } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCategories = collegeCategories.filter(
    category => 
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.tips.some(tip => tip.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const iconMap = {
    "academics": <BookOpen className="h-4 w-4" />,
    "health": <HeartPulse className="h-4 w-4" />,
    "social": <Users className="h-4 w-4" />,
    "finance": <Wallet className="h-4 w-4" />,
    "career": <Briefcase className="h-4 w-4" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 pb-10">
      {/* Header Section */}
      <header className="px-4 pt-10 md:pt-20 pb-12 text-center">
        <div className="animate-float inline-block mb-3">
          <GraduationCap className="h-12 w-12 md:h-16 md:w-16 mx-auto text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
          College Life Navigator
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Your companion for navigating college life successfully. Find tips, resources, and guidance for every aspect of your college journey.
        </p>
      </header>
      
      <div className="container max-w-5xl">
        {/* Quote Banner */}
        <div className="mb-10">
          <QuoteBanner />
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for tips and resources..."
              className="pl-10 max-w-xl mx-auto"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Categories Section */}
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">All Categories</TabsTrigger>
              {collegeCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="hidden md:flex items-center gap-1.5">
                  {iconMap[category.id as keyof typeof iconMap]}
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCategories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
              {filteredCategories.length === 0 && (
                <div className="col-span-2 text-center py-10">
                  <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchQuery('')}
                    className="mt-2"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          {collegeCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                <CategoryCard category={category} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>Created with 💙 for college students everywhere</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
