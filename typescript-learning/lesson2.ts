interface Author {
    name: string;
    email: string;
}

interface Commit {
    sha: string;
    message: string;
    author: Author;
}



const commits: Commit[] = [
    {
        sha: "111",
        message: "Add login",
        author: {
            name: "Ayush",
            email: "ayush@example.com"
        }
    },
    {
        sha: "222",
        message: "Fix database bug",
        author: {
            name: "Rahul",
            email: "rahul@example.com"
        }
    }
];


const authorNames=commits.map(commit=>commit.author.name);

const ayushCommits = commits.filter(
    commit => commit.author.name === "Ayush"
);

const rahulCommits = commits.filter(
    commit => commit.author.name === "Rahul"
);

const message = commits.find(
    commit => commit.message === "Fix database bug"
);

if (message) {
    console.log(message.message)
}

async function getRepository() {
    const response = await fetch("some-api");
    const data = await response.json();

    return data;
}

async function getMessage(): Promise<string> {
    return "Hello";
}
// const message1 = await getMessage();

async function getCommits(): Promise<Commit[]> {
    const response = await fetch("");
    const data = await response.json();

    return data;
}


// export interface Commit {
//     sha: string;
//     message: string;
// }

// import { Commit } from "./Commit";


function getFirst<T>(items: T[]): T {
    return items[0];
}