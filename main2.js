// excel code [just a small training on the exclejs and it isn't part of the project]
const jsonData = [
    { id: 1, name: "ahmed", role: "QC" },
    { id: 2, name: "sadek", role: "labeler" },
    { id: 3, name: "ali", role: "supervisor" },
];

function exclejsTest(data) {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("sheet 1", { properties: { tabColor: { argb: "ff0000" } } });

    ws.columns = [
        { header: "ID", key: "id" },
        { header: "NAME", key: "name" },
        { header: "ROLE", key: "role" },
    ];

    ws.getRow(1).font = { bold: true };

    await wb.xlsx.writeFile("train one.xlsx");
    console.log("success");
};

exclejsTest(jsonData);