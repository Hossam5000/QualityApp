// cons & vars
const list = [1, 2, 3, 4, 5, 6];
const container = document.querySelector(".container");
const milkSection =
{
    "title": "mainaaa",
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
    Object.keys(milkSection).forEach(item => {
        // HTML creation
        // 
        const section = document.createElement("section");
        const sectionTitle = document.createElement("h1");
        const division = document.createElement("div");
        const divisionTitle = document.createElement("h2");
        const questions = document.createElement("questions");
        const question = document.createElement("question");
        const questionText = document.createElement("span");
        const questionInput = document.createElement("input");

        //HTML attributes
        questionInput.setAttribute("type", "text");

        // HTML content
        section.textContent = "section"
        divisionTitle.textContent = milkSection.title;

        // CSS styles
        division.classList.add("division");
        divisionTitle.classList.add("division-title");
        questions.classList.add("questions");
        question.classList.add("question");
        questionText.classList.add("item");
        questionInput.classList.add("input");



        // combination
        question.append(questionText, questionInput);
        questions.append(question);
        division.append(questions, divisionTitle);
        section.append(sectionTitle, division);
        container.append(section);
        console.log(container);

        console.log(section);

    });
};

// events
window.addEventListener("load", () => {
    createSection();
});
