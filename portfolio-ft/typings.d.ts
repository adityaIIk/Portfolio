interface SanityBody{

    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type:"image";
    asset:
    {
        _ref:string;
        _type:"reference";
    }
}

export interface PageInfo extends SanityBody {

    _type:"pageInfo";
    adderes:string;
    backgroundInformation:string; 
    email:string;
    role:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;   
}
export interface Technology extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Skill extends SanityBody {
    _type:"skill";
    image:Image;
    progress:number;
    title:string;
}

export interface Education extends SanityBody {
    _type:"education";
    institute:string;
    instituteImage:Image;
    institutetitle:string;
    dateEnded:date;
dateStarted:date;
isCurrentlyWorkingHere:boolean;
points:string[];
}

export interface Project extends SanityBody {
    titles:string;
    _type:"project";
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
}


export interface Social extends SanityBody {
    _type:"social";
    titles:string; 
    url:string;
}   

