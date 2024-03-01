export const userColumns = [
    {field: "id", headerName: "ID", width: 70}, 
    {
        field: "user", 
        headerName: "User", 
        width: 230, 
        rendercell: (params)=> {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt=""/>
                    {params.row.username} 
            </div>
            )
        },
    },
    {
        field: "email", 
        headerName: "Email",
            width: 230,
    },
    {
        field: "age", 
        headerName: "Age",
        width: 100,
    },
    {
        field: "status", 
        headerName: "Status",
        width: 160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },



]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Raja",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "pending",
        email: "raja@gmail.com",
        age: 30
    },
    {
        id: 3,
        username: "Mahesh",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "passive",
        email: "mahesh@gmail.com",
        age: 33
    },
    {
        id: 4,
        username: "vishwas",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "pending",
        email: "vishwas@gmail.com",
        age: 35
    },
    {
        id: 5,
        username: "Snow",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "snow2@gmail.com",
        age: 35
    },
    {
        id: 6,
        username: "prakash",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "prakash@gmail.com",
        age: 35
    },
    {
        id: 7,
        username: "adi",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "adi@gmail.com",
        age: 32
    },
    {
        id: 8,
        username: "nanda",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "nanda@gmail.com",
        age: 23
    },
    {
        id: 9,
        username: "ragini",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "ragini@gmail.com",
        age: 43
    },
    {
        id: 10,
        username: "rutu",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        status: "active",
        email: "rutu@gmail.com",
        age: 25
    },
]