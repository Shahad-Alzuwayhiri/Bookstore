const Book = [[1,'Start with why','Simon Sinek',80.0,13],
[2,'But how do it know','J. Clark Scott',59.9,22],
[3,'Clean Code','Robert Cecil Martin',50.0,5],
[4,'Zero to One','Peter Thiel',45.0,12],
[5,'You dont know JS','Kyle Simpson',39.9,9]];
//console.log(Book);
//للوصول الى اي عنصر من عناصر المصفوفة
//console.log(Book[0][3]); // نكتب رقم المصفوفة 
//--------------------------------------------------
//لتحديث قيمة المصفوفة 
Book[1][3] = 53.9;// نكتب رقم المصفوفة 
//console.log (Book);
//--------------------------------------------------
Book.shift();// لحذف اي عنصر من المصفوفة
//console.log(Book);
//--------------------------------------------------
Book.push([1,'Start with why','Simon Sinek',60.0,15]) //لاضافة عناصر جديدة 
//console.log(Book);
//--------------------------------------------------

// الاستعلام عن كتاب
let query = 1; // يمكن أن يكون رقم الكتاب، العنوان، أو اسم المؤلف
let found = false;

for (let i = 0; i < Book.length; i++) { // تعديل هنا
    if (Book[i][0] == query || Book[i][1].toLowerCase() === query.toString().toLowerCase() || Book[i][2].toLowerCase() === query.toString().toLowerCase()) {
        console.log(`"The requested book was found
            Book ID: ${Book[i][0]}
            Title: ${Book[i][1]}
            Author: ${Book[i][2]}
            Price: ${Book[i][3]}
            Quantity: ${Book[i][4]}`); // تعديل هنا
        found = true;
        break;
    }
}
if (!found) {
    console.log("The requested book was not found.");
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function purchaseBook(bookTitle, quantityRequested, customerBalance) {
    for (let i = 0; i < Book.length; i++) { // عملية التكرار 
        let currentBook = Book[i];

        // التحقق من تطابق العنوان
        if (currentBook[1].toLowerCase() === bookTitle.toLowerCase()) {
            let availableQuantity = currentBook[4];
            let bookPrice = currentBook[3];
            let totalCost = bookPrice * quantityRequested;

            // التحقق من توفر الكمية
            if (quantityRequested > availableQuantity) {
                return "The requested quantity is not available.";
            }
            // التحقق من كفاية الرصيد
            else if (customerBalance < totalCost) {
                return "The balance is insufficient to complete the purchase.";
            }
            // إتمام عملية الشراء وتحديث المخزون
            else {
                Book[i][4] -= quantityRequested;
                let remainingBalance = customerBalance - totalCost;

                // إنشاء الفاتورة
                let invoice = {
                    bookTitle: currentBook[1],
                    quantityPurchased: quantityRequested,
                    unitPrice: bookPrice,
                    totalCost: totalCost,
                    remainingBalance: remainingBalance
                };

                return invoice;
            }
        }
    }
    return "The book was not found in the inventory.";
}

// اختبار الدالة
let bookTitle = "Start with why";  // اسم الكتاب
let quantityRequested = 1;         // الكمية المطلوبة
let customerBalance = 100.00;      // رصيد العميل

let result = purchaseBook(bookTitle, quantityRequested, customerBalance);
console.log(result);