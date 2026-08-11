
let repositoryname: string
let numberofcommits: number
let whetherrepositoryisprivate: boolean

function getCommitMessage(message:string){
    
}
   
interface file{
    name:string;
    path:string;
    language:string;
}

interface Commit1{
    sha:string;
    message:string;
    author1:string;
    date1:string;
}

interface Repositry{
    name:string;
    owner:string;
    isPrivate:boolean;
    numberofcommits:number;
}

const commit1:Commit1={
   sha:"hello",
   message:"is it correct?",
   author1:"or not?",
   date1:"19-10-1999"
};

const repo: Repositry={
    name:"string",
    owner:"string",
    isPrivate:false,
    numberofcommits:123
};

interface Repository{
    name:string;
    description?:string;
    isPrivate:boolean;
    language?:"Javascript"|"Typescript"|"Python";
}

// const repo1:Repository={
//     name:"hii",
//     description:"yaya",
//     isPrivate:true,
//     language:"Typescript"
// };

// const repo2:Repository={
//     name:"hii",
    
//     isPrivate:true
   
// };

interface Author {
    name: string;
    email: string;
}

interface Commit {
    sha: string;
    message: string;
    author: Author;
}

const commit: Commit = {
    sha: "a81f92",
    message: "Add payment retry logic",
    author: {
        name: "Ayush",
        email: "ayush@example.com"
    },
    
};

interface Repository11 {
    name1: string;
    commits: Commit[];
}

const repo11:Repository11={
    name1:"ayush",
     commits: [
        {
            sha: "a81f92",
            message: "Add payment retry logic",
            author: {
                name: "Ayush",
                email: "ayush@example.com"
            }
        },
        {
            sha: "yayyy",
            message: "Fix it",
            author: {
                name: "Rahul",
                email: "rahul@example.com"
            }
        }
    ]

};

repo11.commits.length
repo11.commits[1].message
repo11.commits[0].author.email

function getAuthorName(author:Commit): string{
    return commit.author.name;
}
getAuthorName(commit);


