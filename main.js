// CONS & VARS
const container = document.querySelector(".container");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");

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
                divisionTitle: "الصيانة",
                questions: [
                    "نظافة الاسقف وعدم تقشير الدهان"
                ]
            }
        ]
    },
    {
        sectionTitle: "قسم البسبوسة",
        divisions: [
            {
                divisionTitle: "البسبوسة",
                questions: [
                    "هل تم تحضير المكونات؟",
                    "هل تم تنظيف القوالب؟"
                ]
            },
            {
                divisionTitle: "الاستيور",
                questions: [
                    "هل تم ترتيب الأدوات؟",
                    "هل تم التأكد من صلاحية المواد؟"
                ]
            },
            {
                divisionTitle: "الصيانة",
                questions: [
                    "هل تم فحص المعدات؟",
                    "هل تم تسجيل الأعطال؟"
                ]
            }
        ]
    },
    {
        sectionTitle: "قسم الافران",
        divisions: [
            {
                divisionTitle: "افران الشرقي",
                questions: [
                    "التأكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "نظافة الصواني والصاجات المستخدمة ",
                    "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
                    "نظافة اعلي واسفل البنوك ",
                    "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية ",
                    "الالتزام بترتيب المنطقة المتفق عليه ",
                    " نظافة الصفيات الكبيرة ",
                    "نظافة الصفيات الصغيرة ",
                    "نظافة الاستاندات",
                    "نظافة ماكينة حفظ العسل ",
                    "نظافة البرانيك المستخدمة في العملية الانتاجية ",
                    "التأكد من عدم وجود اي منتجات زيادة من البسبوسة",
                    "نظافة ماكينة التسمين ",
                    "نظافة ماكينة الملبن"
                ]
            },

            {
                divisionTitle: "افران الغربي",
                questions: [
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
                    "نظافة اعلي واسفل البنوك ",
                    "جميع الخامات  الوسيطة  معرفة بشكل صحيح وغير منتهية الصلاحية ",
                    "الالتزام بترتيب المنطقة المتفق عليه ",
                    "نظافة البرانيك المستخدمة في العملية الانتاجية ",
                    "نظافة الحمام المائي"
                ]
            },
            {
                divisionTitle: "افران المخبوزات",
                questions: [
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "نظافة الاستاندات الثابته",
                    "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم",
                    "نظافة اعلي واسفل البنوك ",
                    "الالتزام بترتيب المنطقة المتفق عليه",
                    "نظافة البرانيك المستخدمة في العملية الانتاجية "
                ]
            },
            {
                divisionTitle: "الاستيوار",
                questions: [
                    "نظافة الارضيات ",
                    "نظافة حوض التعقييم ",
                    "نظافة الحوائط والاركان بين االارضيات والحوائط ",
                    "وجود كيس داخل  صناديق المخلفات ",
                    "التأكد من وجود صابون ايدي وكحول بالقسم ",
                    "نظافة الابواب من الداخل والخارج و البلاعات   ",
                    "نظافة الارضيات ",
                    "نظافة حوض التعقييم",
                    "نظافة الحوائط والاركان بين الارضيات والحوائط ",
                    "وجود كيس داخل  صناديق المخلفات",
                    "التاكد من وجود صابون ايدي وكحول بالقسم ",
                    "نظافة الصاجات المستخدمة ",
                    "نظافة الابواب من الداخل والخارج  ",
                    "نظافة الارضيات  و البلاعات ",
                    "نظافة حوض التعقييم ",
                    "نظافة الحوائط والاركان بين الارضيات والحوائط ",
                    "وجود كيس داخل  صناديق المخلفات ",
                    "التاكد من وجود صابون ايدي وكحول بالقسم "
                ]
            },
            {
                divisionTitle: "الاستيوار (معدات)",
                questions: [
                    "نظافة الافران  من الخارج  ",
                    "نظافة الشعلة ",
                    "نظافة ماكينة الاجلاسيات",
                ]
            },
            {
                divisionTitle: "الصيانة",
                questions: [
                    "نظافة الاسقف وعدم تقشير الدهان  ",
                ]
            }
        ]
    },
    {
        sectionTitle: "قسم البقلاوة",
        divisions: [
            {
                divisionTitle: "البقلاوة",
                questions: [
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "نظافة الصواني والصاجات المستخدمة ",
                    "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
                    "نظافة اعلي واسفل البنوك ",
                    "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية ",
                    "الالتزام بترتيب المنطقة المتفق عليه ",
                    "نظافة ماكينة المكسرات   ",
                    "نظافة ماكينة التسمين ",
                    "نظافة دولاب الادوات ",
                    "نظافة البرانيك المستخدمة في العملية الانتاجية ",
                    "نظافة ماكينة فرد العجين ",
                    "نظافة الاستاندات وتعريف المنتجات في غرفة التبريد",
                    " يتم تنظيف وغسيل ادوات التقطيع والماكينه والاستاندات بعد ا الانتهاء من المنتجات المحتوي علي مسببات حساسية"
                ]
            },
            {
                divisionTitle: "الاستيوار",
                questions: [
                    "نظافة الابواب من الداخل والخارج و البلاعات",
                    "نظافة الارضيات",
                    "نظافة الاسقف وعدم تقشير الدهان  ",
                    "نظافة حوض التعقييم",
                    "نظافة الحوائط والاركان بين االارضيات والحوائط ",
                    "وجود كيس داخل  صناديق المخلفات ",
                    "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                    "التاكد من وجود صابون ايدي وكحول بالقسم"
                ]
            },
            {
                divisionTitle: "الصيانة",
                questions: [
                    "نظافة الترولي الثابت",
                ]
            },
        ]
    }
];

// FUNCTIONS
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
            divisionTitle.textContent = divisionData.divisionTitle;
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
                questionLabel.textContent = questionText.trim();
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
};



// EVENTS
window.addEventListener("load", () => {
    createSections(sectionsData);
});

saveBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".input");
    const savedData = [];
    inputs.forEach((input, index) => {
        savedData.push({
            "index": index,
            "value": input.value.trim(),
        });
        console.log(input);
    });

    localStorage.setItem("Data", JSON.stringify(savedData));
});
