// cons & vars
const list = [1, 2, 3, 4, 5, 6];
const milkSection =
{
    "title": "main",
    "questions": [
        "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
        "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
        "نظافة اعلي واسفل البنوك ",
        "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية ",
        "الالتزام بترتيب المنطقة المتفق عليه ",
        "نظافة المضرب ",
        "نظافة المبرد",
        "نظافة الاستاندات الثابتة ",
        "نظافة البرانيك المستخدمة في العملية الانتاجية "
    ]
};

//functions
function createSection() {
    Object.entries(milkSection).forEach(item => {
        console.log(item);
    });
};

// events
window.addEventListener("load", () => {
    console.log(milkSection["questions"]);

    createSection();
});
