import { ExternalLink, Eye, Github } from "lucide-react"
import Image from "next/image"

interface ActionsButtonsProps{
  githubUrl:string,
  images:string[],
  title:string,
  demoUrl:string,
}

export const ActionsButtons = ({githubUrl,images,title,demoUrl}:ActionsButtonsProps) => {
  return (
      <div className="flex gap-3">
             <button  className="mybutton button-outline flex-1"
               >
                 <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center">
                   <Github className="mr-2 h-4 w-4" />
                   GitHub
                     </span>
                   </a>
               </button>
              {/* Demo Button with Preview Tooltip */}
             
               <div className="relative flex-1 group/demo">
            <button  className="mybutton button-primary button-sm w-full"
   
              >
                 <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                     <span className="group-hover/demo:hidden flex items-center">
                       <ExternalLink className="mr-2 h-4 w-4" />
                       Demo
                     </span>
                     <span className="hidden group-hover/demo:flex items-center">
                       <Eye className="mr-2 h-4 w-4" />
                       Ver
                     </span>
                   </a>
               </button>
            
            
              {/* Preview Tooltip */}
                 <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 invisible group-hover/demo:opacity-100 group-hover/demo:visible transition-all duration-200 z-20 pointer-events-none">
                   <div className="relative rounded-lg overflow-hidden shadow-xl border border-border bg-card">
                     <Image
                       src={images[0] || "/placeholder.svg"}
                       alt={`${title} preview`}
                       width={192}
                       height={108}
                       className="object-cover"
                     />
                     <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                     <span className="absolute bottom-2 left-2 text-xs font-medium text-foreground">Vista previa</span>
                   </div>
                   <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-card border-r border-b border-border" />
                 </div>
               </div>
             </div>
          
  )
}