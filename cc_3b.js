const inventory = [
    {SKU: "SKU-0004", Name: "Pencil", Price: 5.00, Stock: 10},
    {SKU: "SKU-0002", Name: "Pen", Price: 7.00, Stock: "12" },
    {SKU: "SKU-0007", Name: "Chair",Price: 15.00, Stock: "5" },
    {SKU: "SKU-0010", Name: "Marker", Price: 20.00, Stock: "17"}
]

inventory.forEach(obj =>console.log(`SKU: ${obj.SKU}`)(`Name: ${obj.Name}`));

