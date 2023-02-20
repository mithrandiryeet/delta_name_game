function chooseAnimal(userName) {

    let inputLength = userName.length

if(inputLength < 4)
{

    console.log('your animal is a mouse');
    
}
else if(4 < inputLength < 6)
{
    console.log('your animal is a chupacabra');
}

}

//chooseAnimal("dadsfdasdfs");

$("#coolNameFactsOutput").html(chooseAnimal("dadsfdasdfs"));