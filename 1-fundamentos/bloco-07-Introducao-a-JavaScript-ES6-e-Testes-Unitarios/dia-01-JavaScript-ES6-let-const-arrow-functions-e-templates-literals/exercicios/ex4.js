
const substituiX = (frase, novoX) => {
    const fraseX = frase.split(' ');
    if (fraseX.includes('x')) {
        return frase.replace(/x/i, novoX);
    } else {
        console.warn('Não existe x nesta frase');
    }
    
}

function montaFrase(frase, skills) {
    skills.sort();
    console.log(`${frase} Minhas cinco principais habilidades são:`)
    for (let i = 0; i < skills.length; i +=1) {
      console.log(` - ${skills[i]}`);
    }
}

const frase = "Tryber x aqui!";
const novoX = "Bebeto";
const fraseFormatada = substituiX(frase, novoX);

skills = ['HTML', 'JavaScript', 'CSS', 'ES6', 'Testes Unitários', 'Bootstrap']
montaFrase(fraseFormatada, skills)