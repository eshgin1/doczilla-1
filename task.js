const testFolder = './directory0'; //адрес где мы находимся 

const fs = require('fs'); // получили файловую систему

const result = [];


function checkDirectory (directory){
    //смотрим содержимое папки

    fs.readdirSync(directory).forEach(file => {
        // создаем путь(адрес) и возвращаем его для проверки 
        const path = directory + '/' + file;
        const typeElem = fs.statSync(path)
        
        if(typeElem.isFile()){
            //пушим в массив если является файлом
            result.push(`${path}`);
        } else{
            //если папка то вызываем функцию и попадаем в новую директорию
            checkDirectory(path)
        }

    });
}
checkDirectory(testFolder);

// cоздаем массив и пушим в него содержимое файла в нужном формате utf-8
let fileContent = [];
result.forEach(elem => {
    fileContent.push(fs.readFileSync(elem, {encoding: 'utf-8'}));
})

fileContent.sort();
fileContent = fileContent.join('');

console.log(fileContent)




// Возможно я не совсем правильно понял "склеить содержимое в один текстовый файл", и просто склеил соддержимое массива)). Я даже не нашел статью об этом.


