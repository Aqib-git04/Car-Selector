var selectcompany = document.getElementById("selectCompany");
var selectCar = document.getElementById("selectCar");
var mainModal = document.getElementById("main-modal");
var mainDiv = document.getElementById("main");

var cars={

    toyota:{
        corolla:{
           imageSrc: "https://tse1.mm.bing.net/th?id=OIP.sAELQnYrxpt3JD5Z4MWR0wHaFP&pid=Api",
           name:"corolla",
           model:"2024",
           color:['red',"green","blue"],
           mileage:"10 to 14 km",
           price:5000000

        },
        camry:{
            imageSrc: "https://o.aolcdn.com/images/dims?resize=2000%2C2000%2Cshrink&image_uri=https:%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-03%2F3afbc940-500c-11e9-bf33-0784c7e6825f&client=a1acac3e1b3290917d92&signature=38a52aa27830e69b585842405e595df242866409",
            name:"camery",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
        },
        aqua:{
            imageSrc: "https://tse1.mm.bing.net/th?id=OIP.HukVWLH47GmNm4oZvf2ITQHaDk&pid=Api&P=0&h=220",
            name:"Aqua",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
        }
    },
    honda:{
          city:{
           
            imageSrc: "https://tse2.mm.bing.net/th?id=OIP.KKm_4WChoof1fsx-zZXPxAHaEm&pid=Api&P=0&h=220",
            name:"city",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
          },
          brv:{
            
           imageSrc: "https://tse3.mm.bing.net/th?id=OIP.muAg8qfL08c0ocv3zdzv5QHaE7&pid=Api&P=0&h=220",
           name:"brv",
           model:"2024",
           color:['red',"green","blue"],
           mileage:"10 to 14 km",
           price:5000000
          },
          civic:{
     
            imageSrc: "https://wallpaperaccess.com/full/3321504.jpg",
            name:"civic",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
          }
    },
    suzuki:{
        alto:{
            imageSrc: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2f%2fcdni.autocarindia.com%2fExtraImages%2f20190422051033_2019-Maruti-Alto-800-front.jpg&h=795&w=1200&c=1",
            name:"alto",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
        },
        mehran:{
            imageSrc: "https://autodeals.pk/blog/wp-content/uploads/2022/04/suzuki-mehran-fuel-mileage.jpg",
            name:"mehran",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
        },
        wagonR:{
            imageSrc: "https://tse3.mm.bing.net/th?id=OIP.nWQJX8brqZhyRo0B5mpvSAHaEK&pid=Api&P=0&h=220",
            name:"wagonR",
            model:"2024",
            color:['red',"green","blue"],
            mileage:"10 to 14 km",
            price:5000000
        }
    },

    kia:{
    sportage:{
        imageSrc: "https://tse1.mm.bing.net/th?id=OIP.QUMCHcrq4mrJqq_JqxzExwHaE7&pid=Api&P=0&h=220",
        name:"sportage",
        model:"2024",
        color:['red',"green","blue"],
        mileage:"10 to 14 km",
        price:5000000
    },
    proton:{
        imageSrc: "https://tse1.mm.bing.net/th?id=OIP.nJjSW4JXyQD4lYxwTU4rfQHaEp&pid=Api&P=0&h=220",
        name:"proton",
        model:"2024",
        color:['red',"green","blue"],
        mileage:"10 to 14 km",
        price:5000000
    },
    picanto:{
        imageSrc: "https://s1.cdn.autoevolution.com/images/gallery/KIA-Picanto-5-doors-5861_36.jpg",
        name:"picanto",
        model:"2024",
        color:['red',"green","blue"],
        mileage:"10 to 14 km",
        price:5000000
    }
    }
};

// Function to display a specific car when the user selects it
function showCar() {
    var carModal = cars[selectcompany.value][selectCar.value];
    
    // Hide the mainDiv
    mainDiv.style.display = "none";

    // Show the mainModal
    mainModal.innerHTML = `<div id="card">
        <div class="card-body">
            <img src="${carModal.imageSrc}" class="card-img-top" alt="">
            <h5 class="card-title">${carModal.name} (${carModal.model})</h5>
            <p class="card-text">${carModal.mileage}</p>
            <p class="card-text">${carModal.price}</p>
            <div class="d-flex gap-2" id="color-div">${carModal.color}</div>
        </div>
    </div>`;
}

// Function to clear the selected car and show all cars again
function clearBtn() {
    // Show the mainDiv
    mainDiv.style.display = "flex";

    // Clear the content inside mainModal
    mainModal.innerHTML = "";

    // Reset the selectCar dropdown to its initial state

}

// Function to display all cars
function showAllCars() {
    selectcompany.innerHTML += `<option disabled selected value="">Select Company</option>`;
    selectCar.innerHTML += `<option disabled selected value="">Select Car</option>`;

    for (var key in cars) {
        selectcompany.innerHTML += `<option value="${key}">${key}</option>`;
        for (var key1 in cars[key]) {
            var value = cars[key][key1];
            selectCar.innerHTML += `<option value="${key1}">${key1}</option>`;
            var colorDiv = "";
            for (var i = 0; i < value.color.length; i++) {
                colorDiv += `<div class="${value.color[i]}"> </div>`;
            }
            mainDiv.innerHTML += `<div class="col-12 col-sm-12 col-md-6 col-lg-3">
               <div class="card" style="width:100%;">
                   <div class="card-body" id="cardiv">
                   <img src="${value.imageSrc}" class="card-img-top" alt="">
                     <h5 class="card-title">${key1.toUpperCase()} (${value.model})</h5>
                     <p class="card-text">${value.mileage}</p>
                     <p class="card-text">${value.price}</p>
                     <div class="d-flex gap-2" id="color-div">${colorDiv}</div>
                 </div>
            </div>`;
        }
    }
}

function company() {
    selectCar.innerHTML = "";
    for (var key in cars[selectcompany.value]) {
        selectCar.innerHTML += `<option value="${key}">${key}</option>`;
    }
}

// Initialize the page by showing all cars
showAllCars();
