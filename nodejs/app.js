process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('tu a quel age ? ')
process.stdin.on('data', (number) => {
    if (number > 0 && number <= 99)
        console.log('tu est nee en ' + (2019 - number))

    else if(number <= 0 || number > 99)
        console.log('arrete de mytho ! donne ton vrai age!')
    else
        console.log('on ta demander ton age !! retard !!')

    process.exit()
})