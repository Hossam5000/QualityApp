const container = document.querySelector(".container");

const sectionsData = [
    {
        sectionTitle: "قسم الكنافة",
        divisions: [
            {
                divisionTitle: "الكنافة",
                questions: [
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
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

                ]
            },
            {
                divisionTitle: "الاستيور",
                questions: [
                    "نظافة الابواب من الداخل والخارج و البلاعات  ",
                    "نظافة الارضيات  ",
                    "نظافة الاسقف وعدم تقشير الدهان  ",
                    "نظافة حوض التعقييم ",
                    "نظافة الحوائط والاركان بين االارضيات والحوائط ",
                    "وجود كيس داخل  صناديق المخلفات ",
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "التاكد من وجود صابون ايدي وكحول بالقسم ",
                ]
            },
            {
                title: "الصيانة",
                questions: [
                    "هل تم فحص المعدات؟",
                    "هل تم تسجيل الأعطال؟"
                ]
            }
        ]
    },
    {
        sectionTitle: "قسم البسبوسة",
        divisions: [
            {
                title: "البسبوسة",
                questions: [
                    "هل تم تحضير المكونات؟",
                    "هل تم تنظيف القوالب؟"
                ]
            },
            {
                title: "الاستيور",
                questions: [
                    "هل تم ترتيب الأدوات؟",
                    "هل تم التأكد من صلاحية المواد؟"
                ]
            },
            {
                title: "الصيانة",
                questions: [
                    "هل تم فحص المعدات؟",
                    "هل تم تسجيل الأعطال؟"
                ]
            }
        ]
    }
];

function createSections(sections) {
    sections.forEach(sectionData => {
        // section
        const section = document.createElement("section");
        section.classList.add("checklist-section");

        // section title
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = sectionData.sectionTitle;
        sectionTitle.classList.add("section-title");
        section.appendChild(sectionTitle);

        // section data
        sectionData.divisions.forEach(divisionData => {
            // division
            const division = document.createElement("div");
            division.classList.add("division");

            // division title
            const divisionTitle = document.createElement("h3");
            divisionTitle.textContent = divisionData.title;
            divisionTitle.classList.add("division-title");
            division.appendChild(divisionTitle);

            // question container
            const questionsContainer = document.createElement("div");
            questionsContainer.classList.add("questions");

            // questions
            divisionData.questions.forEach(questionText => {
                // question
                const question = document.createElement("div");
                question.classList.add("question");

                // question label
                const questionLabel = document.createElement("span");
                questionLabel.textContent = questionText;
                questionLabel.classList.add("item");

                // question input
                const questionInput = document.createElement("input");
                questionInput.setAttribute("type", "text");
                questionInput.classList.add("input");

                question.append(questionLabel, questionInput);
                questionsContainer.appendChild(question);
            });

            division.appendChild(questionsContainer);
            section.appendChild(division);
        });

        container.appendChild(section);
    });
}

window.addEventListener("load", () => {
    createSections(sectionsData);
});
