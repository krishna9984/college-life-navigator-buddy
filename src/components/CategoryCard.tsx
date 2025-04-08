
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Book, Heart, Users, Briefcase, Wallet, BookOpen, HeartPulse, ChevronDown, ChevronUp, ExternalLink, Landmark, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CategoryType } from '@/data/collegeData';
import ResourceLink from './ResourceLink';

type CategoryCardProps = {
  category: CategoryType;
};

const iconMap: Record<string, React.ReactNode> = {
  "book-open": <BookOpen className="h-5 w-5" />,
  "heart-pulse": <HeartPulse className="h-5 w-5" />,
  "users": <Users className="h-5 w-5" />,
  "wallet": <Wallet className="h-5 w-5" />,
  "briefcase": <Briefcase className="h-5 w-5" />,
  "landmark": <Landmark className="h-5 w-5" />,
  "code": <Code className="h-5 w-5" />,
};

const colorMap: Record<string, string> = {
  "college-blue": "bg-blue-100 text-blue-700 border-blue-200",
  "college-purple": "bg-purple-100 text-purple-700 border-purple-200",
  "college-orange": "bg-orange-100 text-orange-700 border-orange-200",
  "college-green": "bg-green-100 text-green-700 border-green-200",
  "college-red": "bg-red-100 text-red-700 border-red-200",
  "college-teal": "bg-teal-100 text-teal-700 border-teal-200",
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="card-shadow overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className={cn("p-2 rounded-md", colorMap[category.color])}>
            {iconMap[category.icon]}
          </div>
          <div>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription className="mt-1">{category.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <h3 className="font-medium text-sm mb-2">Quick Tips:</h3>
        <ul className="space-y-1 text-sm">
          {expanded 
            ? category.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-primary min-w-4 pt-0.5">•</div>
                  <div>{tip}</div>
                </li>
              ))
            : category.tips.slice(0, 3).map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="text-primary min-w-4 pt-0.5">•</div>
                  <div>{tip}</div>
                </li>
              ))
          }
        </ul>
        
        {category.tips.length > 3 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-primary w-full flex items-center justify-center"
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
      
      <Separator />
      
      <CardFooter className="pt-4">
        <div className="w-full">
          <h3 className="font-medium text-sm mb-2">Resources:</h3>
          <div className="space-y-2">
            {category.resources.map((resource, index) => (
              <ResourceLink key={index} title={resource.title} url={resource.url} />
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
