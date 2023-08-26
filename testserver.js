const pictures = [
    {
        "id": "1",
        "imageUrl": "ykas,j",
        "caption": "String",
        "rate": {
            "rateCount": 1,
            "userId": "12"
        }
    },
    {
        "id": "2",
        "imageUrl": "ghatay",
        "caption": "String",
        "rate": {
            "rateCount": 1,
            "userId": "11"
        }
    },
    {
        "id": "3",
        "imageUrl": "eifuheo",
        "caption": "String",
        "rate": {
            "rateCount": 1,
            "userId": "12"
        }
    }
]

var getImage = function() {
    var uItd = pictures.filter(function  (e) {
        return e.rate.userId != "12";
    })
    console.log(uItd);
    
}

getImage();
