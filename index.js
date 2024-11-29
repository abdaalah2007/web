var bookmarkName = document.getElementById("bookmarkName");
var bookmarkUrl = document.getElementById("bookmarkUrl");
var bookmarkList = document.getElementById("tableBody");
var nameEror = document.getElementById("nameEror");
var abda;
if(localStorage.getItem("abda")){
        abda = JSON.parse(localStorage.getItem("abda"));
        displayProduct(abda);
} else{
        abda = [];
}



function addProdact() {
        if (productNamevalidation() === true) {
                abda.push({
                        name: bookmarkName.value,
                        url: bookmarkUrl.value
                })
                displayProduct(abda);
                saveToLocalStorage();
        } else {
                // alert("Please enter valid product name ");

        }


        
}

function displayProduct(book) {
        var box = "";
        for (var i = 0; i < book.length; i++) {
                box += `         <tr>
                                <td class="p-2">${i}</td>
                                <td  class="p-2">${book[i].name}</td>
                                <td  class="p-2"> <a href="${book[i].url}" class="btn btn-success "  target="_blank"><i class="fa-solid fa-eye pe-2"></i>visit</a></td>
                                <td onclick="Delete(${i})" class="p-2"  ><button class="btn btn-danger "><i class="fa-solid fa-trash-can pe-2 "></i>Delete</button></td>
                            </tr>`
        }
        bookmarkList.innerHTML = box;

}
function Delete(index) {
        abda.splice(index, 1);
                displayProduct(abda);
                saveToLocalStorage();
}
function productNamevalidation() {
        var regex = /[A-Za-z0-9]{3,}$/;
        if (regex.test(bookmarkName.value)) {
                bookmarkName.classList.toggle('is-invalid') ? bookmarkName.classList.replace("is-invalid", "is-valid")
                        : bookmarkName.classList.add("is-valid");

                return true
        }
        else {
                bookmarkName.classList.toggle('is-valid') ? bookmarkName.classList.replace("is-valid", "is-invalid")
                        : bookmarkName.classList.add("is-invalid");

                return false
        }
}

function urlvalidation() {
        var regex = /^htt(ps|p)?:\/\/.+?\..+$/;
        if (regex.test(bookmarkUrl.value)) {
                bookmarkUrl.classList.toggle('is-invalid') ? bookmarkUrl.classList.replace("is-invalid", "is-valid")
                        : bookmarkUrl.classList.add("is-valid");
                return true
        } else {
                bookmarkUrl.classList.toggle('is-valid') ? bookmarkUrl.classList.replace("is-valid", "is-invalid")
                        : bookmarkUrl.classList.add("is-invalid");
                return false
        }

}
function saveToLocalStorage() {
        localStorage.setItem("abda", JSON.stringify(abda)); 
         }



