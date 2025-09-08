const ExcelJS = window.ExcelJS; // assuming you're loading exceljs via CDN

const jsonData = [
    { id: 1, name: "ahmed", role: "QC" },
    { id: 2, name: "sadek", role: "labeler" },
    { id: 3, name: "ali", role: "supervisor" },
];

async function exceljsTest() {
    // creating a workbook and a worksheet
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Sheet 1", {
        properties: { tabColor: { argb: "ff0000" } }
    });
    // columns
    // --create
    ws.columns = [
        { header: "ID", key: "id" },
        { header: "NAME", key: "name" },
        { header: "Fantastic", key: "role" },
    ];
    // --add
    const secondCol = ws.getColumn("name");
    const idCol = ws.getColumn(3);
    const col5 = ws.getColumn(6);

    const newCol3Values = [1, 2, 3, 4, 5];
    const newCol4Values = ['one', 'two', 'three', 'four', 'five'];
    ws.spliceColumns(3, 1, newCol3Values, newCol4Values);



    // add rows
    jsonData.forEach(item =>
        ws.addRow(item)
    );
    ws.getRow(1).font = { bold: true };

    // Export for browser
    const buffer = await wb.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "training-output.xlsx";
    a.click();
    URL.revokeObjectURL(url);

    console.log("Workbook exported successfully.", col5.values);
}

