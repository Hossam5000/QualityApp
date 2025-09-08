// CONS & VARS
const container = document.querySelector(".container");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const exportBtn = document.getElementById("export");

const sectionsData = [
    {
        floor: "الشرقي",
        sections: [
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
                            "يتم تنظيف وغسيل ادوات التقطيع والماكينه بعد الانتهاء من المنتجات المحتوية على مسببات حساسية"
                        ]
                    },
                    {
                        divisionTitle: "الاستيور",
                        questions: [
                            "نظافة الابواب من الداخل والخارج و البلاعات",
                            "نظافة الارضيات",
                            "نظافة الاسقف وعدم تقشير الدهان",
                            "نظافة حوض التعقييم",
                            "نظافة الحوائط والاركان بين الأرضيات والحوائط",
                            "وجود كيس داخل صناديق المخلفات",
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "التاكد من وجود صابون ايدي وكحول بالقسم"
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
            }
        ]
    },
    {
        floor: "الغربي",
        sections: [
            {
                sectionTitle: "قسم الافران",
                divisions: [
                    {
                        divisionTitle: "افران الشرقي",
                        questions: [
                            "التأكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "نظافة الصواني والصاجات المستخدمة",
                            "التأكد من عدم وجود دبابيس ومشبك ورق داخل القسم",
                            "نظافة اعلي واسفل البنوك",
                            "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية",
                            "الالتزام بترتيب المنطقة المتفق عليه",
                            "نظافة الصفيات الكبيرة",
                            "نظافة الصفيات الصغيرة",
                            "نظافة الاستاندات",
                            "نظافة ماكينة حفظ العسل",
                            "نظافة البرانيك المستخدمة في العملية الانتاجية",
                            "التأكد من عدم وجود اي منتجات زيادة من البسبوسة",
                            "نظافة ماكينة التسمين",
                            "نظافة ماكينة الملبن"
                        ]
                    },
                    {
                        divisionTitle: "افران الغربي",
                        questions: [
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "التأكد من عدم وجود دبابيس ومشبك ورق داخل القسم",
                            "نظافة اعلي واسفل البنوك",
                            "جميع الخامات الوسيطة معرفة بشكل صحيح وغير منتهية الصلاحية",
                            "الالتزام بترتيب المنطقة المتفق عليه",
                            "نظافة البرانيك المستخدمة في العملية الانتاجية",
                            "نظافة الحمام المائي"
                        ]
                    },
                    {
                        divisionTitle: "افران المخبوزات",
                        questions: [
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "نظافة الاستاندات الثابته",
                            "التأكد من عدم وجود دبابيس ومشبك ورق داخل القسم",
                            "نظافة اعلي واسفل البنوك",
                            "الالتزام بترتيب المنطقة المتفق عليه",
                            "نظافة البرانيك المستخدمة في العملية الانتاجية"
                        ]
                    },
                    {
                        divisionTitle: "الاستيوار",
                        questions: [
                            "نظافة الارضيات",
                            "نظافة حوض التعقييم",
                            "نظافة الحوائط والاركان بين الأرضيات والحوائط",
                            "وجود كيس داخل صناديق المخلفات",
                            "التأكد من وجود صابون ايدي وكحول بالقسم",
                            "نظافة الابواب من الداخل والخارج و البلاعات",
                            "نظافة الصاجات المستخدمة",
                            "نظافة الابواب من الداخل والخارج",
                            "نظافة الارضيات و البلاعات"
                        ]
                    },
                    {
                        divisionTitle: "الاستيوار (معدات)",
                        questions: [
                            "نظافة الافران من الخارج",
                            "نظافة الشعلة",
                            "نظافة ماكينة الاجلاسيات"
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
                sectionTitle: "قسم البقلاوة",
                divisions: [
                    {
                        divisionTitle: "البقلاوة",
                        questions: [
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "نظافة الصواني والصاجات المستخدمة",
                            "التأكد من عدم وجود دبابيس ومشبك ورق داخل القسم",
                            "نظافة اعلي واسفل البنوك",
                            "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية",
                            "الالتزام بترتيب المنطقة المتفق عليه",
                            "نظافة ماكينة المكسرات",
                            "نظافة ماكينة التسمين",
                            "نظافة دولاب الادوات",
                            "نظافة البرانيك المستخدمة في العملية الانتاجية",
                            "نظافة ماكينة فرد العجين",
                            "نظافة الاستاندات وتعريف المنتجات في غرفة التبريد",
                            "يتم تنظيف وغسيل ادوات التقطيع والماكينه والاستاندات بعد الانتهاء من المنتجات المحتوية على مسببات حساسية"
                        ]
                    },
                    {
                        divisionTitle: "الاستيوار",
                        questions: [
                            "نظافة الابواب من الداخل والخارج و البلاعات",
                            "نظافة الارضيات",
                            "نظافة الاسقف وعدم تقشير الدهان",
                            "نظافة حوض التعقييم",
                            "نظافة الحوائط والاركان بين الأرضيات والحوائط",
                            "وجود كيس داخل صناديق المخلفات",
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "التاكد من وجود صابون ايدي وكحول بالقسم"
                        ]
                    },
                    {
                        divisionTitle: "الصيانة",
                        questions: [
                            "نظافة الترولي الثابت"
                        ]
                    }
                ]
            }
        ]
    },
    {
        floor: "الثالث",
        sections: [
            {
                sectionTitle: "مخبوزات",
                division: [
                    {
                        divisionTitle: [
                            "نظافة الابواب من الداخل والخارج و البلاعات",
                            "نظافة الارضيات ",
                            "نظافة الاسقف وعدم تقشير الدهان",
                            "نظافة حوض التعقييم ",
                            "نظافة الحوائط والاركان بين االارضيات والحوائط ",
                            "وجود كيس داخل  صناديق المخلفات ",
                            "التاكد من فصل بين انواع المخلفات ووجود تعريف لكل نوع",
                            "التاكد من وجود صابون ايدي وكحول بالقسم ",
                            "نظافة  الصاجات المستخدمة ",
                            "التأكد من عدم وجود دبابيس ومشبك ورق  داخل القسم ",
                            "نظافة اعلي واسفل البنوك ",
                            "جميع الخامات معرفة بشكل صحيح وغير منتهية الصلاحية ",
                            "الالتزام بترتيب المنطقة المتفق عليه ",
                            "نظافة عبوات الخامات من الخارج ", "نظافة الاستاندات الثابتة ", "نظافة ماكينة التكسير ",
                            "نظافة ماكينة البقسماط ",
                            "نظافة ماكينة الفينو ",
                            "نظافة العجان ",
                            "نظافة ماكينة فرد العجين",
                            "نظافة الميزان ",
                            "نظافة البرانيك المستخدمة في العملية الانتاجية ",
                            "نظافة ماكينة التوست ",
                            "نظافة الصحارة ",
                            "التاكد من نظافة المعدات والادوات والاستاندات بعد الانتهاء من المواد التي تحتوي علي مسببات حساسية ",
                        ],
                    }
                ]
            }

        ]
    },
];

// FUNCTIONS
function createSections(sections) {
    sections.forEach(sectionData => {
        // Create section
        const section = document.createElement("section");
        section.classList.add("checklist-section");

        // Section title
        const sectionTitle = document.createElement("h2");
        sectionTitle.textContent = sectionData.sectionTitle;
        sectionTitle.classList.add("section-title");
        section.appendChild(sectionTitle);

        // Loop through divisions
        sectionData.divisions.forEach(divisionData => {
            // Create division
            const division = document.createElement("div");
            division.classList.add("division");

            // Division title
            const divisionTitle = document.createElement("h3");
            divisionTitle.textContent = divisionData.divisionTitle;
            divisionTitle.classList.add("division-title");
            division.appendChild(divisionTitle);

            // Questions container
            const questionsContainer = document.createElement("div");
            questionsContainer.classList.add("questions");

            // Loop through questions
            divisionData.questions.forEach(questionText => {
                // Create question wrapper
                const question = document.createElement("div");
                question.classList.add("question");

                // Question label
                const questionLabel = document.createElement("span");
                questionLabel.textContent = questionText.trim();
                questionLabel.classList.add("item");

                // Question input (number only, 0–10)
                const questionInput = document.createElement("input");
                questionInput.setAttribute("type", "number");
                questionInput.setAttribute("min", "0");
                questionInput.setAttribute("max", "10");
                questionInput.setAttribute("step", "1");
                questionInput.classList.add("input");

                // Enforce strict numeric bounds
                questionInput.addEventListener("input", () => {
                    let val = parseInt(questionInput.value, 10);
                    if (isNaN(val)) return;
                    if (val > 10) questionInput.value = "10";
                    if (val < 0) questionInput.value = "0";
                });

                // Append label and input to question
                question.append(questionLabel, questionInput);
                questionsContainer.appendChild(question);
            });

            // Append division to section
            division.appendChild(questionsContainer);
            section.appendChild(division);
        });

        // Append section to container
        container.appendChild(section);
    });
}



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
    });

    localStorage.setItem("Data", JSON.stringify(savedData));
});

clearBtn.addEventListener("click", () => {
    // Clear all input fields
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
        input.value = "";
    });

    // Remove saved data from localStorage
    localStorage.removeItem("Data");

    // Optional: show confirmation
    const toast = document.createElement("div");
    toast.textContent = "تم حذف البيانات بنجاح";
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: red;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
});


// excel function
async function exportChecklistToExcel() {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("الشرقي");

    worksheet.columns = [
        { header: "القسم / الوحدة", key: "group", width: 40 },
        { header: "السؤال", key: "question", width: 50 },
        { header: "الإجابة", key: "answer", width: 30 },
    ];

    // Traverse the DOM to extract structured data
    document.querySelectorAll(".checklist-section").forEach(section => {
        const sectionTitle = section.querySelector(".section-title")?.textContent.trim();

        section.querySelectorAll(".division").forEach(division => {
            const divisionTitle = division.querySelector(".division-title")?.textContent.trim();
            const groupLabel = `${sectionTitle} / ${divisionTitle}`;

            division.querySelectorAll(".question").forEach(question => {
                const questionText = question.querySelector(".item")?.textContent.trim();
                const answer = question.querySelector(".input")?.value.trim();

                worksheet.addRow({
                    group: groupLabel,
                    question: questionText,
                    answer: Number(answer), // force numeric type
                });

            });
        });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Checklist.xlsx";
    a.click();
    URL.revokeObjectURL(url);
}

