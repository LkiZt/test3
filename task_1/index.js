import {encoded, translations} from './data.js'

function decodeFields(encoded, translations) {
    const decoded = [];

    const uniqueIds = new Set();

    encoded.forEach(obj => {
        const decodedObj = {};
        Object.entries(obj).forEach(([key, value]) => {
        
        if (key.endsWith('Id')) {
            const decodedValue = translations[value] || value;
            
            decodedObj[key] = decodedValue;
            
            if (!['groupId', 'service', 'formatSize', 'ca'].includes(key)) {
            
                uniqueIds.add(value);
            }
        
        } else {
            decodedObj[key] = value;
        }
        });
        decoded.push(decodedObj);
    });
    
    return { decoded, uniqueIds: Array.from(uniqueIds) };
    
}
    
const { decoded, uniqueIds } = decodeFields(encoded, translations);

console.log('Расшифрованные данные:');

decoded.forEach(obj => console.log(JSON.stringify(obj, null, 2)));

console.log('Уникальные id:');

const uniqueIdsArray = Array.from(uniqueIds);

for (let i = 0; i < uniqueIdsArray.length; i += 4) {

    console.log(uniqueIdsArray.slice(i, i + 4).join(', '));

}
