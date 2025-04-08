
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceLinkProps {
  title: string;
  url: string;
}

const ResourceLink: React.FC<ResourceLinkProps> = ({ title, url }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors text-sm group"
    >
      <span>{title}</span>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
    </a>
  );
};

export default ResourceLink;
