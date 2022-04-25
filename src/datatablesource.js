export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        fields: "user",
        headerName: 'User',
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 230,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },

];

//temporary database

export const userRows = [
    {
        id: 1,
        username: ' Jon Snow',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'pending',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 2,
        username: 'Cersei Lannister',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 3,
        username: 'Jaime Lannister',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'passive',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 4,
        username: 'Arya Stark',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 5,
        username: 'Daenerys Targaryen',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 6,
        username: 'Ferrara Clifford',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'pending',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 7,
        username: 'Rossini Frances',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'active',
        email: '1snow@gmail.com',
        age: 35,
    },
    {
        id: 8,
        username: 'Harvey Roxie',
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/485px-User_icon-cp.svg.png",
        status: 'passive',
        email: '1snow@gmail.com',
        age: 35,
    },
]