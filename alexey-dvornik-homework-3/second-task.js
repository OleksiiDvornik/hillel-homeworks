const checkUsers = () => {
    let users = [
        {
            "isActive": true,
            "balance": "226.60",
            "name": "Eugenia Sawyer",
            "phone": "+1 (840) 583-3207",
        },
        {
            "isActive": false,
            "balance": "2613.77",
            "name": "Pauline Gallegos",
            "phone": "+1 (985) 593-3328",
        },
        {
            "isActive": false,
            "balance": "3976.41",
            "name": "Middleton Chaney",
            "phone": "+1 (995) 591-2478",
        },
        {
            "isActive": true,
            "balance": "1934.58",
            "name": "Burns Poole",
            "phone": "+1 (885) 559-3422",
        },
        {
            "isActive": false,
            "balance": "3261.65",
            "name": "Mcfadden Horne",
            "gender": "male",
            "phone": "+1 (942) 565-3988",
        },
    ]

    let filteredUsers = users.filter(n => n.isActive === true && n.balance > 2000);

    if (filteredUsers.length > 0) {
        let getNumbers = filteredUsers.map (n => n.phone);
        console.log(getNumbers);
    } else {
        console.log("Подходящих пользователей не найдено")
    }
}