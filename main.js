const saveBtn = document.getElementById("saveBtn");
const exportBtn = document.getElementById("exportBtn");
const clearBtn = document.getElementById("clearBtn");
const msgBox = document.getElementById("msgBox");
const exportBtn = document.getElementById("export");
const clearBtn = document.getElementById("clear");
const KonafaQuestions = [
    "نظافة الابواب من الداخل والخارج و البلاعات  ",
    "نظافة الارضيات  ",
    "نظافة الاسقف وعدم تقشير الدهان  ",
    "نظافة حوض التعقييم ",
    "نظافة الحوائط والاركان بين االارضيات والحوائط ",
    "وجود كيس داخل  صناديق المخلفات ",
    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
    "التاكد من وجود صابون ايدي وكحول بالقسم ",
    "نظافة الصواني والصاجات المستخدمة ",
    "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
    "نظافة اعلي واسفل البنوك ",
    "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية ",
    "الالتزام بترتيب المنطقة المتفق عليه ",
    "نظافة الاستاندات الثابتة ",
    "نظافة ماكينة فرم الكنافة ",
    "نظافة وتصنيف دولاب الادوات المستخدمة ",
    "نظافة البرانيك المستخدمة في العملية الانتاجية ",
    "نظافة المضرب ",
    "نظافة الاستاندات وتعريف المنتجات في غرفة التبريد",
    " يتم تنظيف وغسيل ادوات التقطيع والماكينه  بعد ا الانتهاء من المنتجات المحتوي علي مسببات حساسية"
];


function save() {
    const inputs = document.querySelectorAll(".input");

    inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value); // 🔥 Save each input by its own ID
    });

    msgBox.textContent = "تم الحفظ";
    setTimeout(() => {
        msgBox.textContent = "";
    }, 1000);
}




// events
window.addEventListener("load", () => {
    KonafaQuestions.forEach((KonafaQuestion, index) => {
        // create html elements
        const question = document.createElement("div");
        const lable = document.createElement("span");
        const inputField = document.createElement("input");

        // assigning content to html elements
        lable.textContent = KonafaQuestion;

        // set attributes
        inputField.setAttribute("type", "text");
        inputField.setAttribute("id", `konafa_${index.toString()}`);

        // styling the elements
        question.classList.add("question");

        lable.classList.add("item");
        inputField.classList.add("input");

        // combine elements together
        question.append(lable, inputField);
        questions.append(question);
    });


});

saveBtn.addEventListener("click", save);



clearBtn.addEventListener("click", () => {
    localStorage.clear();
    inputs.forEach((input) => {
        input.value = "";
    });
});

exportBtn.addEventListener("click", () => {
    //     const data = {};

    //     Object.keys(localStorage).forEach((key) => {
    //         if (key.startsWith("konafa_")) {
    //             data[key] = localStorage.getItem(key);
    //         }
    //     });

    //     if (Object.keys(data).length === 0) {
    //         alert("لا توجد بيانات محفوظه ليتم التصدير");
    //         return;
    //     }



    //     const formatted = Object.entries(data).map(
    //         ([key, value]) => ({
    //             Field: key,
    //             Value: value,
    //         }
    //         ));


    //     console.log(formatted);

    //     const worksheet = XLSX.utils.json_to_sheet(formatted);
    //     const workbook = XLSX.utils.book_new();

    //     XLSX.utils.book_append_sheet(workbook, worksheet, "sheet 1");
    //     XLSX.writeFile(workbook, "Quality_Report.xlsx");
    // 

    const data = {};

    Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("konafa_")) {
            data[key] = localStorage.getItem(key);
        }
    });

    if (Object.keys(localStorage).length === 0) {
        alert("من فضلك احفظ بعض البيانات ليتم التصدير");
        return;
    }

    const formatted = Object.entries(data).map(
        ([key, value]) => ({
            Field: key,
            Value: value,
        }
        )
    );

    const worksheet = XLSX.utils.json_to_sheet(formatted);
    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "sheet1");
    XLSX.writeFile(workbook, "Quality_Report.xlsx");
}
);

