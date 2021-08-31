const breeds = [
    {
        id: 1,
        type: "Golden Retriver",
    },
    {
        id: 2,
        type: "English Pointer",
    }
]




const dogBreeds = (favBreed) => {
    favBreed === breeds.type
    return ` My Favorite Dog is a ${favBreed}`
    
}


const favBreeds = dogBreeds("Golden Retriver")
console.log("When it comes to pets, my favorite is" + favBreeds )

