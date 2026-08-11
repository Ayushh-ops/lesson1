import * as ts from "typescript";

const sourceCode = ts.createSourceFile(
    "example.ts",
    `import UserService from "./UserService";

class AuthService {
    login(username: string) {
        return UserService.login(username);
    }
}`,
    ts.ScriptTarget.Latest,
    true
);

// function visit(node: ts.Node) {
//     console.log(ts.SyntaxKind[node.kind]);

//     ts.forEachChild(node, visit);
// }

// function visit(node: ts.Node) {
//     if (node.kind === ts.SyntaxKind.ImportDeclaration) {
//         console.log("FOUND AN IMPORT");
//     }

//     ts.forEachChild(node, visit);
// }

// function visit(node: ts.Node) {
//     if (node.kind === ts.SyntaxKind.ImportDeclaration) {
//         const importNode = node as ts.ImportDeclaration;

//         console.log(importNode.moduleSpecifier.getText());
//     }

//     ts.forEachChild(node, visit);
// }

// function visit(node: ts.Node) {
//     if (node.kind === ts.SyntaxKind.ImportDeclaration) {
//         const importNode = node as ts.ImportDeclaration;
//         console.log(importNode.moduleSpecifier.getText());
//     }

//     if (node.kind === ts.SyntaxKind.ClassDeclaration) {
//         const classNode = node as ts.ClassDeclaration;
//         console.log(classNode.name?.getText());
//     }

//     ts.forEachChild(node, visit);
// }

function visit(node: ts.Node) {
    if (node.kind === ts.SyntaxKind.ImportDeclaration) {
        const importNode = node as ts.ImportDeclaration;
        console.log(importNode.moduleSpecifier.getText());
    }

    if (node.kind === ts.SyntaxKind.ClassDeclaration) {
        const classNode = node as ts.ClassDeclaration;
        console.log(classNode.name?.getText());
    }

    if (node.kind === ts.SyntaxKind.MethodDeclaration) {
    const methodNode = node as ts.MethodDeclaration;

    console.log(methodNode.name.getText());
}

    ts.forEachChild(node, visit);
}

visit(sourceCode);