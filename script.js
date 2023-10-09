//Masyvai
const numsArray = [5, 500, -5, 57.5, 4534, 4444]
//Indeksai          0   1    2   3      4    5

console.log(numsArray)
console.log(numsArray.length)

//console.log(numsArray[0])
//console.log(numsArray[1])
//console.log(numsArray[2])
//console.log(numsArray[3])
//console.log(numsArray[4])
//console.log(numsArray[5])

for (let i = 0; i < numsArray.length; i++) {
    console.log(numsArray[i])
}

const newArr = ['Vienas', 'Du', 5, true, [1, 2, 5]]
//indeksai          0       1    2    3       4
//                                        0  1  2

console.log(newArr)
console.log(newArr[0])
console.log(newArr[1])
console.log(newArr[2])
console.log(newArr[3])
console.log(newArr[4])
console.log(newArr[4][0])
console.log(newArr[4][1])
console.log(newArr[4][2])

console.log(newArr[1])
newArr[1] = 200
console.log(newArr[1])

newArr[newArr.length] = 500
console.log(newArr)

console.log(typeof newArr)

const cities = ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys']
console.log(cities)

//pop, push, shift ir unshift metodai modifikuoja (mutuoja) originalų masyvą.

//pop() metodas - pašalina paskutinį masyvo narį.
const lastCity = cities.pop()
console.log(lastCity)

cities.pop()

console.log(cities)

//shift() metodas - pašalina pirmą masyvo narį.
const firstCity = cities.shift()
console.log(firstCity)

cities.shift()

console.log(cities)

//push() metodas - prideda naują narį (narius) į masyvo pabaigą.
const updatedCitiesLength = cities.push('Šiauliai')
console.log(updatedCitiesLength)

cities.push('Panevėžys')
cities.push('Vilnius', 'Kaunas')

console.log(cities)

//unshift() metodas - prideda naują narį (narius) į masyvo pradžią.
const updatedCitiesLength2 = cities.unshift('Nida')
console.log(updatedCitiesLength2)

cities.unshift('Tauragė', 'Palanga')

console.log(cities)

const countries = ['Lithuania', 'Latvia', 'Poland', 'France', 'Germany', 'Italy'];
// Index                0          1         2          3         4         5
// Slice (+)      0           1         2         3         4          5        6
// Slice (-)     -6          -5        -4        -3        -2         -1      

//SLICE - nematuoja (nemodifikuoja) orignalaus masyvo
console.log('------------SLICE-------------')
console.log(countries)